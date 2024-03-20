import React, {useState, useEffect} from 'react'
import NavTabs from './NavTabs';
import {TextField, Box, Button} from '@mui/material'

export default function Testing() {

    const [searchInput, setSearchInput] = useState('');
    const [keyState, setKeyState] = useState(1)

    const handleInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyState(Math.random())
        console.log(searchInput)
    }

    // useEffect(() => {
    //     console.log(searchInput)
    // }, [searchInput])

    
    return(
        <div>
            <NavTabs/>
            <br></br>
            <div>
                <Box sx={{ml:'auto'}}>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{input:{color: '#fcbf49', width: 1000}, paddingRight:3}} placeholder="Enter your query ..." onInput={handleInput}/>
                    <Button type='submit' sx={{marginTop:1}} variant='contained'>Search</Button>
                </form>
                </Box>
            </div>

            <li key={keyState}>{searchInput}</li>

        </div>
    )
}
