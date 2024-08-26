import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const LangButton = () => {
    const [lang, setLang] = React.useState('');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <div>
            <Select
                value={lang}
                onChange={handleChange}
                displayEmpty
                style={{color:'white',backgroundColor:'black'}}
            >
                <MenuItem value="" >
                    <em style={{color:'white'}}>English</em>
                </MenuItem>
                <MenuItem value={'hindi'} style={{color:'white'}}>Hindi</MenuItem>
            </Select>
        </div>
    )
}

export default LangButton
