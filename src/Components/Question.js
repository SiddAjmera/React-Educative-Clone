import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import QuestionNumber from './QuestionNumber';
import styled from 'styled-components';

const StyledListGroupItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

const StyledCorrectAnswerTag = styled.span`
  color: #20c997;
  position: absolute;
  top: 0;
  left: 100px;
  border: 2px solid #20c997;
  border-radius: 4;
  background: #fff;
  padding: 0px 15px;
`;

const StyledIncorrectAnswerTag = styled.span`
  color: #dc3545;
  position: absolute;
  top: 0;
  left: 100px;
  border: 2px solid #dc3545;
  border-radius: 4;
  background: #fff;
  padding: 0px 15px;
`;

const StyledAnswerTag = styled.span`
  color: #0d6efd;
  position: absolute;
  top: 0;
  left: 100px;
  border: 2px solid #0d6efd;
  border-radius: 4;
  background: #fff;
  padding: 0px 15px;
`;

export default function Question({
  question,
  currentQuestionIndex,
  selectedAnswerIndex,
  setSelectedAnswerIndex,
  selectedAnswersIndex,
  setSelectedAnswersIndex,
  isAnswerCorrect,
}) {
  const selectedOptionChange = (optionIndex) =>
    setSelectedAnswerIndex(optionIndex);

  const selectedOptionsChange = (optionIndex) => {
    if (!selectedAnswersIndex.includes(optionIndex)) {
      const selectedAnswersIndexToSet = [...selectedAnswersIndex, optionIndex];
      setSelectedAnswersIndex(selectedAnswersIndexToSet);
    }
  };

  return (
    <>
      <StyledListGroupItem>
        <QuestionNumber
          questionNumber={currentQuestionIndex + 1}
          feedback={
            isAnswerCorrect === true
              ? 'CORRECT'
              : isAnswerCorrect === false
              ? 'INCORRECT'
              : null
          }
        />
        {question.question}
      </StyledListGroupItem>

      {question.options.map((option, optionIndex) => (
        <ListGroup.Item key={option.id}>
          {question.isMultiSelect ? (
            <>
              {selectedAnswersIndex.includes(optionIndex) ? (
                isAnswerCorrect === true ? (
                  <StyledCorrectAnswerTag>Your Answer</StyledCorrectAnswerTag>
                ) : isAnswerCorrect === false ? (
                  <StyledIncorrectAnswerTag>
                    Your Answer
                  </StyledIncorrectAnswerTag>
                ) : (
                  selectedAnswersIndex.includes(optionIndex) && (
                    <StyledAnswerTag>Your Answer</StyledAnswerTag>
                  )
                )
              ) : null}
              <Form.Check
                disabled={[true, false].includes(isAnswerCorrect)}
                type="radio"
                id={option.id}
                label={option.label}
                onChange={(event) => selectedOptionsChange(optionIndex)}
                style={{
                  border: selectedAnswersIndex.includes(optionIndex)
                    ? `2px solid ${
                        isAnswerCorrect === true
                          ? '#20c997'
                          : isAnswerCorrect === false
                          ? '#dc3545'
                          : '#0d6efd'
                      }`
                    : '',
                  padding: '30px 40px',
                  borderRadius: 4,
                }}
              />
              {selectedAnswersIndex.includes(optionIndex) &&
                [true, false].includes(isAnswerCorrect) && (
                  <span
                    style={{
                      color: `${isAnswerCorrect ? '#20c997' : '#dc3545'}`,
                    }}
                  >
                    <span>Explanation: </span>
                    {option.feedback}
                  </span>
                )}
            </>
          ) : (
            <>
              {selectedAnswerIndex === optionIndex && (
                <span
                  style={{
                    color:
                      isAnswerCorrect === true
                        ? '#20c997'
                        : isAnswerCorrect === false
                        ? '#dc3545'
                        : '#0d6efd',
                    position: 'absolute',
                    top: 0,
                    left: 100,
                    border: `2px solid ${
                      isAnswerCorrect === true
                        ? '#20c997'
                        : isAnswerCorrect === false
                        ? '#dc3545'
                        : '#0d6efd'
                    }`,
                    borderRadius: 4,
                    background: '#fff',
                    padding: '0px 15px',
                  }}
                >
                  Your Answer
                </span>
              )}
              <Form.Check
                disabled={[true, false].includes(isAnswerCorrect)}
                type="radio"
                id={option.id}
                label={option.label}
                name={question.name}
                onChange={(event) => selectedOptionChange(optionIndex)}
                style={{
                  border:
                    selectedAnswerIndex === optionIndex
                      ? `2px solid ${
                          isAnswerCorrect === true
                            ? '#20c997'
                            : isAnswerCorrect === false
                            ? '#dc3545'
                            : '#0d6efd'
                        }`
                      : '',
                  padding: '30px 40px',
                  borderRadius: 4,
                }}
              />
              {selectedAnswerIndex === optionIndex &&
                [true, false].includes(isAnswerCorrect) && (
                  <span
                    style={{
                      color: `${isAnswerCorrect ? '#20c997' : '#dc3545'}`,
                    }}
                  >
                    <span>Explanation: </span>
                    {option.feedback}
                  </span>
                )}
            </>
          )}
        </ListGroup.Item>
      ))}
    </>
  );
}
