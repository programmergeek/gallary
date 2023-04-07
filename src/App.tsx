import { AppBar, Grid, Typography } from "@mui/material";
import "./App.css";
import { Layout } from "./Components";

function App() {
  return (
    <Layout>
      <Layout.Navbar>
        <AppBar position="static">
          <Grid container>
            <Grid item>
              <Typography variant="h6" sx={{ ml: 2, my: 2 }}>
                Navbar
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </Layout.Navbar>
      <Layout.Image>
        <img src="https://picsum.photos/800/1000" width="100%" alt="" />
      </Layout.Image>
      <Layout.Text>
        <Typography variant="h1" sx={{ ml: -1 }}>
          Image title
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rerum
          earum voluptatibus quod cum id vero, facilis consequatur perferendis
          fugit laudantium, modi ipsam ab facere rem accusantium? Totam,
          officiis optio!
        </Typography>
      </Layout.Text>
      <Layout.PreviewImages></Layout.PreviewImages>
    </Layout>
  );
}

export default App;
