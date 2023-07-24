
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/paymentDetails.css";
import { useAppContext } from "../../context/ChatProvider";
import { SideDrawer, MyChats, ChatBox } from "..";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    VStack,
    Text,
    SimpleGrid
} from "@chakra-ui/react";

function UserDetails() {
    const { user } = useAppContext();


    const [affilate, setAffilate] = useState();
    const [nameBeni, setNameBeni] = useState();
    const [last, setLast] = useState();
    const [username, setUserName] = useState();
    const [companyName, setComapanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [postCode, setPostCode] = useState();
    const [skype, setSkype] = useState('');
    const [age, setAge] = useState();


    const handleSubmit = async (event) => {

        event.preventDefault();

        const data = {
            userId: user?._id,
            affilate,
            nameBeni,
            last,
            username,
            companyName,
            phoneNumber,
            address2,
            address1,
            age,
            skype,
            postCode,
            state,
            city

        };

        console.log("User is :", user)

        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/userDetail/userDetails`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data)
            });

            if (response.ok) {

                toast.success('Form data submitted successfully!');
            } else {

                toast.error('Error submitting form data. Please try again.');
            }
        } catch (error) {

            toast.error('Error submitting form data. Please try again.');
        }

    };




    const boxstyle = {
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
        fontSize: "4xl",
        fontWeight: "extrabold",
        textAlign: "center",

    }
    const boxstyleForm = {
        m: "auto",
        border: "2px solid white",

        padding: "10px",
        borderRadius: "20px",
    }




    return (
        <>
            {user && <SideDrawer />}

            <Box sx={boxstyle}>
                <Text> User Details </Text>
            </Box>
            <Box maxWidth={"1200px"} sx={boxstyleForm} bg={"gray.100"} className="labour-form" >

                <form className="roleform" onSubmit={handleSubmit}>

                    <SimpleGrid p={10} minChildWidth={250} spacing={10} >
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="account">Affilate ID:</FormLabel>
                                <Input
                                    type="number"
                                    id="affilate"
                                    placeholder="Enter Affilate ID"
                                    min={0}
                                    value={affilate}
                                    onChange={(event) => setAffilate(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">First Name:</FormLabel>
                                <Input
                                    type="string"
                                    id="name"
                                    placeholder="Enter Name"
                                    min={0}
                                    value={nameBeni}
                                    onChange={(event) => setNameBeni(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">Last Name:</FormLabel>
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="Last Name"
                                    value={last}
                                    onChange={(event) => setLast(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="bankName">User Name:</FormLabel>
                                <Input
                                    type="text"
                                    id="username"
                                    placeholder="Enter User Name"
                                    value={username}
                                    onChange={(event) => setUserName(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">Company Name:</FormLabel>
                                <Input
                                    type="text"
                                    id="companyname"
                                    placeholder="Comapny Name"
                                    value={companyName}
                                    onChange={(event) => setComapanyName(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">Address1:</FormLabel>
                                <Input
                                    type="text"
                                    id="address1"
                                    placeholder="Address Line 1"
                                    value={address1}
                                    onChange={(event) => setAddress1(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">Address2:</FormLabel>
                                <Input
                                    type="text"
                                    id="address2"
                                    placeholder="Address Line 2"
                                    value={address2}
                                    onChange={(event) => setAddress2(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="city">City:</FormLabel>
                                <Input
                                    type="text"
                                    id="city"
                                    placeholder="City Name"
                                    value={city}
                                    onChange={(event) => setCity(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="state">State:</FormLabel>
                                <Input
                                    type="text"
                                    id="state"
                                    placeholder="State"
                                    value={state}
                                    onChange={(event) => setState(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="zipcode">Postcode:</FormLabel>
                                <Input
                                    type="text"
                                    id="postcode"
                                    placeholder="Enter Post Code"
                                    value={postCode}
                                    onChange={(event) => setPostCode(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="price">Skype ID:</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter Skype ID"
                                    id="skype"
                                    value={skype}
                                    onChange={(event) => setSkype(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box >
                            <FormControl>
                                <FormLabel htmlFor="phone">Phone Number :</FormLabel>
                                <Input
                                    type="number"
                                    id="phonenumber"
                                    placeholder="Enter Phone Number"
                                    value={phoneNumber}
                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="age">Age (only 18+):</FormLabel>
                                <Input
                                    type="number"
                                    id="age"
                                    placeholder="Your Age"
                                    value={age}
                                    onChange={(event) => setAge(event.target.value)}
                                />
                            </FormControl>
                        </Box>




                        <Button colorScheme="blue" onClick={handleSubmit} type="submit">
                            Submit
                        </Button>
                    </SimpleGrid>
                    {/* </VStack> */}
                </form>

            </Box >
            {/* </SimpleGrid> */}
            {/* <Footer /> */}
            <ToastContainer />
        </>
    );
}

export default UserDetails;




