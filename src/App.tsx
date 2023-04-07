import "./App.css";
import { Layout } from "./Components";

function App() {
  return (
    <Layout>
      <Layout.Navbar
        sx={{ background: "black", height: 100, width: "100%" }}
      ></Layout.Navbar>
      <Layout.Image
        sx={{ background: "blue", height: 100, width: "100%" }}
      ></Layout.Image>
      <Layout.Text
        sx={{ background: "green", height: 100, width: "100%" }}
      ></Layout.Text>
      <Layout.PreviewImages
        sx={{ background: "red", height: 100, width: "100%" }}
      ></Layout.PreviewImages>
    </Layout>
  );
}

export default App;
