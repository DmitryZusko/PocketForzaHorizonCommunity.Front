import {
  CardSkeletonComponent,
  CustomTooltipComponent,
  defaultAnimationDuration,
  defaultImageSize,
  GuideCardFooterComponent,
  NavigationCard,
  TuneCardBodyComponent,
} from "@/components";
import { Box, BoxProps, Grow, Slide, Typography } from "@mui/material";
import { styles } from "./styles";
import { useTunesBlockComponent } from "./useTunesBlockComponent";

const TunesBlockComponent = (props: BoxProps) => {
  const { isLoading, latestEntities } = useTunesBlockComponent();

  return (
    <Box sx={styles.outerBox} {...props}>
      <Typography variant="textTitle" align="center" color="primary" sx={styles.headerText}>
        Newest Tunes
      </Typography>
      <Box sx={styles.cardBox}>
        {isLoading ? (
          <Grow in={isLoading} unmountOnExit>
            <Box>
              <CardSkeletonComponent />
            </Box>
          </Grow>
        ) : (
          latestEntities.map((tune) => (
            <Slide
              key={tune.id}
              in={!isLoading}
              direction="right"
              mountOnEnter
              timeout={defaultAnimationDuration}
            >
              <Box>
                <CustomTooltipComponent
                  key={tune.id}
                  title={"Go to Tune"}
                  {...{ sx: styles.tooltip }}
                >
                  <Box>
                    <NavigationCard
                      thumbnail="tuneThumbnail.png"
                      imageHeight={defaultImageSize.height}
                      target={"_self"}
                      cardTitle={tune.title}
                      navigationLink={`/guides/tunes/${tune.id}`}
                      body={
                        <TuneCardBodyComponent
                          engineType={tune.engineType}
                          aspirationType={tune.aspirationType}
                          tiresCompound={tune.tiresCompound}
                        />
                      }
                      footer={
                        <GuideCardFooterComponent
                          isDesign={false}
                          shareCode={tune.forzaShareCode}
                          rating={tune.rating}
                          author={tune.authorUsername}
                          creationDate={tune.creationDate}
                          carModel={tune.carModel}
                        />
                      }
                    />
                  </Box>
                </CustomTooltipComponent>
              </Box>
            </Slide>
          ))
        )}
      </Box>
    </Box>
  );
};

export default TunesBlockComponent;
