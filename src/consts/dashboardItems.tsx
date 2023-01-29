import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { Dayjs } from "dayjs";

export interface User {
  name: {
    first: string;
    last: string;
  };
  img: any;
}

export interface Task {
  label: string;
  checked: boolean;
  description: string;
  assignees: User[] | [];
}

export enum ProjectLabelColors {
  Blue = "#72a3f6",
  Yellow = "#eb9c50",
  Purple = "#a18cdc",
  Pink = "#fa8bfc",
}

export interface Project {
  label: string;
  labelColor: ProjectLabelColors;
  description: string[];
  tasks: Task[] | [];
  attachments: any[];
  comments:
    | [
        {
          body: string;
          author: User;
        }
      ]
    | [];
}

export interface Meeting {
  from: Dayjs;
  to: Dayjs;
}

export interface Team {
  label: string;
  iconColor: ProjectLabelColors;
  projects: {
    waiting: Project[] | [];
    inProgress: Project[] | [];
    completed: Project[] | [];
  };
  meetings: Meeting[] | [];
}

export const users: User[] = [
  {
    name: { first: "Tim", last: "Buctu" },
    img: <AccountCircleIcon />,
  },
  {
    name: { first: "Mark", last: "Dark" },
    img: <AccountCircleIcon />,
  },
  {
    name: { first: "David", last: "Light" },
    img: <AccountCircleIcon />,
  },
  {
    name: { first: "Sarah", last: "Semi" },
    img: <AccountCircleIcon />,
  },
  {
    name: { first: "Alex", last: "Lorem" },
    img: <AccountCircleIcon />,
  },
  {
    name: { first: "Ivan", last: "Ipsu" },
    img: <AccountCircleIcon />,
  },
];

export const projects: Project[] = [
  {
    label: "Web Design",
    labelColor: ProjectLabelColors.Blue,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Mobile App",
    labelColor: ProjectLabelColors.Yellow,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Dashboard",
    labelColor: ProjectLabelColors.Purple,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "App Development",
    labelColor: ProjectLabelColors.Pink,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Dashboard",
    labelColor: ProjectLabelColors.Purple,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Landing Page",
    labelColor: ProjectLabelColors.Blue,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Mobile App",
    labelColor: ProjectLabelColors.Yellow,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "Web Development",
    labelColor: ProjectLabelColors.Blue,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
  {
    label: "App Development",
    labelColor: ProjectLabelColors.Pink,
    description: ["Wireframing", "mockups", "clients collaboration"],
    tasks: [
      {
        label: "Task 1",
        checked: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        assignees: [users[0], users[1]],
      },
    ],
    comments: [],
    attachments: [],
  },
];

export const sidebarItems: {
  label: string;
  icon: any;
}[] = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Profile", icon: <AccountCircleIcon /> },
  { label: "Contact", icon: <EmailIcon /> },
  { label: "Meetings", icon: <QueryBuilderIcon /> },
  { label: "Tasks", icon: <AssignmentIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
  { label: "Login", icon: <LoginIcon /> },
  { label: "Logout", icon: <LogoutIcon /> },
];
