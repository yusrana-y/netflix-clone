import React from 'react'
import { TextField, Stack, Button } from '@mui/material'
import { useState } from 'react'

function Getstarted() {

    const [email,setEmail] = useState("") //for checking email complete or not
    const [isEmailInvalid,setIsEmailInvalid] = useState(false) //for displaying email required tag

    const handleSubmit =(e) => {
        e.preventDefault()
        if(isEmailInvalid){
            alert('submitted')
        }
        else{
            alert('incoorect email')
        }
    }

    const emailValidate = ({value}) => {
        console.log(value);
        setEmail(value)
        if(!value.match(/^[a-z][a-z0-9_\.\-]*@[a-z0-9\.\-]+\.[a-z]{2,4}$/i))
        {
            console.log('incorrect');
            setIsEmailInvalid(true)            
        }
        
    }
    return (
        <form>
            <p className='text-light text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
            {/* <div>
                <div className='border border-1'>
                    <TextField id="standard-basic" label="Email" variant="standard" />
                </div>

            </div> */}
            <Stack direction="row" spacing={2}>

                <TextField style={{ width: '75%'  }} id="outlined-basic" name="emailAddress" label="Email address" variant="outlined" className='text-light mt-2 rounded '
                sx={{
                    ".MuiInputLabel-root":{
                        color:'white'
                    },
                    ".MuiOutlinedInput-root":{
                        input:{
                            color:'white'
                        },
                        fieldset:{
                            border:'2px solid red'
                        },
                        "&.Mui-focused fieldset":{
                             border:'2px solid red'
                        }
                    }
                }} 
                onChange={(e)=>emailValidate(e.target)}/>
                <Button style={{ width: '50%', fontSize: '20px', color: 'white', backgroundColor: 'red' }} variant="outlined" className='fw-bolder' type='submit' onClick={handleSubmit} >Get Started   &gt; </Button>
            </Stack>
           { email=="" && <div className='text-danger'>x Required Email</div>}
        </form>
    )
}

export default Getstarted