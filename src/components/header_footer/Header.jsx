import React from 'react';
import {useState} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  color:{
    backgroundColor: '#3c3c3c',
  },
  whiteColor:{
    color:'#fff',
  }
};

function DenseAppBar(props) {
  const [anchorEl, setAnchorEl] =useState('');
  const [quiz, setQuiz] = useState('React');
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (newQuiz) => {
    setAnchorEl('');
    setQuiz(newQuiz)
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}> 
        <Toolbar variant="dense">
          <Typography variant="h4" style={{position:'absolute', left:'44%'}} className={classes.whiteColor}>
            Quizzzzy
          </Typography>
        </Toolbar>

    {/* <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{outline:'none',backgroundColor:'whitesmoke',color:'black',position:'absolute',right:'1%', top:'3%'}}>
         {quiz} <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> handleClose('HTML')}>HTML</MenuItem>
        <MenuItem onClick={()=> handleClose('CSS ')}>CSS</MenuItem>
        <MenuItem onClick={()=> handleClose('Javascript')}>Javascript</MenuItem>
        <MenuItem onClick={()=> handleClose('ReactJs')}>ReactJs</MenuItem>
      </Menu>
    </div> */}

      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);