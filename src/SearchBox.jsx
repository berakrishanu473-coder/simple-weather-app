import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import { getWeatherInfo } from './helper'

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            setCity("")
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} action="">
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                 />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists</p>}
            </form>
        </div>
    )
}