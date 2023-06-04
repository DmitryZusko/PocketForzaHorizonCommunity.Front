import { Logout, NightsStay, WbSunny } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { baseTheme, defaultLogoSize, smallLogoSize } from "../constants";
import { CustomLinkComponent } from "../CustomLinkComponent";
import {
  ForgotPasswordModalComponent,
  SignInModalComponent,
  SignUpModalComponent,
} from "../modals";
import { AnonymouseNavbarBodyComponent, AuthorizedNavbarBodyComponent } from "./components";
import { useNavBarComponent } from "./useNavBarComponent";

const NavBarComponent = ({ ...props }) => {
  const {
    isSignInOpen,
    isSignUpOpen,
    isForgotPasswordOpen,
    isLogged,
    navBarTheme,
    themeMode,
    handleThemeModeChange,
    handleLogOut,
  } = useNavBarComponent();
  return (
    <AppBar position="sticky" sx={navBarTheme} {...props}>
      <Toolbar>
        {isSignInOpen && <SignInModalComponent />}
        {isSignUpOpen && <SignUpModalComponent />}
        {isForgotPasswordOpen && <ForgotPasswordModalComponent />}

        <CustomLinkComponent
          href="/"
          target="_self"
          {...{
            width: { xs: smallLogoSize.width, md: defaultLogoSize.width },
            height: { xs: smallLogoSize.height, md: defaultLogoSize.height },
            position: "relative",
          }}
        >
          <Image alt="logo" src="/logo.png" fill loading="lazy" style={{ objectFit: "cover" }} />
        </CustomLinkComponent>
        <Box flexGrow={"1"} />
        {isLogged ? <AuthorizedNavbarBodyComponent /> : <AnonymouseNavbarBodyComponent />}
        <Box marginLeft={baseTheme.spacing(5)}>
          <IconButton onClick={handleThemeModeChange} color={"secondary"}>
            {themeMode === "light" ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </Box>
        {isLogged && (
          <Box marginX={baseTheme.spacing(5)}>
            <IconButton onClick={handleLogOut} color={"secondary"}>
              <Logout />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
