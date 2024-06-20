export default function Parent({ owais, func }) {
  return (
    <>
      <h1>{owais}</h1>
      <button onClick={func}>Click me to increase</button>
    </>
  );
}
