import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
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

  const teamProjectStats = [];

  for (const [key, value] of Object.entries(team.projects)) {
    const label = key.replace("_", " ").toUpperCase();
    teamProjectStats.push({ label: label, projects: value });
  }

  return (
    <Box
      borderRadius={4}
      sx={{ backgroundColor: "#fffffd" }}
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box
        p={1.5}
        borderRadius={4}
        sx={{ backgroundColor: theme.palette.gray.light }}
        display='flex'
        alignItems='center'
      >
        <Box
          mr={3}
          flex='1 0 auto'
          sx={{
            [theme.breakpoints.between("md", "lg")]: {
              mr: 1,
            },
          }}
        >
          <Typography
            sx={{
              color: theme.palette.grey[700],
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "0.7rem",
              },
            }}
            fontSize='0.85rem'
          >
            {"Selected".toUpperCase()}
          </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{
              [theme.breakpoints.between("md", "lg")]: {
                fontSize: "0.85rem",
              },
            }}
          >
            {team.label}
          </Typography>
        </Box>
        <IconButton
          aria-label='select team'
          sx={{
            backgroundColor: team.iconColor,
            color: "#fff",
            width: "48px",
            [theme.breakpoints.between("md", "lg")]: {
              width: "40px",
            },
            ":hover": { backgroundColor: "inherit", color: team.iconColor },
          }}
        >
          <GroupsIcon />
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent='center' position={"relative"}>
        <div className='pro'>
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
            type='number'
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
            textAnchor='middle'
            dominantBaseline='middle'
            className='progress-label'
            fontSize={"1.7rem"}
            fontWeight={900}
            fontFamily={"Roboto"}
          >
            75%
          </text>
        </RadialBarChart>
      </Box>
      <Box m={2}>
        <Typography variant='h6'>Projects</Typography>
        <Grid
          container
          spacing={1}
          sx={{
            m: 0,
            // "& .MuiGrid-item": { px: 1, py: 1.5 },
          }}
        >
          <Grid
            item
            md={6}
            sx={{ backgroundColor: "#ecf3ff", borderRadius: 4 }}
          >
            <Box px={1} py={1.5}>
              <Typography
                sx={{
                  color: theme.palette.grey[700],
                  [theme.breakpoints.between("md", "lg")]: {
                    fontSize: "0.7rem",
                  },
                }}
                fontSize='0.85rem'
              >
                {"total".toUpperCase()}
              </Typography>
              <Typography
                fontWeight={"bold"}
                sx={{
                  [theme.breakpoints.between("md", "lg")]: {
                    fontSize: "0.85rem",
                  },
                }}
              >
                {team.projects.completed.length +
                  team.projects.in_progress.length +
                  team.projects.waiting.length}
              </Typography>
            </Box>
          </Grid>
          {teamProjectStats.map((stat, index) => (
            <Grid item md={6} key={index}>
              <Box
                px={1}
                py={1.5}
                sx={{
                  backgroundColor: "#ecf3ff",
                  borderRadius: 4,
                  [theme.breakpoints.between("md", "lg")]: {
                    width: 71,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.grey[700],
                    [theme.breakpoints.between("md", "lg")]: {
                      fontSize: "0.7rem",
                    },
                  }}
                  fontSize='0.85rem'
                >
                  {stat.label}
                </Typography>
                <Typography
                  fontWeight={"bold"}
                  sx={{
                    [theme.breakpoints.between("md", "lg")]: {
                      fontSize: "0.85rem",
                    },
                  }}
                >
                  {stat.projects.length}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
