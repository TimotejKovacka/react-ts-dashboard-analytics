import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { v4 as uuidv4 } from "uuid";
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
  Blue = "#3c75e1",
  Yellow = "#e08935",
  Purple = "#785bc9",
  Pink = "#dc72de",
}

export enum ProjectLabelBgColors {
  Blue = "rgba(156, 191, 249, 0.3)",
  Yellow = "rgba(241, 186, 133, 0.3)",
  Purple = "rgba(189, 175, 231, 0.3)",
  Pink = "rgba(252, 174, 253, 0.3)",
}

export interface Project {
  id: string;
  label: string;
  labelColor: ProjectLabelColors;
  labelBgColor: ProjectLabelBgColors;
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
    [key: string]: {
      id: string;
      label: string;
      projectIds: string[] | [];
    };
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

export const projects: { [key: string]: Project } = {
  "6c1e6464-80ca-4aa9-923b-83a51a99aa55": {
    id: "6c1e6464-80ca-4aa9-923b-83a51a99aa55",
    label: "Web Design",
    labelColor: ProjectLabelColors.Blue,
    labelBgColor: ProjectLabelBgColors.Blue,
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
  "a254232c-e58c-4ef8-8507-a50739c14123": {
    id: "a254232c-e58c-4ef8-8507-a50739c14123",
    label: "Mobile App",
    labelColor: ProjectLabelColors.Yellow,
    labelBgColor: ProjectLabelBgColors.Yellow,
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
  "633d2d53-9764-414e-a9b3-26e98303e95e": {
    id: "633d2d53-9764-414e-a9b3-26e98303e95e",
    label: "Dashboard",
    labelColor: ProjectLabelColors.Purple,
    labelBgColor: ProjectLabelBgColors.Purple,
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
  "8933e680-934f-4def-8e7c-941a49014065": {
    id: "8933e680-934f-4def-8e7c-941a49014065",
    label: "App Development",
    labelColor: ProjectLabelColors.Pink,
    labelBgColor: ProjectLabelBgColors.Pink,
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
  "e0656717-9451-4d1b-99be-36e9125532d0": {
    id: "e0656717-9451-4d1b-99be-36e9125532d0",
    label: "Dashboard",
    labelColor: ProjectLabelColors.Purple,
    labelBgColor: ProjectLabelBgColors.Purple,
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
  "7557cdbc-ab15-4ead-9165-e48face96396": {
    id: "7557cdbc-ab15-4ead-9165-e48face96396",
    label: "Landing Page",
    labelColor: ProjectLabelColors.Blue,
    labelBgColor: ProjectLabelBgColors.Blue,
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
  "9c13222b-da6d-4dd9-ac0e-d2efd470711c": {
    id: "9c13222b-da6d-4dd9-ac0e-d2efd470711c",
    label: "Mobile App",
    labelColor: ProjectLabelColors.Yellow,
    labelBgColor: ProjectLabelBgColors.Yellow,
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
  "70794059-4b4a-48cd-bfe4-52cacba26311": {
    id: "70794059-4b4a-48cd-bfe4-52cacba26311",
    label: "Web Development",
    labelColor: ProjectLabelColors.Blue,
    labelBgColor: ProjectLabelBgColors.Blue,
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
  "a00566ae-3942-4554-af35-180934a7fb8a": {
    id: "a00566ae-3942-4554-af35-180934a7fb8a",
    label: "App Development",
    labelColor: ProjectLabelColors.Pink,
    labelBgColor: ProjectLabelBgColors.Pink,
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
};

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

export const teams: Team[] = [
  {
    label: "Design Team",
    iconColor: ProjectLabelColors.Yellow,
    meetings: [],
    projects: {
      completed: {
        id: uuidv4(),
        label: "completed",
        projectIds: [
          "a00566ae-3942-4554-af35-180934a7fb8a",
          "70794059-4b4a-48cd-bfe4-52cacba26311",
          "9c13222b-da6d-4dd9-ac0e-d2efd470711c",
        ],
      },
      in_progress: {
        id: uuidv4(),
        label: "in progress",
        projectIds: [
          "7557cdbc-ab15-4ead-9165-e48face96396",
          "e0656717-9451-4d1b-99be-36e9125532d0",
          "8933e680-934f-4def-8e7c-941a49014065",
        ],
      },
      waiting: {
        id: uuidv4(),
        label: "waiting",
        projectIds: [
          "633d2d53-9764-414e-a9b3-26e98303e95e",
          "a254232c-e58c-4ef8-8507-a50739c14123",
          "6c1e6464-80ca-4aa9-923b-83a51a99aa55",
        ],
      },
    },
  },
];
