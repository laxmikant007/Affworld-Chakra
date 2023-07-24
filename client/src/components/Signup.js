import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";
import api from "../utils/axios";
import { addUserToLocalStorage } from "../utils/localStorage";
import FileBase from "react-file-base64";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const URL = "https://affilator-affiliate-api.onrender.com"
  const navigate = useNavigate();


  const [values, setValues] = useState({
    name: "",
    fullName: "",
    email: "",
    password: "",
    bio: "",
  });

  const submitHandler = async () => {
    const { email, password, name, bio } = values;

    if (!name || !email || !password) {
      toast.error("Please Provide All The Fields");

      return;
    }

    // console.log(data);
    try {
      const url = `${URL}/api/affiliates`;
      console.log(url);
      const data = { name, email, password, bio, };
      console.log(data);

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success(`Hi There! ${response.data.name} `);
      addUserToLocalStorage(response);
      // navigate("/");
      console.log(response);
      return response.data;




    } catch (error) {
      console.log("error while submitteing -->", error)
      toast.error(error);
    }
  };

  return (
    <VStack spacing="5px" fontFamily="Poppins">
      <FormControl id="first-name" isRequired>
        <FormLabel fontFamily="Poppins">Name</FormLabel>
        <Input
          fontFamily="Poppins"
          placeholder="Name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </FormControl>

      <FormControl id="bio" isRequired>
        <FormLabel fontFamily="Poppins">Bio</FormLabel>
        <Input
          type="text"
          fontFamily="Poppins"
          placeholder="Your Bio"
          onChange={(e) => setValues({ ...values, bio: e.target.value })}
        />
      </FormControl>





      <FormControl id="email" isRequired>
        <FormLabel>email</FormLabel>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* <FormControl id="pic">
        <FormLabel>Upload Pic</FormLabel>
        <FileBase
          type="file"
          label="Image"
          multiple={false}
          name="myFile"
          p={1.5}
          onDone={({ base64 }) => setValues({ ...values, bio: base64 })}
        />
      </FormControl> */}
      <Button
        background="rgba(67, 43, 255, 0.8)"
        color="white"
        width="100%"
        _hover={{
          background: " rgba(67, 43, 255, 0.8)",
          color: "white",
          transform: "translate(0,-5px)",
        }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
