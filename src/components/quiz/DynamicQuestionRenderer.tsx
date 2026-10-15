import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Question } from '../../types';
import { MCQRenderer } from './MCQRenderer';
import { FillBlankRenderer } from './FillBlankRenderer';
import { MatchPairsRenderer } from './MatchPairsRenderer';
import { DragOrderRenderer } from './DragOrderRenderer';

interface DynamicQuestionRendererProps {
  question: Question;
  selectedAnswer: any;
  isSubmitted: boolean;
  onAnswerChange: (answer: any) => void;
}

export const DynamicQuestionRenderer: React.FC<DynamicQuestionRendererProps> = ({
  question,
  selectedAnswer,
  isSubmitted,
  onAnswerChange,
}) => {
  switch (question.type) {
    case 'mcq':
      return (
        <MCQRenderer
          options={question.payload.options || []}
          selectedOption={selectedAnswer}
          isSubmitted={isSubmitted}
          onSelectOption={onAnswerChange}
        />
      );

    case 'fill_blank':
      return (
        <FillBlankRenderer
          displayTemplate={question.payload.displayTemplate || '[BLANK]'}
          wordBank={question.payload.wordBank || []}
          correctAnswer={question.payload.correctAnswer || ''}
          selectedWord={selectedAnswer}
          isSubmitted={isSubmitted}
          onSelectWord={onAnswerChange}
        />
      );

    case 'match_pairs':
      return (
        <MatchPairsRenderer
          pairs={question.payload.pairs || []}
          selectedMatches={selectedAnswer || {}}
          isSubmitted={isSubmitted}
          onUpdateMatches={onAnswerChange}
        />
      );

    case 'drag_order':
      return (
        <DragOrderRenderer
          scrambledTokens={question.payload.scrambled || question.payload.tokens || []}
          currentSequence={selectedAnswer || []}
          correctSequence={question.payload.correctSequence || []}
          isSubmitted={isSubmitted}
          onUpdateSequence={onAnswerChange}
        />
      );

    default:
      return null;
  }
};
