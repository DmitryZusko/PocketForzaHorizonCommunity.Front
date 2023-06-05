import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { usePageFooterComponent } from "./usePageFooterComponent";

const PageFooterComponent = forwardRef<HTMLDivElement>(function PageFooterComponent(_, ref) {
  const { outerBoxStyles } = usePageFooterComponent();
  return (
    <Box ref={ref} sx={outerBoxStyles}>
      <Typography align="center" variant="body1">
        All images was takes from Froza Horizon 5 game.
      </Typography>
      <Typography align="center" variant="body1">
        This application is created just for own use.
      </Typography>
      <Typography align="center" variant="body1">
        Created by{" "}
        <a href={"https://www.linkedin.com/in/dmitry-zusko-809ba7279/"} target={"_blank"}>
          Dmitry Zusko
        </a>
      </Typography>
      <Box display={"flex"} width="100%" justifyContent="space-evenly">
        <CustomLinkComponent
          href={"https://github.com/DmitryZusko/PocketForzaHorizonCommunity"}
          target={"_blank"}
        >
          <Typography align="center" variant="body1">
            Git Hub - BackEnd
          </Typography>
        </CustomLinkComponent>
        <CustomLinkComponent
          href={"https://github.com/DmitryZusko/PocketForzaHorizonCommunity.Front"}
          target={"_blank"}
        >
          <Typography align="center" variant="body1">
            Git Hub - FrontEnd
          </Typography>
        </CustomLinkComponent>
      </Box>
    </Box>
  );
});

export default PageFooterComponent;
