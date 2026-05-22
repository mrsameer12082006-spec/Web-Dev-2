import React, { Component } from "react";

class Child extends Component {

  componentWillUnmount() {
    console.log("Bye");
  }

  render() {
    return <h1>Hello</h1>;
  }
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div>

        <button
          onClick={() =>
            this.setState({ show: false })
          }
        >
          Remove
        </button>

        {
          this.state.show && <Child />
        }

      </div>
    );
  }
}

export default App;