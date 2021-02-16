import {useState} from 'react';
import styled from "styled-components";
import Login from './Pages/login'
import Signup from "./Pages/signup";
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";

const AppContainer = styled.div`
  min-height:100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const useStyles = makeStyles((theme)=> ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function App() {
  const [isOnLogin, toggleLogin] = useState(true)
  const classes = useStyles();
  return (
    <AppContainer>
      
      <Paper className={classes.pageContent}>
        {isOnLogin ? <Login /> : <Signup />}
      </Paper>
    </AppContainer>
  );
}

export default App;
