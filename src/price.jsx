export default function Price({OldPrice, NewPrice}) {
  let oldpricestyle = {
    textDecoration: "line-through",
    color: "red",
  };

  let newpricestyle = {
    fontWeight: 700,
    fontSize: "18px",
    color: "#111",
    letterSpacing: "0.3px",
  };

  let style = {
    backgroundColor: "#e0c367",
    height: "50px",
  };
  return (
    <div style={style}>
      <span style={oldpricestyle}> {OldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newpricestyle}> {NewPrice}</span>
    </div>
  );
}
