const App = () => (
  <div>
    <Tweet username="Tommy123" name="Tommy" date="Today" tweet="I love candy" />
    <Tweet username="Tony123" name="Tony" date="Today" tweet="I love soup" />
    <Tweet username="Terry123" name="Terry" date="Today" tweet="I love women" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
