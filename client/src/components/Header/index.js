import React from 'react';

import { Link } from 'react-router-dom';
import GoogleAuth from '../Utils/AuthGoogle';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';

import './header.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    flexGrow: 1
  },
  topMenu: {
    background:
      'linear-gradient(125deg, #00FF57 0%, #010033 40%, #460043 70%, #F0FFC5 100%), linear-gradient(55deg, #0014C9 0%, #410060 100%), linear-gradient(300deg, #FFC700 0%, #001AFF 100%), radial-gradient(135% 215% at 115% 40%, #393939 0%, #393939 40%, #849561 calc(40% + 1px), #849561 60%, #EED690 calc(60% + 1px), #EED690 80%, #ECEFD8 calc(80% + 1px), #ECEFD8 100%), linear-gradient(125deg, #282D4F 0%, #282D4F 40%, #23103A calc(40% + 1px), #23103A 70%, #A0204C calc(70% + 1px), #A0204C 88%, #FF6C00 calc(88% + 1px), #FF6C00 100%)',
    backgroundBlendMode: 'overlay, screen, overlay, overlay, normal'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ boxShadow: '1px 0px 33px 3px rgba(190,231,237,1)' }}
    >
      <AppBar position="static" className={classes.topMenu}>
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LiveTvIcon style={{ paddingBottom: '4px', fontSize: '3rem' }} />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Glitch Streaming
          </Typography>
          <div className="button_group">
            <Link to="/streams/new">
              <div className="create_button">
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  style={{ color: 'white' }}
                >
                  <AddBoxTwoToneIcon />
                </IconButton>
                <span>Create</span>
              </div>
            </Link>
            <GoogleAuth />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
