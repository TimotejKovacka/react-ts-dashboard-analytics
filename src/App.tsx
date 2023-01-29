import { useState } from "react";
import MiniDrawer from "./components/MiniDrawer/MiniDrawer";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import "./assets/App.css";
import TeamCard from "./components/TeamCard/TeamCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  return (
    <MiniDrawer>
      <Grid
        container
        spacing={2}
        direction="row-reverse"
        sx={{ m: 0, width: "100%", height: "100%" }}
      >
        <Grid item xs={12} md={3} paddingLeft={1} paddingRight={2} paddingY={2}>
          <TeamCard />
        </Grid>
        <Grid item xs={12} md={9} paddingLeft={3} paddingRight={1} paddingY={2}>
          <ProjectCard />
        </Grid>
      </Grid>
    </MiniDrawer>
  );
}

export default App;
