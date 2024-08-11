import css from './Options.module.css';

export default function Options({ grades, onclick, totalCounts, onreset }) {
  return (
    <ul className={css.list}>
      {grades.map(grade => (
        <li key={grade}>
          <button
            className={css.button}
            type="button"
            onClick={() => onclick(grade)}
          >
            {grade}
          </button>
        </li>
      ))}
      {totalCounts > 0 && (
        <li>
          <button className={css.button} type="reset" onClick={onreset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
