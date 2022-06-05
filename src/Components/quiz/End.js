import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const End = ({ results, data, onReset, onAnswersCheck, time }) => {
       
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  const updatePoints = async () => {
    // console.log("11",data);
    fetch(`http://127.0.0.1:8000/update_points/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: localStorage.getItem("name"),score: correctAnswers.toString() }),
  
  })
}

  let navigate = useNavigate(); 
  const routeChange1 = () =>{ 
    updatePoints()
    let path = `/`; 
    navigate(path);
  }

  const routeChange2 = () =>{ 
    updatePoints()
    let path = `/Leaderboard`; 
    navigate(path);
  }

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p>Congratulations, you have gotten points</p>
          <button onClick={routeChange1}>Back</button>
          <button onClick={routeChange2}>Show Leaderboard</button>
        </div>
      </div>
    </div>
  );
}

export default End;