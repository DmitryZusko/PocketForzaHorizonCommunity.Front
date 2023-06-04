import {
  baseTheme,
  CustomAccordionComponent,
  ImageBackgroundComponent,
  LatestGuidesComponent,
  longerAnimationDuration,
  NavBarComponent,
  NewsBlockComponent,
  PageFooterComponent,
  ScrollUpFabComponent,
  StatisticsComponent,
} from "@/components";
import { Box, Container, Fade, Typography } from "@mui/material";
import { styles } from "./styles";
import { styles as pageStyles } from "../styles";

import { useHomeContent } from "./useHomeContent";
import { globalStyles } from "@/styles";

const HomeContent = () => {
  const {
    newsAccordionInView,
    guidesAccordionInView,
    statisticsAccordionInView,
    footerInView,
    newsAccordionRef,
    guidesAccordionRef,
    statisticsAccordionRef,
    footerRef,
  } = useHomeContent();
  return (
    <Box minHeight={"100vh"} sx={globalStyles.centeredColumnFlexContainer}>
      <NavBarComponent />
      <ImageBackgroundComponent>
        <Container sx={pageStyles.imageTextBlock}>
          <Typography variant="imageHeader" align="center" sx={styles.textBlock}>
            Welcome to the Horizon Community!
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Here you can explore all available in-game{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              cars and discover variouse
            </Box>{" "}
            tunes and designs created{" "}
            <Box component="span" color={baseTheme.palette.secondary.light}>
              by our team
            </Box>
          </Typography>
          <Typography variant="imageBody" align="center" sx={styles.textBlock}>
            Enjoy Yourself!
          </Typography>
        </Container>
      </ImageBackgroundComponent>

      <Box sx={styles.accordionBox} ref={newsAccordionRef}>
        <Fade
          in={newsAccordionInView}
          timeout={longerAnimationDuration}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent title="News" isExpandedByDefault={true}>
            <NewsBlockComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <Box sx={styles.accordionBox} ref={guidesAccordionRef}>
        <Fade
          in={guidesAccordionInView}
          timeout={longerAnimationDuration}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent title="Our Latest Guides" isExpandedByDefault={true}>
            <LatestGuidesComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <Box sx={styles.accordionBox} ref={statisticsAccordionRef}>
        <Fade
          in={statisticsAccordionInView}
          timeout={longerAnimationDuration}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <CustomAccordionComponent
            title="In-Game Statistics"
            isExpandedByDefault={false}
            unmountOnExit={true}
          >
            <StatisticsComponent />
          </CustomAccordionComponent>
        </Fade>
      </Box>
      <ScrollUpFabComponent />
      <Box ref={footerRef} sx={pageStyles.footer}>
        <Fade
          in={footerInView}
          timeout={longerAnimationDuration}
          mountOnEnter
          easing={baseTheme.transitions.easing.sharp}
        >
          <PageFooterComponent />
        </Fade>
      </Box>
    </Box>
  );
};

export default HomeContent;
