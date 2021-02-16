import Input from '../components/Input.js';
import Select from '../components/Select'
import {useForm, Form} from '../components/useForm';
import Button from '@material-ui/core/Button';
import * as profession from '../profession/profession';

const initialFieldValues = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    professionId: ''
}



function Signup() {
    
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues);

    
    return (
        <Form>
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
            <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
            />
            <Input
                name="phone"
                label="PhoneNo."
                value={values.phone}
                onChange={handleInputChange}
            />
            <Select
                name='professionId'
                label="Profession"
                value={values.professionId}
                onChange={handleInputChange}
                options={profession.professionData()}
            />
            <Button variant="outlined" color="primary" style={{textTransform: 'inherit', marginLeft: '25px'}}>
                Sign up
            </Button>
        </Form>
    )
}

export default Signup;
