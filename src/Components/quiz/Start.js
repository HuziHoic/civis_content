import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="row">
    <div className="column">
    <div className="card quiz1">
      <div className="card-content">
        <div className="content">
          <h1>Quiz on:<br/><br/>Quiz of important geoprahical centres</h1>
          <br/>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    <div className="column">
    <div className="card quiz2">
      <div className="card-content">
        <div className="content">
          <h1>Quiz on:<br/><br/>Quiz on Motor Vehicles Law:</h1>
          <br/>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    <div className="column">
    <div className="card quiz3">
      <div className="card-content">
        <div className="content">
          <h1>Quiz on:<br/><br/>Quiz on Electric Vehicles Law:</h1>
          <br/>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    <div className="column">
    <div className="card quiz4">
      <div className="card-content">
        <div className="content">
          <h1>Quiz on:<br/><br/>Quiz on Current Affairs of Indian Laws:</h1>
          <br/>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Start;