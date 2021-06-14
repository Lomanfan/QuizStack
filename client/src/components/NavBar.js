import React,{ useContext } from "react";
import Main from "./Main";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./MenuBarList";
import { useStyles } from './Component_Style/NavBar';

import LoginForm from "./LoginForm";
import { UserContext } from "./UserContext";
// import useUserObj from "./hooks/useUserObj";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import User from "./User";
import Quiz from "./Quiz";
import UserAccount from "./UserAccount";
import Results from "./results";
import Playlist from "./Playlist";
import PlaylistQuiz from "./PlaylistQuiz";
//NOTE: Main --> NavBar  --> App.js
//Note: QuizTable + Score --> Quiz --> NavBar --> App.js
//Note: QuizTable + Score + Playlist --> UserAccount --> NavBar --> App.js

export default function NavBar() {
  const [ user, setUser ] = useContext(UserContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (

    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
              <Switch>
                <Route
                  path="/quiz/:id"
                  render={() => (
                    <div>
                      <Quiz />
                      {/* <Quiz />  //Frontend Quiz Fetch// OUTDATED// */}
                      {/* <h1>{message}</h1> */}
                      {/* <button>Fetch Data</button> <User /> */}
                    </div>
                  )}
                />
                <Route path="/results" render={() => <Results />} />
                <Route path="/playlists/quiz/:playlist_name" render={() => <PlaylistQuiz />} />
                <Route path="/playlists" render={() => <Playlist />} />
                <Route path="/user/:id" render={() => <UserAccount />} />
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route path="/" exact render={() => <Main />} />
              </Switch>
          </Grid>

          <Box pt={4}>{/* QuizApp@2021 */}</Box>
        </Container>
      </main>
    </div>
  );
}
