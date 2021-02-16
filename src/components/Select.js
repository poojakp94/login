
import {FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core';

export default function Select(props) {
    const {name, label, value, onChange, options} = props;

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                label={label}
                value={value}
                onChange={onChange}
            >
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            
        </FormControl>
    )
}
