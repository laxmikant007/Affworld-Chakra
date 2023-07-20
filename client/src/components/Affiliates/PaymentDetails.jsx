import React from 'react'
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

function PaymentDetails() {
    const { user } = useAppContext();
    const [account , setAccount] = useState();
    const [nameBeni, setNameBeni] = useState();
    const [bankName, setBankName] = useState();
    const [BankAddress, setBankAddress] = useState();
    const [beniAddress , setBeniAddress] = useState();
    const [sortCode , setSortCode] = useState();
    const [iBan , setIBan] = useState();
    const [swift , setSwift] = useState();
    const [role, setRole] = useState('');


  
    const handleSubmit = async (event) => {

        event.preventDefault();

        const data = {
            userId:user?._id,
            account,
            nameBeni,
            bankName,
            BankAddress,
            beniAddress,
            sortCode,
            iBan,
            swift,
            role
        };

        console.log("User is :" , user)
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/v1/payment/paymentDetails`, {
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
                <Text> Payment Details </Text>
            </Box>
            <Box  maxWidth={"1200px"} sx={boxstyleForm} bg={"gray.100"} className="labour-form" >

                <form className="roleform" onSubmit={handleSubmit}>
                   
                    <SimpleGrid p={10} minChildWidth={250} spacing={10} >
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="account">Account Number:</FormLabel>
                                <Input
                                    type="number"
                                    id="account"
                                    placeholder="Enter Account Number"
                                    min={0}
                                    value={account}
                                    onChange={(event) => setAccount(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="name">Beneficiary Name:</FormLabel>
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
                                <FormLabel htmlFor="address">Beneficiary Address:</FormLabel>
                                <Input
                                    type="text"
                                    id="address"
                                    placeholder="Enter Address"
                                    value={beniAddress}
                                    onChange={(event) => setBeniAddress(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="bankName">Bank Name:</FormLabel>
                                <Input
                                    type="text"
                                    id="bankName"
                                    placeholder="Enter Bank Name"
                                    value={bankName}
                                    onChange={(event) => setBankName(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="BankAddress">Bank Address:</FormLabel>
                                <Input
                                    type="text"
                                    id="BankAddress"
                                    placeholder="Enter Bank Address"
                                    value={BankAddress}
                                    onChange={(event) => setBankAddress(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="code">Sort Code:</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter Sort Code"
                                    id="sort-code"
                                    value={sortCode}
                                    onChange={(event) => setSortCode(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box >
                            <FormControl>
                                <FormLabel htmlFor="pin">IBAN:</FormLabel>
                                <Input
                                    type="number"
                                    id="iban"
                                    placeholder="Enter IBAN"
                                    value={iBan}
                                    onChange={(event) => setIBan(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="number">SWIFT</FormLabel>
                                <Input
                                    type="text"
                                    id="swift"
                                    placeholder="SWIFT"
                                    value={swift}
                                    onChange={(event) => setSwift(event.target.value)}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="role">Type of Affiliate:</FormLabel>
                                <Select
                                    id="role"
                                    cursor="pointer"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="">--Please select--</option>
                                    <option value="Construction">Construction Labour</option>
                                    <option value="Tiles">Tiles | Marble | Work Helper</option>
                                    <option value="Loading">Loading | Unloading</option>
                                    <option value="Cleaning">Cleaning Workers</option>
                                    <option value="Shifting">Home Shifting</option>
                                    <option value="Warehouse">Godam | Warehouse</option>
                                    <option value="Factory">Factory Labour</option>
                                    <option value="Gardening">Gardening Work</option>
                                    <option value="Other">Other Labour Works</option>
                                </Select>
                            </FormControl>
                        </Box>
                        {/* <FormControl>
                                <FormLabel htmlFor="phone">Phone Number:</FormLabel>
                                <Input
                                    type="number"
                                    placeholder="Enter Phone Number"
                                    id="phone"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </FormControl> */}


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

export default PaymentDetails;




