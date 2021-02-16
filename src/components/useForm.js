import {useState} from 'react';
import { makeStyles} from '@material-ui/core';


export function useForm(initialFieldValues) {

    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({})
    
    const handleInputChange = (e)=> {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
   
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '400px',
            display: 'flex',
            margin: theme.spacing(3)
        }
    }
}))

export function Form(props) {
    const classes = useStyles();
    const {children, ...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
          {props.children}  
        </form>
    )
}