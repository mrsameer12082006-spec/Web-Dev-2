import React from "react";

class Counter extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  // Controls whether component should update
  shouldComponentUpdate(nextProps, nextState) {

    console.log("shouldComponentUpdate Called");

    // Stop updating after count becomes greater than 5
    if (nextState.count > 5) {
      return false;
    }

    return true;
  }

  // Runs after update
  componentDidUpdate() {
    console.log("Component Updated");
  }

  // Increase Function
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {

    console.log("Render Called");

    return (
      <div>
        <h1>Counter App</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;


// after counter value reaches 5 only shouldComponentUpdate will run and nothing else.