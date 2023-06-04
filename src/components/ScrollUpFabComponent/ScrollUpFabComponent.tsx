import { Fab, FabProps, Fade } from "@mui/material";
import { useScrollUpFabComponent } from "./useScrollUpFabComponent";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styles } from "./styles";

const ScrollUpFabComponent = (props?: FabProps) => {
  const { isvisible, handleScrollUp } = useScrollUpFabComponent();
  return (
    <>
      {isvisible && (
        <Fade in={isvisible}>
          <Fab onClick={handleScrollUp} color="primary" sx={styles.fab} {...props}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Fade>
      )}
    </>
  );
};

export default ScrollUpFabComponent;
