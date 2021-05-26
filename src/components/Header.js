import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';
import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles( () => ({
    typographyStyles: {
        flex: 1,
        fontSize: "24px",
        
        
    },
    appBar: {
        padding: "5px 15px"
    }
}));

const Header = () => {
    const classes = useStyle();
    
    return (
    <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <Typography className={classes.typographyStyles}>Blogs</Typography>
      <SubjectIcon />
    </Toolbar>
  </AppBar>
  )
};

export default Header;
