import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

export default function App() {
  const [count, setCount] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-count');
    return savedObject
      ? JSON.parse(savedObject)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  const totalFeedback = count.good + count.neutral + count.bad;
  const updateFeedback = feedbackType => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };
  const deleteFeedback = () => setCount({ good: 0, neutral: 0, bad: 0 });
  const positive = Math.round((count.good / totalFeedback) * 100);
  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="container">
      <Description />
      <Options
        grades={Object.keys(count)}
        onclick={updateFeedback}
        totalCounts={totalFeedback}
        onreset={deleteFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          count={count}
          grades={Object.keys(count)}
          totalCounts={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}
