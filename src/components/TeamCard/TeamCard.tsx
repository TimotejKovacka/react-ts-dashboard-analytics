import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { teams } from "../../consts/dashboardItems";
import GroupsIcon from "@mui/icons-material/Groups";

type TeamCardProps = {};

export default function TeamCard(props: TeamCardProps) {
  const theme = useTheme();
  const [team, setTeam] = useState(teams[0]);

  return (
    <Box
      borderRadius={8}
      sx={{ backgroundColor: "#fffffd" }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        m={2}
        borderRadius={8}
        sx={{ backgroundColor: theme.palette.gray.light }}
      >
        <Box>
          <Typography>Selected</Typography>
          <Typography>{team.label}</Typography>
        </Box>
        <IconButton aria-label="select team" sx={{ color: team.iconColor }}>
          <GroupsIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
