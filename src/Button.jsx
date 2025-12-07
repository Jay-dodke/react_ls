function PrintHello() {
  console.log("Hello!");
}

function PrintPara() {
  console.log("This is para for event demo");
}
export default function Button() {
  return (
    <>
      <button onClick={PrintHello}>Click Me!</button>
      <p onClick={PrintPara}>This is para for event demo </p>
    </>
  );
}
