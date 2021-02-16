import {useState} from 'react';
import { makeStyles} from '@material-ui/core';


export function useForm(initialFieldValues) {

    const [values, setValues] = useState(initialFieldValues);

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
        handleInputChange
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
    return (
        <form className={classes.root} autoComplete="off">
          {props.children}  
        </form>
    )
}