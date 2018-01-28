import React from "react";
import { ComponentPlayground } from "spectacle";

const basicReactExample = `
class Timer extends React.Component {
  constructor(props) {
    super(props);

  }

  tick() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Seconds:
      </div>
    );
  }
}

//render(<Timer />, "root");
`;


export default ({ code }) => (
  <ComponentPlayground
    theme="dark"
    code={code || basicReactExample}
  />
);
