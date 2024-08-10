export default function Feedback({ count, keys }) {
  return (
    <>
      {keys.map(key => (
        <p key={key}>
          {key}: {count[key]}
        </p>
      ))}
    </>
  );
}
