import React, { Component } from "react";
import axios from "axios";
export default class MainComponebt extends Component {
  state = {
    userdata: [],
    term: " ",
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const userdata = response.data;
      this.setState({ userdata });
    });
  }

  handleSearch = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  render() {
    const { term, userdata } = this.state;
    const filteredPerson = userdata.filter((data) => {
      return data.title.toLowerCase().includes(term.toLowerCase());
    });
    return (
      <div style={{ marginTop: "50px" }}>
        <input
          type="search"
          name="search"
          value={term}
          onChange={this.handleSearch}
        />

        <h2> list items</h2>

        {filteredPerson.map((usedata) => (
          <li>{usedata.title}</li>
        ))}
      </div>
    );
  }
}
