import { 
  React, 
  useState, 
  useEffect, 
  Fragment } from "react";
import {
  Link,
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";
import PinterestWidget from './PinterestWidget.js'
import LogIn from './Login.js'
import SignUpForm from './SignUp.js'

function App() {

  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
      const {name, value} = event.target
      setLogInData(prevLogInData => ({
          ...prevLogInData,
          [name]: value
      }))
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      fetch('/api/log-in', {
          method: 'POST',
          body: JSON.stringify(logInData),
          headers: {
          'Content-Type': 'application/json',
          },
      })
          .then((response) => response.json())
          .then((responseJson) => {
          });
  }   

  const [formData, setFormData] = useState({
    fname: "",
    lname: '',
    email: "",
    password: "",
    passwordConfirm: "",
})

  const handleSignUpChange = (event) => {
      console.log(formData)
      const {name, value} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
      }))
  }
  const handleSignUpSubmit = (event) => {
      event.preventDefault()
      fetch('/api/sign-up', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
          'Content-Type': 'application/json',
          },
      })
          .then((response) => response.json())
          .then((responseJson) => {
          });
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<PinterestWidget/>}/>
          <Route exact path = "/login" element = {<LogIn handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          logInData = {logInData}/>}/>
          <Route exact path = "/signup" element = {<SignUpForm handleSignUpChange = {handleSignUpChange}
          handleSignUpSubmit = {handleSignUpSubmit}
          formData = {formData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
