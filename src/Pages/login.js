import Input from '../components/Input.js';
import {useForm, Form} from '../components/useForm';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';

const initialFieldValues = {
    name: '',
    password: ''
    
}
const useStyles = makeStyles((theme)=> ({
    pageContent: {
      width: '500px',
        margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
  }))
  

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues);

    const handleSubmit = (e)=> {
        e.preventDefault();
        const name = localStorage.getItem("name");
        const password = localStorage.getItem("password")
        if(values.name === name && values.password === password){
            history.push('/movies');
        }else {
            window.alert('invalid credentials')
        }
        
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper className={classes.pageContent}>
        <Form onSubmit={handleSubmit}>
            <Input 
                name="name"
                label="Name"
                value={values.name}
                onChange={handleInputChange}
            />
            <Input
                name="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
            />
            <Button type='submit' variant="outlined" color="primary" style={{textTransform: 'inherit', marginLeft: '25px'}}>
            Log in
            </Button>
        </Form>
        </Paper>
        </div>
    )
}

export default Login
