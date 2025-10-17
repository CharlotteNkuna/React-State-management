import { useState } from 'react'
import './App.css'
import Quiz from './Components/Quiz'
import CheckInForm from './Components/CheckInForm'
import Accordion from './Components/Accordion'
import Form from './Components/Form'

function App() {

  return (
    <>
      <Quiz></Quiz>
      <br></br>
      <CheckInForm></CheckInForm>
      <br></br>
      <Accordion></Accordion>
    </>
  )
}

export default App
