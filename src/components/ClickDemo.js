import React, { useState } from "react";

const ClickDemo = () => {
  let [count, setCount] = useState(0);
  return (
    <h3 onClick={() => setCount(count => count + 1)}>Click Me Hooks {count}</h3>
  );
};
/* 
class XClickDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <h3 onClick={this.handleClick}>Click Me Component {this.state.count}</h3>
    );
  }
}
*/

export default ClickDemo;
