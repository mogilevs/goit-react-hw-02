import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  return (
    <>
      <Description></Description>
      <Options keys={Object.keys(count)} onclick={updateFeedback}></Options>
      <Feedback count={count} keys={Object.keys(count)}></Feedback>
    </>
  );
}

export default App;
