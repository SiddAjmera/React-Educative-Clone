import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Question from '../Components/Question';

export default function Quiz() {
  const questions = [
    {
      question: 'What is “Leadership”?',
      name: 'question-1',
      isMultiSelect: false,
      options: [
        {
          id: 'q1-o1',
          isAnswer: true,
          label: 'The art of influencing behaviour so as to achieve a goal.',
          feedback:
            'Correct!  Although some consider it a “craft” because it is part art, part science.',
        },
        {
          id: 'q1-o2',
          label:
            'Anyone responsible for influencing human behaviour and for the achievement of a goal by a group.',
          feedback:
            'Not quite.  This more accurately describes a leader rather than leadership.',
        },
        {
          id: 'q1-o3',
          label: 'A sea-faring vessel full of leaders.',
          feedback: 'Funny, but no.',
        },
      ],
    },
    {
      question:
        'Which of the following are examples of leaders? (Choose all that apply)',
      name: 'question-2',
      isMultiSelect: true,
      options: [
        {
          id: 'q2-o1',
          label: 'Military Officers.',
          feedback:
            'Correct!  If there is gold on the shoulder, they are a leader.',
          isAnswer: true,
        },
        {
          id: 'q2-o2',
          label: 'Jedi Knights.',
          feedback:
            'Correct!  Although they answer to the Jedi council, they also have prodigies that they must lead and mentor in the ways of The Force.',
          isAnswer: true,
        },
        {
          id: 'q2-o3',
          label: 'Civil Servants.',
          feedback:
            'Correct! Contrary to what the name suggests, these people are considered to be leaders of the public.',
          isAnswer: true,
        },
        {
          id: 'q2-o4',
          label: 'Padawans.',
          feedback:
            'Star Wars fans will know that this the name given to young apprentices of the Jedi Knights.  Padawans are followers and leaders-in-training.',
        },
      ],
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState();
  const [selectedAnswersIndex, setSelectedAnswersIndex] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState();
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerCorrect();
      setSelectedAnswerIndex();
      setSelectedAnswersIndex([]);
      setCurrentQuestionAnswered(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsAnswerCorrect();
      setSelectedAnswerIndex();
      setSelectedAnswersIndex([]);
      setCurrentQuestionAnswered(false);
    }
  };

  const handleSubmit = () => {
    setQuestionsAttempted(questionsAttempted + 1);

    if (questions[currentQuestionIndex].isMultiSelect) {
      const correctAnswersIndex = questions[currentQuestionIndex].options
        .map(({ isAnswer }, index) => (isAnswer ? index : null))
        .filter((index) => index !== null);
      const isAnswerCorrectToSet = correctAnswersIndex.every((optionIndex) =>
        selectedAnswersIndex.includes(optionIndex)
      );
      debugger;
      setIsAnswerCorrect(isAnswerCorrectToSet);
    } else {
      setIsAnswerCorrect(
        !!questions[currentQuestionIndex].options[selectedAnswerIndex].isAnswer
      );
    }
    setCurrentQuestionAnswered(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex();
    setSelectedAnswersIndex([]);
    setIsAnswerCorrect();
    setQuestionsAttempted(0);
    setCurrentQuestionAnswered(false);
  };

  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Text muted>
            Let's test your understanding of Leadership Styles and Motivators
          </Form.Text>
        </ListGroup.Item>

        <Question
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          selectedAnswerIndex={selectedAnswerIndex}
          setSelectedAnswerIndex={setSelectedAnswerIndex}
          selectedAnswersIndex={selectedAnswersIndex}
          setSelectedAnswersIndex={setSelectedAnswersIndex}
          isAnswerCorrect={isAnswerCorrect}
        />

        <ListGroup.Item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="outline-secondary" onClick={resetQuiz}>
            Reset Quiz <i className="bi bi-arrow-clockwise"></i>
          </Button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              style={{
                borderRadius: '50%',
              }}
              variant="outline-dark"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
            >
              <i className="bi bi-chevron-left"></i>
            </Button>
            <p
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 20px',
              }}
            >
              <span>
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span>{questionsAttempted} attempted</span>
            </p>
            <Button
              style={{
                borderRadius: '50%',
              }}
              variant="outline-dark"
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              <i className="bi bi-chevron-right"></i>
            </Button>
          </div>
          <Button
            disabled={
              (!questions[currentQuestionIndex].isMultiSelect &&
                !(selectedAnswerIndex >= 0)) ||
              (questions[currentQuestionIndex].isMultiSelect &&
                selectedAnswersIndex.length < 1) ||
              currentQuestionAnswered
            }
            onClick={handleSubmit}
            variant="primary"
          >
            Submit Answer
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
