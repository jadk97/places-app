import React, {useState} from "react";

import Card from "../../shared/components/UIElements/Card";
import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";


const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  }, false);

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  const switchModeHandler = () => {
    if(!isLoginMode){
      setFormData({
        ...formState.inputs,
        name: undefined
      },
        formState.inputs.email.isValid && formState.inputs.password.isValid)
    }
    else
    {
      setFormData({
        ...formState.inputs,
        name: {
            value: "",
            isValid: false
        }
      }, false);
    }
    setIsLoginMode(prev => !prev);
  }

  return (
    <Card className="authentication">
    <h2>Login Required</h2>
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && 
          <Input 
          element="input" 
          id="name" 
          type="text"
          label="Your Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a name."
          onInput={inputHandler}
          />}

          <Input 
          element="input" 
          id="email" 
          type="email" 
          label="E-Mail" 
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address." 
          onInput={inputHandler}
          />

          <Input 
          element="input" 
          id="password" 
          type="password" 
          label="Password" 
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password. It must be at least 5 characters long." 
          onInput={inputHandler}
          />

          <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN UP"}
          </Button>
      </form>

      <Button inverse onClick={switchModeHandler}>
      SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN"}
      </Button> 
    </Card>
  )
};

export default Auth;