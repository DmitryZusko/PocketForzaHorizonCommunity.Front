import { AccessRole, ButtonWithMenuComponent, CustomLinkComponent, RoleGate } from "@/components";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { useNavBarBodyComponent } from "./useNavBarBodyComponent";
import {
  Home,
  DirectionsCar,
  Leaderboard,
  SettingsSuggest,
  Palette,
  AdminPanelSettings,
} from "@mui/icons-material";

const NavBarBodyComponent = () => {
  const { buttonsStyle, handleGuidesButtonclick } = useNavBarBodyComponent();
  return (
    <>
      <CustomLinkComponent href="/" target="_self">
        <Button startIcon={<Home />} variant="contained" sx={buttonsStyle}>
          Home
        </Button>
      </CustomLinkComponent>
      <RoleGate accessRoles={[AccessRole.admin]}>
        <CustomLinkComponent href="/admin/admin-panel" target="_self">
          <Button startIcon={<AdminPanelSettings />} variant="contained" sx={buttonsStyle}>
            Admin Panel
          </Button>
        </CustomLinkComponent>
      </RoleGate>
      <CustomLinkComponent href="/cars" target="_self">
        <Button startIcon={<DirectionsCar />} variant="contained" sx={buttonsStyle}>
          Cars
        </Button>
      </CustomLinkComponent>
      <CustomLinkComponent href="/user/personal-statistics" target="_self">
        <Button startIcon={<Leaderboard />} variant="contained" sx={buttonsStyle}>
          Personal Statistics
        </Button>
      </CustomLinkComponent>
      <ButtonWithMenuComponent mainButtonText="Guides" handleClick={handleGuidesButtonclick}>
        <CustomLinkComponent href="/guides/designs" target={"_self"}>
          <Button startIcon={<Palette />} variant="contained" sx={styles.nestedButton}>
            Designs
          </Button>
        </CustomLinkComponent>
        <CustomLinkComponent href="/guides/tunes" target={"_self"}>
          <Button startIcon={<SettingsSuggest />} variant="contained" sx={styles.nestedButton}>
            Tunes
          </Button>
        </CustomLinkComponent>
      </ButtonWithMenuComponent>
    </>
  );
};

export default NavBarBodyComponent;
