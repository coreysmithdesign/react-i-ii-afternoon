import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";
import Controls from "./components/Controls";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      people: data,
      indexTotal: data.length,
    };

    this.incrementIndex = this.incrementIndex.bind(this);
    this.decrementIndex = this.decrementIndex.bind(this);
  }

  incrementIndex() {
    this.setState({
      index: this.state.index + 1,
    });
  }

  decrementIndex() {
    this.setState({
      index: this.state.index - 1,
    });
  }

  render() {
    // console.log(data[this.state.index]);
    return (
      <div className="App">
        <Header />
        <Card
          person={this.state.people[this.state.index]}
          indexTotal={this.state.indexTotal}
        />
        <Controls
          currentIndex={this.state.index}
          totalIndex={this.state.indexTotal}
          increment={this.incrementIndex}
          decrement={this.decrementIndex}
        />
      </div>
    );
  }
}
