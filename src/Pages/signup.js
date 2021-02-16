import Input from '../components/Input.js';
import Select from '../components/Select'
import {useForm, Form} from '../components/useForm';
import Button from '@material-ui/core/Button';
import * as profession from '../profession/profession';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

const initialFieldValues = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    professionId: ''
}
const useStyles = makeStyles((theme)=> ({
    pageContent: {
      width: '500px',
        margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
  }))



function Signup() {
    const classes = useStyles();
    const history = useHistory();
    const validate =()=> {
        let temp = {}
        temp.name = values.name? "": "This field is required"
        temp.password = values.password.length > 4 ? "" : "At least 4 characters"
        temp.email = (/$^|.+@.+..+/).test(values.email) ? "": "email is not valid"
        // temp.mobile = values.mobile.length >9 ? "": "should be 10 in no."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(item => item == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        // resetForm
    } = useForm(initialFieldValues);

    const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log(values.name)
        if(validate()) {
            localStorage.setItem("name", values.name);
            localStorage.setItem("password", values.password)
            localStorage.setItem("email", values.email)
            localStorage.setItem("phoneNo.", values.mobile)
            localStorage.setItem("profession", values.professionId)
            history.push('/movies')
        }
        
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper className={classes.pageContent}>
        <Typography variant="h6" align="center">Sign up</Typography>
        <Form onSubmit={handleSubmit}>
            <Input 
                name="name"
                label="Name"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
            />
            <Input
                name="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
                type="password"
            />
            <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
            />
            <Input
                name="phone"
                label="PhoneNo."
                value={values.phone}
                onChange={handleInputChange}
                type="number"
            />
            <Select
                name='professionId'
                label="Profession"
                value={values.professionId}
                onChange={handleInputChange}
                options={profession.professionData()}
            />
            <Button  type="submit" variant="outlined" color="primary" style={{textTransform: 'inherit', marginLeft: '25px'}}>
                Sign up
            </Button>
        </Form>
        </Paper>
        </div>
    )
}

export default Signup;
