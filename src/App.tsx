import { Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="nav"></div>
      <div id="image">
        <div className="position-relative">
          <img id="main-image" src="https://picsum.photos/1080/1080" alt="" />
        </div>
      </div>
      <div id="image-list"></div>
      <div id="text">
        <p id="title"></p>
        <p id="description"></p>
        <div id="social-links"></div>
      </div>
    </div>
  );
}

export default App;
