/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FormBox,
  FormContent,
  FormLabel,
  Input,
  LeftSize,
  Submit,
  Text,
} from "./contactElements";

const Form = () => {

  const [name, setName] = useState("");
  const setNameHandler = (e) => setName(e.target.value);

  const [email, setEmail] = useState("");
  const setEmailHandler = (e) => setEmail(e.target.value);

  const [number, setNumber] = useState("");
  const setNumberHandler = (e) => setNumber(e.target.value);

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ggiaevr",
        form.current,
        "user_rynbkHgMtGUpzN0yaxlEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <FormContent>
        <LeftSize>
          <form ref={form} onSubmit={sendMail} noValidate>
            <FormBox> 
              <FormLabel>
                <Input
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={setNameHandler}
                />
              </FormLabel>
              <FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={setEmailHandler}
                />
              </FormLabel>
              <FormLabel>
                <Input 
                  type="phone" 
                  name="phone" 
                  placeholder="Phone number"
                  value={number}
                  onChange={setNumberHandler} 
                />
              </FormLabel>
              <FormLabel>
                <Text placeholder="Text" name="message" />
              </FormLabel>
              <FormLabel>
                <Submit type="submit" value="Send message" />
              </FormLabel>
            </FormBox>
          </form>
        </LeftSize>
      </FormContent>
    </>
  );
};

export default Form;
