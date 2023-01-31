import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & {
    value: number;
    barColor: string;
    barBgColor: string;
  }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant='determinate'
          {...props}
          sx={{
            backgroundColor: props.barBgColor,
            borderRadius: 2,
            "& .MuiLinearProgress-bar": {
              backgroundColor: props.barColor,
              borderRadius: 2,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

type LinearWithValueLabelProps = {
  progress: number;
  barColor: string;
  barBgColor: string;
};

export default function LinearWithValueLabel(props: LinearWithValueLabelProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel
        value={props.progress}
        barColor={props.barColor}
        barBgColor={props.barBgColor}
      />
    </Box>
  );
}
