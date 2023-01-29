import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { teams } from "../../consts/dashboardItems";

type ProjectCardProps = {};

export default function ProjectCard(props: ProjectCardProps) {
  const theme = useTheme();
  const [team, setTeam] = useState(teams[0]);

  return (
    <Box
      borderRadius={8}
      sx={{ backgroundColor: "#fffffd" }}
      height="100%"
    ></Box>
  );
}
