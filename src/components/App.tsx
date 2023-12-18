import * as stylex from "@stylexjs/stylex";
import Card from "./Card.js";
import { Counter } from "./Counter.js";
import "./stylex.css";

const App = ({ name }: { name: string }) => {
  return (
    <div {...stylex.props(styles.root)}>
      <h1>Hello {name}!!</h1>
      <h3>This is a server component.</h3>
      <Counter />
      <Card>Waku App with StyleX</Card>
    </div>
  );
};

export default App;

const styles = stylex.create({
  root: {
    border: "3px red dashed",
    margin: "1em",
    padding: "2em",
  },
});
