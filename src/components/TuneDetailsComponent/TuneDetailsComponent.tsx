import { globalStyles } from "@/styles";
import { Grid, Slide } from "@mui/material";
import { baseTheme, defaultAnimationDuration, extendedAnimationDuration } from "../constants";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { GuideDetailsHeader } from "../GuideDetailsHeader";
import { TuneDetailsBodyComponent } from "./components";
import { ITuneDetailsComponentProps } from "./types";
import { useTuneDetailsComponent } from "./useTuneDetailsComponent";

const TuneDetailsComponent = ({ id, ...props }: ITuneDetailsComponentProps) => {
  const { isLoading, selectedEntity } = useTuneDetailsComponent({ id });
  return (
    <Grid
      container
      sx={(globalStyles.centeredColumnFlexContainer, { padding: baseTheme.spacing(7) })}
      {...props}
    >
      {isLoading ? (
        <DefaultLoaderComponent />
      ) : (
        <>
          <Slide in={true} direction={"right"} timeout={defaultAnimationDuration}>
            <Grid item xs={12}>
              <GuideDetailsHeader
                thumbnail="/tuneThumbnail.png"
                isDesign={false}
                title={selectedEntity?.title || ""}
                authorName={selectedEntity?.authorUsername || ""}
                shareCode={selectedEntity?.forzaShareCode || ""}
                rating={selectedEntity?.rating || 0}
                creationDate={selectedEntity?.creationDate || new Date()}
              />
            </Grid>
          </Slide>
          <Slide in={true} direction={"right"} timeout={extendedAnimationDuration}>
            <Grid item xs={12}>
              <TuneDetailsBodyComponent selectedEntity={selectedEntity} />
            </Grid>
          </Slide>
        </>
      )}
    </Grid>
  );
};

export default TuneDetailsComponent;
