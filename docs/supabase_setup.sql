-- ==========================================================
-- ClassChamp Database Schema for Supabase (PostgreSQL)
-- Supports: 30-Day Free Trial, Phone OTP / Email Login, Cloud Sync & Subscriptions
-- ==========================================================

-- 1. Create Profiles Table (Linked to Supabase Auth)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  phone text,
  email text,
  student_name text default 'Champ' not null,
  grade integer default 1 not null,
  avatar_id text default 'lion' not null,
  total_stars integer default 0 not null,
  total_trophies integer default 0 not null,
  current_streak integer default 0 not null,
  is_pro boolean default false not null,
  subscription_plan text, -- 'monthly' or 'yearly'
  subscription_expires_at timestamp with time zone,
  trial_started_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- 3. RLS Security Policies (User can only access & update their own record)
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 4. Automatically create a profile record when a parent signs up via Phone/Email
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, phone, email, student_name, trial_started_at)
  values (
    new.id,
    new.phone,
    new.email,
    'Champ',
    timezone('utc'::text, now())
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

-- Drop existing trigger if re-running
drop trigger if exists on_auth_user_created on auth.users;

-- Create the trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 5. Helper Function to Check if 30-Day Trial is Active
create or replace function public.is_trial_valid(user_id uuid)
returns boolean as $$
declare
  started_at timestamp with time zone;
  is_active boolean;
begin
  select trial_started_at into started_at
  from public.profiles
  where id = user_id;

  if started_at is null then
    return true;
  end if;

  -- 30 days check
  return (timezone('utc'::text, now()) - started_at) <= interval '30 days';
end;
$$ language plpgsql security definer;
