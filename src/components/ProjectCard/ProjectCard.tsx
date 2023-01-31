import {
  Box,
  Button,
  ButtonProps,
  Grid,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { teams, projects as teamProjects } from "../../consts/dashboardItems";
import TuneIcon from "@mui/icons-material/Tune";
import Column from "./Column";

type ProjectCardProps = {};

const RoundedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: "#744be4",
  borderRadius: 28,
  paddingTop: 8,
  paddingBottom: 8,
  boxShadow: "none",
}));

export default function ProjectCard(props: ProjectCardProps) {
  const theme = useTheme();
  const [team, setTeam] = useState(teams[0]);
  const columnOrder = ["waiting", "in_progress", "completed"];

  return (
    <Box
      borderRadius={8}
      sx={{ backgroundColor: "#fffffd" }}
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box display='flex' justifyContent='space-between' p={2} flex='0 1 auto'>
        <Typography variant='h5' fontWeight='bold'>
          Projects
        </Typography>
        <Box>
          <IconButton>
            <TuneIcon />
          </IconButton>
          <RoundedButton variant='contained' sx={{ ml: 1 }}>
            Create Project
          </RoundedButton>
        </Box>
      </Box>
      <Grid
        container
        height={"auto"}
        flex='1 1 auto'
        px={2}
        pb={2}
        spacing={2.5}
      >
        {columnOrder.map((columnId) => {
          const column = team.projects[columnId];
          const projects = column.projectIds.map(
            (projectId) => teamProjects[projectId]
          );

          return (
            <Grid item md={4} key={column.id}>
              <Column column={column} projects={projects} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
