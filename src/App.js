import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import CheckboxesTags from "./SearchBar";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    username: "NoorHamid",
  },
});

class App extends React.Component {
  state = {
    playlist: [],
  };
  constructor() {
    super();
    this.getPlaylists();
  }
  getPlaylists = async () => {
    let data = await api.get("/playlists").then(({ data }) => {
      return data;
    });

    data.forEach(function (entry) {
      entry["title"] = entry["name"];
    });
    console.log(data);
    this.setState({ playlist: data });
  };

  render() {
    return (
      <div className="Spotify Tool">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to load.
          </p>

          <Button variant="contained" color="secondary">
            Click me
          </Button>
          <CheckboxesTags playlists={this.state.playlist}></CheckboxesTags>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
