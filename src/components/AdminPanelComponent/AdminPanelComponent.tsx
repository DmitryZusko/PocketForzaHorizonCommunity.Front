import { AddBox } from "@mui/icons-material";
import { Button, Container, Grid, GridProps, Typography } from "@mui/material";
import { AdminCarButtonsComponent } from "../AdminCarButtonsComponent";
import { AccessRole } from "../constants";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { SignUpFormComponent } from "../forms";
import {
  AddCarModalComponent,
  AddCarTypeModalComponent,
  AddManufactureModalComponent,
} from "../modals";
import { styles } from "./styles";
import { useAdminPanelComponent } from "./useAdminPanelComponent";

const AdminPanelComponent = (props?: GridProps) => {
  const { isAddCarOpen, isAddManufactureOpen, isAddCarTypeOpen } = useAdminPanelComponent();
  return (
    <Grid container {...props}>
      {isAddCarOpen && <AddCarModalComponent />}
      {isAddCarTypeOpen && <AddCarTypeModalComponent />}
      {isAddManufactureOpen && <AddManufactureModalComponent />}
      <Grid item xs={12} md={8} sx={styles.gridItem}>
        <Typography variant="textTitle">Cars</Typography>
        <AdminCarButtonsComponent />
      </Grid>
      <Grid item xs={12} md={4} sx={styles.gridItem}>
        <Typography variant="textTitle">Guides</Typography>
        <Container sx={styles.guidesContainer}>
          <CustomLinkComponent href="/guides/designs/add-new" target="_self">
            <Button startIcon={<AddBox />} variant="contained">
              Add Design
            </Button>
          </CustomLinkComponent>
          <CustomLinkComponent href="/guides/tunes/add-new" target="_self">
            <Button startIcon={<AddBox />} variant="contained">
              Add Tune
            </Button>
          </CustomLinkComponent>
        </Container>
      </Grid>
      <Grid item xs={12} md={6} sx={styles.gridItem}>
        <SignUpFormComponent signUpRole={AccessRole.admin} formHeader="New Admin" />
      </Grid>
      <Grid item xs={12} md={6} sx={styles.gridItem}>
        <SignUpFormComponent signUpRole={AccessRole.creator} formHeader="New Creator" />
      </Grid>
    </Grid>
  );
};

export default AdminPanelComponent;
