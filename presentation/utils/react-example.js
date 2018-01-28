import React from "react";
import { ComponentPlayground } from "spectacle";

const basicReactExample = `
// Everything extends React.Component

/*


*/
//render(<MyComponent />, "root");
`;


export default ({ code }) => (
  <ComponentPlayground
    theme="dark"
    code={code || basicReactExample}
  />
);
