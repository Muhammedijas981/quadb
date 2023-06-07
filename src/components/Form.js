import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form(props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        movieName: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({
            name: '',
            email: '',
            phone: '',
            movieName: ''
        });

        props.onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} id='Form' className={`Form $(props.visible)`}>
            <h2>Ticket Booking</h2>
            <div>
                <TextField
                    required
                    id="standard"
                    label="Name"
                    variant='outlined'
                    onChange={handleChange}
                    margin="dense"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    variant='outlined'
                    onChange={handleChange}
                    margin="dense"
                />
            </div>
            <div>
                <TextField
                    label="Phone"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handleChange}
                    variant='outlined'
                    required
                    margin="dense"
                />

            </div>
            <h3>Movie Details:</h3>
            <div>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Movie Name"
                    defaultValue={props.name}
                    margin="dense"
                />

            </div>
            <div>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Language"
                    defaultValue={props.language}
                    margin="dense"
                />

            </div>
            <Button className='submit-button' type="submit" variant="contained" color="success" sx={{margin: 3}}>
                Submit
            </Button>
        </form>
    );
}

export default Form;
