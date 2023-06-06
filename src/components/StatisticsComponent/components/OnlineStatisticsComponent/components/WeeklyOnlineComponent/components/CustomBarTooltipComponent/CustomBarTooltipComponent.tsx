import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const CustomBarTooltipComponent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={styles.outerBox}>
        <Typography variant="smallText" color={"black"}>
          {payload[0].payload.date}:{" "}
          <Typography component="span" variant="smallBoldText" color={"black"}>
            {payload[0].payload.onlineCount}
          </Typography>{" "}
          players
        </Typography>
      </Box>
    );
  }

  return null;
};

export default CustomBarTooltipComponent;
