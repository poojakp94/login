import {useState} from 'react';
import styled from "styled-components";
import Login from './Pages/login'
import Signup from "./Pages/signup";

import Movies from './Pages/Movies';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";


const AppContainer = styled.div`
  min-height:100vh;
  width: 100%;
  background-color: #fff;
`

function App() {
  
  
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <AppContainer>
      <Router>
      <AppBar position="static">
        <Toolbar>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Company Info
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{padding: '20px'}}>
          <Typography>Company: Geeksynergy Technologies Pvt Ltd</Typography>
          <Typography>Address: Sanjayanagar, Bengaluru-56</Typography>
          <Typography>Phone:XXXXXXXXX09</Typography>
          <Typography>Email: XXXXXX@gmail.com</Typography>
          </div>
          
        </Popover>
        <NavLink to="/signup" exact={true} style={{textDecoration: 'none', color: 'white'}}>
        <Button color="inherit">Sign UP</Button>
        </NavLink>
        <NavLink to="/login" exact={true} style={{textDecoration: 'none', color: 'white'}}>
        <Button color="inherit">Log in</Button>
        </NavLink>
        </Toolbar>
    </AppBar>
    <Switch>
      <Route path='/' exact component={() => <Redirect to="/signup" />}/>
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/movies' exact component={Movies}/>
    
    </Switch>
      {/* <div style={{display: 'flex', justifyContent: 'center'}}>
        <Movies data={moviesData}/>
      </div> */}
      {/* <Paper className={classes.pageContent}>
        {isOnLogin ? <Login /> : <Signup />}
      </Paper> */}
      </Router>
    </AppContainer>
  );
}

export default App;
