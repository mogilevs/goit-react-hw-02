import css from './Description.module.css';
export default function Description() {
  return (
    <>
      <h1 className={css.title}>
        <span className={css.titleAccent}>Sip</span> Happens Café
      </h1>
      <p>
        Please leave your feedback <span className={css.text}>about</span> our
        service <span className={css.text}>by</span> selecting one{' '}
        <span className={css.text}>of the</span> options{' '}
        <span className={css.text}>below</span>.
      </p>
    </>
  );
}
