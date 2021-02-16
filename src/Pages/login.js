import Input from '../components/Input.js';
import {useForm, Form} from '../components/useForm';
import Button from '@material-ui/core/Button';

const initialFieldValues = {
    name: '',
    password: ''
    
}

function Login() {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues);

    return (
        <Form>
            <Input 
                label="Name"
                value={values.name}
                onChange={handleInputChange}
            />
            <Input
                label="Password"
                value={values.password}
                onChange={handleInputChange}
            />
            <Button variant="outlined" color="primary" style={{textTransform: 'inherit', marginLeft: '25px'}}>
            Log in
            </Button>
        </Form>
    )
}

export default Login
