import appConfig from '../../app.json';

export const CURRENT_APP_VERSION = `v${appConfig.expo.version}`;
export const APP_BUILD_NUMBER = appConfig.expo.android?.versionCode ?? 20;
