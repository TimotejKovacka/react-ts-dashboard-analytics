import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CommentIcon from "@mui/icons-material/Comment";
import { Project } from "../../consts/dashboardItems";
import LinearWithValueLabel from "./LinearProgressWithLabel";

type ColumnProps = {
  column: {
    id: string;
    label: string;
    projectIds: string[] | [];
  };
  projects: Project[];
};

export default function Column(props: ColumnProps) {
  const theme = useTheme();

  return (
    <Box width={"100%"} height={"100%"} display='flex' flexDirection='column'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={1}
      >
        <Typography>
          {props.column.label.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          )}
        </Typography>
        <IconButton sx={{ background: theme.palette.gray.light, p: 0.5 }}>
          <AddIcon />
        </IconButton>
      </Box>
      {props.projects.map((project, index) => (
        <Box
          key={project.id}
          sx={{
            background: "#fff",
            boxShadow: 1,
            p: 1,
            flex: "1 1 auto",
            borderRadius: 8,
            mb: 1,
            "&:last-child": { mb: 0 },
          }}
        >
          <Box display='flex' justifyContent='space-between'>
            <Chip
              label={project.label}
              sx={{
                background: project.labelBgColor,
                color: project.labelColor,
                fontWeight: "bold",
              }}
            />
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Typography
            variant='subtitle2'
            fontWeight='normal'
            color={theme.palette.grey[600]}
          >
            {project.description.join(", ")}
          </Typography>
          <LinearWithValueLabel
            progress={10}
            barColor='#724fd6'
            barBgColor='#f0eefc'
          />
          <Box display='flex'>
            <Box flex='1 1 auto'></Box>
            <Stack direction='row' flex='0 1 auto'>
              <IconButton aria-label='attachments'>
                <AttachFileIcon sx={{ fontSize: "1.2rem" }} />
                {project.attachments.length > 0 && (
                  <Typography>{project.attachments.length}</Typography>
                )}
              </IconButton>
              <IconButton aria-label='comments'>
                <CommentIcon sx={{ fontSize: "1.2rem" }} />
                {project.comments.length > 0 && (
                  <Typography>{project.comments.length}</Typography>
                )}
              </IconButton>
            </Stack>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
