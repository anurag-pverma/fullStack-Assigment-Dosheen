import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";

function Register() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword:"",
  });

  const handleSumit = (e) => {
    e.preventDefault()
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    }); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <Box
      p={5}
      marginLeft={"400px"}
      marginTop={"80px"}
      boxSize={"400px"}
      shadow="md"
      borderWidth="1px"
    >
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" id="name" onChange={handleChange} />
        <FormLabel>Email Address</FormLabel>
        <Input type="email" id="email" onChange={handleChange} />
        <FormLabel>Password</FormLabel>
        <Input type="password" id="password" onChange={handleChange} />
        <FormLabel>Repate Your Password</FormLabel>
        <Input type="password" id="repeatpassword" onChange={handleChange} />
        <Button
          mt="15px"
          width="full"
          type="submit"
          colorScheme="blue"
          onClick={handleSumit}
        >
          SignUp
        </Button>
      </FormControl>
      <Divider marginTop={"3"} />
    </Box>
  );
}

export default Register;