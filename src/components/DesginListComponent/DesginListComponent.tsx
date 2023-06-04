import { Autocomplete, Button, Grid, GridProps, Slide, TextField, Typography } from "@mui/material";
import { AccessRole, defaultAnimationDuration, defaultSearchTreshhold } from "../constants";
import { SearchComponent } from "../SearchComponent";
import { useDesginListComponent } from "./useDesginListComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteScrollEndComponent } from "../InfiniteScrollEndComponent";
import { NavigationCard } from "../NavigationCard";
import { GuideCardFooterComponent } from "../GuideCardFooterComponent";
import { DefaultLoaderComponent } from "../DefaultLoaderComponent";
import { styles } from "./styles";
import { AddBox } from "@mui/icons-material";
import { RoleGate } from "../gates";

const DesginListComponent = (props?: GridProps) => {
  const {
    autocompleteOptions,
    entities,
    page,
    pageSize,
    totalEntities,
    handleAddNewClick,
    handleSearchQueryChange,
    handleAutocompleteChange,
    loadNext,
  } = useDesginListComponent();

  return (
    <Grid container sx={styles.outerContainer} {...props}>
      <Grid item xs={12} md={5}>
        <SearchComponent
          label="Search"
          threshold={defaultSearchTreshhold}
          handleQueryChange={handleSearchQueryChange}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <Autocomplete
          options={autocompleteOptions}
          onChange={handleAutocompleteChange}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Car" />}
        />
      </Grid>
      <RoleGate accessRoles={[AccessRole.admin, AccessRole.creator]}>
        <Grid item xs={12} textAlign="center">
          <Button startIcon={<AddBox />} variant="contained" onClick={handleAddNewClick}>
            Add New
          </Button>
        </Grid>
      </RoleGate>
      <Grid item xs={12}>
        <InfiniteScroll
          dataLength={entities.length}
          next={loadNext}
          hasMore={page * pageSize + pageSize < totalEntities} // + pageSize in case a page = 0
          loader={<DefaultLoaderComponent />}
          endMessage={<InfiniteScrollEndComponent text={"You've discovered all designs!"} />}
          style={styles.infiniteScroll}
        >
          <Grid container>
            {entities.map((design) => (
              <Slide
                key={design.id}
                in={true}
                timeout={defaultAnimationDuration}
                direction={"right"}
              >
                <Grid item xs={12} md={6} lg={4}>
                  <NavigationCard
                    navigationLink={`/guides/designs/${design.id}`}
                    target={"_self"}
                    cardTitle={design.title}
                    body={<Typography variant="textBody">{design.description}</Typography>}
                    thumbnail={design.thumbnailUrl}
                    footer={
                      <GuideCardFooterComponent
                        shareCode={design.forzaShareCode}
                        rating={design.rating}
                        author={design.authorUsername}
                        creationDate={design.creationDate}
                        carModel={design.carModel}
                      />
                    }
                  />
                </Grid>
              </Slide>
            ))}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};

export default DesginListComponent;
