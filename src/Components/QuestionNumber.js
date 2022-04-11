import React from 'react';

export default function QuestionNumber({ questionNumber, feedback }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: feedback
          ? feedback === 'CORRECT'
            ? '#20c997'
            : '#dc3545'
          : '#000',
        color: '#fff',
        marginRight: 20,
      }}
    >
      {feedback ? (
        feedback === 'CORRECT' ? (
          <i
            style={{
              position: 'absolute',
              top: 0,
              background: '#fff',
              borderRadius: '50%',
              color: '#20c997',
              left: 55,
              border: '1px solid #20c997',
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="bi bi-check2"
          ></i>
        ) : (
          <i
            className="bi bi-x"
            style={{
              position: 'absolute',
              top: 0,
              background: '#fff',
              borderRadius: '50%',
              color: 'red',
              left: 55,
              border: '1px solid red',
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          ></i>
        )
      ) : null}
      {questionNumber}
    </div>
  );
}
