export default function Options({ keys, onclick }) {
  return (
    <>
      {keys.map(key => (
        <button key={key} type="button" onClick={onclick()}>
          {key}
        </button>
      ))}
      <button type="reset">Reset</button>
    </>
  );
}
