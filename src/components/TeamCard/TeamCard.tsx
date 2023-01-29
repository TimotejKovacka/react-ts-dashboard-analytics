import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { teams } from "../../consts/dashboardItems";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

type TeamCardProps = {};

export default function TeamCard(props: TeamCardProps) {
  const theme = useTheme();
  const [team, setTeam] = useState(teams[0]);

  return (
    <Box
      borderRadius={4}
      sx={{ backgroundColor: "#fffffd" }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        m={2}
        p={1.5}
        borderRadius={4}
        sx={{ backgroundColor: theme.palette.gray.light }}
        display="flex"
      >
        <Box mr={3} flex="1 0 auto">
          <Typography
            sx={{ color: theme.palette.grey[700] }}
            fontSize="0.85rem"
          >
            {"Selected".toUpperCase()}
          </Typography>
          <Typography fontWeight={"bold"}>{team.label}</Typography>
        </Box>
        <IconButton
          aria-label="select team"
          sx={{
            backgroundColor: team.iconColor,
            color: "#fff",
            width: "48px",
            ":hover": { backgroundColor: "inherit", color: team.iconColor },
          }}
        >
          <GroupsIcon />
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent="center" position={"relative"}>
        <div className="pro">
          <div />
        </div>
        <RadialBarChart
          data={[{ name: "Heheh", value: 75 }]}
          startAngle={90}
          endAngle={-270}
          width={150}
          height={150}
          innerRadius={70}
          outerRadius={80}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey={"value"}
            fill={theme.palette.secondary.main}
          />
          <text
            x={150 / 2}
            y={150 / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fontSize={"1.7rem"}
            fontWeight={900}
            fontFamily={"Roboto"}
          >
            75%
          </text>
        </RadialBarChart>
      </Box>
    </Box>
  );
}
