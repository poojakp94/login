import {TextField} from '@material-ui/core';

export default function Input (props) {
    const { name, label, value, onChange } = props;

    return (
        <TextField
        variant="outlined" 
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        />
            

    )
}
