
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
import { EmailIcon } from '@chakra-ui/icons';
import { ViewIcon } from "@chakra-ui/icons";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
        // margiinTop: "10px",
        border: "2px solid white",
        padding: "10px",
        borderRadius: "10px",
    }

    const boxstyleForm1 = {

        m: "auto",
      
        display: "flex",
        alignitems: "left",
        justifycontent: "left",
        padding: "10px",
        borderRadius: "10px",
    }
    const boxstyleForm2 = {
        m: "auto",
        border: "2px solid black",


        padding: "10px",
        borderRadius: "10px",
    }

    const innerbox = {
        border: "0.5px solid gray",
        borderRadius: "10px",
        padding: "10px",
        width: "130px",
        marginLeft: "10px"
    }

    const textinBox = {
        marginLeft: "10px",
        fontWeight: "bold",
        marginTop: "10px",
        cursor: "pointer",


    }




    return (
        <>
            {user && <SideDrawer />}

            <Box sx={boxstyle}>
                <Text> User Details </Text>
            </Box>
            <SimpleGrid p={5} minChildWidth={300} spacing={5}>

                <Box display={"flex"} flexDirection={"column"} maxWidth={"1200px"} height={250} sx={boxstyleForm1} bg={"gray.100"}>

                    <Box width={"100%"} height={180} bg={"gray.100"} >

                        <Box display={"flex"} flexDirection={"row"} width={"95%"} h={150} m={5} marginTop={3} >
                            
                            <Box bg={'blue.100'} borderRadius={"10px"} h={150} w={40} >
                                <Text display={"flex"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

                                    Profile Photo

                                </Text>


                            </Box>

                            <Box marginLeft={10} h={150} w={"100%"} >
                                <Box h={"50%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>

                                    <Box display={"flex"} flexDirection={"column"}>


                                        <Box h={"50%"} >
                                            <Text fontWeight={700}>Umashankar (#8298)</Text>
                                            {/* <Text fontWeight={700}>Umashankar (#8298)</Text> */}


                                        </Box>
                                        <Box display={"flex"} flexDirection={"row"} h={"50%"} >
                                            <Text fontWeight={400}>
                                                <AccountCircleIcon style={{ cursor: "pointer" }} fontSize='small' />&nbsp;
                                                Active</Text>
                                            <Text marginLeft={10} fontWeight={400}>
                                                <AddLocationIcon style={{ cursor: "pointer" }} fontSize='small' />
                                                India</Text>
                                            <Text marginLeft={10} fontWeight={400}>
                                                <EmailIcon style={{ cursor: "pointer" }} />&nbsp;
                                                umashanker12@gmail.com</Text>

                                            {/* <Text fontWeight={700}>Umashankar (#8298)</Text> */}


                                        </Box>
                                    </Box>
                                    <Box display={'flex'} flexDirection={"row"} marginTop={"10px"} width={"40%"} h={"60%"} >

                                        <Button colorScheme="purple" > MEMBER  31-07-23</Button>
                                        <Button marginLeft={10} colorScheme="purple" > RESET PASSWORD</Button>

                                    </Box>

                                </Box>

                                <Box display={"flex"} flexDirection={"row"} h={"50%"} >
                                {/* <SimpleGrid   minChildWidth="100px" spacing={2}   > */}
  
                                    <Box sx={innerbox}>
                                        <Box>

                                            1
                                        </Box>
                                        <Box>
                                            <Text color={'green.600'} fontWeight={"bold"}>Earnings(INR)</Text>
                                        </Box>

                                    </Box>
                                    <Box sx={innerbox}>
                                        <Box>

                                            1
                                        </Box>
                                        <Box>
                                            <Text color={'blue.500'} fontWeight={"bold"}>Offers</Text>
                                        </Box>
                                    </Box>
                                    <Box sx={innerbox}>
                                        <Box>

                                            1345
                                        </Box>
                                        <Box>
                                            <Text color={'orange.500'} fontWeight={"bold"}>Clicks</Text>

                                        </Box>
                                    </Box>
                                    <Box sx={innerbox}>
                                        <Box>

                                            1
                                        </Box>
                                        <Box>
                                            <Text color={'purple.500'} fontWeight={"bold"}>Offers</Text>

                                        </Box>
                                    </Box>
                                    {/* </SimpleGrid> */}

                                </Box>


                            </Box>




                        </Box>


                    </Box>

                    <Box display={"flex"} >
                        <Text sx={textinBox} >Overview</Text>
                        <Text sx={textinBox}>Managers </Text>

                        <Text sx={textinBox}>Campaigns </Text>
                        <Text sx={textinBox}>PostBacks</Text>
                        <Text sx={textinBox}>Payouts</Text>

                        <Text sx={textinBox}>Comapany</Text>
                        <Text sx={textinBox}>Billing</Text>



                    </Box>



                </Box>

            </SimpleGrid>
            <Box maxWidth={"1200px"} sx={boxstyleForm} bg={"gray.100"}  >

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




