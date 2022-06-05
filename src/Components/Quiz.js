import React from 'react';
import { useEffect, useState, interval} from "react";
import quizData from "./quizData.json";
import quizData2 from "./quizData2.json";
import quizData3 from "./quizData3.json";
import quizData4 from "./quizData4.json";
import './quiz.css'
import Question from './quiz/Question.js';
import Start from './quiz/Start';
import End from './quiz/End';
import Modal from './quiz/Modal';

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      if(step === 3) {
        clearInterval(interval);
      }
    }, [step]);
  
    const quizStartHandler = () => {
      setStep(2);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  
    const resetClickHandler = () => {
      setActiveQuestion(0);
      setAnswers([]);
      setStep(2);
      setTime(0);
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    
  
    return (
        <div className='quizheading'>
            <br/>
            <h2>Test Your Knowledge</h2>
        <br/>
      <div className="Quiz">
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && <Question 
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />}
        {step === 3 && <End 
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
        />}
  
        {showModal && <Modal 
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizData.data}
        />}
      </div>
      <br/><br/>
      </div>
      
    );
}

export default Quiz;





