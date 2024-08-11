import css from './Feedback.module.css';
export default function Feedback({ count, grades, totalCounts, positive }) {
  return (
    <>
      {grades.map(grade => (
        <p className={css.text} key={grade}>
          {grade}: {count[grade]}
        </p>
      ))}
      {totalCounts > 0 && (
        <>
          <p>Total: {totalCounts}</p>
          <p>Positive: {positive}%</p>
        </>
      )}
    </>
  );
}
