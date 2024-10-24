import TextField from '@mui/material/TextField';
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {

  const[principle,setPrinciple]=useState('')
  const[rate,setRate]=useState('')
  const[year,setYear]=useState('')
  const[interest,setInterest]=useState(0)

  // for validation for inputs: to check its correct format
  const[isInputvalid,setIsInputValid]=useState(false)

  const[isPrincipleInputvalid,setIsPrincipleInputvalid]=useState(false)
  const[isYearInputvalid,setIsYearInputvalid]=useState(false)
  const[isRateInputvalid,setIsRateInputvalid]=useState(false)



  const handleValidation=(tag)=>{
    
    const{name,value}=tag
    // console.log(name,value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))

// Regex, short for "regular expression," is a sequence of characters that define a search pattern. It's used for pattern matching within strings. 

// ^: Asserts the position at the start of the string.
// \d*: Matches zero or more digits (0-9).
// .: Matches exactly one period (.). In the context of numbers, this would be the decimal point.
// \d+: Matches one or more digits (0-9).
// $: Asserts the position at the end of the string.

    if(!!value.match(/^\d*.?\d+$/)){
// !! converts the result to a boolean.

      if(name=='principle'){
        setPrinciple(value)
        setIsPrincipleInputvalid(false)
      }
      else if(name=='year'){
        setYear(value)
        setIsYearInputvalid(false)
      }
      else{
        setRate(value)
        setIsRateInputvalid(false)
      }

    }
    else{
      //invalid
      if(name=='principle'){
        setPrinciple(value)
        setIsPrincipleInputvalid(true)
      }
      else if(name=='year'){
        setYear(value)
        setIsYearInputvalid(true)
      }
      else{
        setRate(value)
        setIsRateInputvalid(true)
      }

    }

  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    
    setInterest((principle*year*rate)/100)
//     e.preventDefault() is a method you call within an event handler in JavaScript to prevent the default behavior of the event from occurring.

// For instance, in a form submission, the default action is to send the form data to the server and refresh the page. Using e.preventDefault() will stop this action, allowing you to handle the form data with JavaScript without refreshing the page.

// Think of it like saying, “Hey browser, hold up on doing what you normally do—I’ve got something special planned here!” Makes sense?
    
  }


  const handleReset=()=>{
    setPrinciple('')
    setRate('')
    setYear('')
    setIsPrincipleInputvalid(false)
    setIsRateInputvalid(false)
    setIsYearInputvalid(false)
    setInterest(0)
  }

  return (
    <>
      <div style={{minHeight:'100vh',width:'100%'}} className="d-flex justify-content-center align-items-center align-items-center --bs-secondary-bg-rgb">

        <div className="box bg-info p-5 rounded">
          <h2 className='fw-bolder' style={{textDecoration:'underline'}}>Simple-Interest-Calculator</h2>
          <p className='text-center'>Calculate your simple interest with us</p>

          <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
        
            <h1 className='text-danger'>&#8377; {interest} </h1>

          </div>

          <div className="mt-5">
          <form className='border rounded p-3 d-flex flex-column p-3'>

{/* value needs to be holded : by using usestate() */}

{/* add value property to the the textfeild for state */}
            <TextField id="principle" name='principle' label="Principle Amount" value={principle} variant="outlined" onChange={e=>handleValidation(e.target)}/>

              {isPrincipleInputvalid&&<div className="mb-3 text-danger fw-bolder">*Invalid input</div>}

            <TextField id="filled-basic" name='year' label="Year" variant="filled" value={year} 
            onChange={e=>handleValidation(e.target)}/>

              {isYearInputvalid&&<div className="mb-3 text-danger fw-bolder">*Invalid input</div>}

            <TextField id="standard-basic" name='rate' label="Rate of Interest" variant="standard" value={rate}
            onChange={e=>handleValidation(e.target)} />

              {isRateInputvalid&&<div className="mb-3 text-danger fw-bolder">*Invalid input</div>}
            
          </form>

        </div>

        <div className="mt-3 d-flex justify-content-between">

        <Button variant="contained" type='submit' onClick={handleCalculate}>Calculate</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>

        </div>

        
        </div>

        
      </div>




      
    </>
  )
}

export default App
