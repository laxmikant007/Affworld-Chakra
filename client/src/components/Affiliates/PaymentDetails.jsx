import React, { useEffect } from 'react'
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
import { getPaymentInfo } from '../../service/api';
import { getUserFromLocalStorage } from '../../utils/localStorage';

import PaymentModal from "./modal/PaymentModal"
import axios from 'axios';


function PaymentDetails() {
    // const { user } = useAppContext();
    const user   = getUserFromLocalStorage();

    const [account, setAccount] = useState();
    const [nameBeni, setNameBeni] = useState();
    const [bankName, setBankName] = useState();
    const [BankAddress, setBankAddress] = useState();
    const [beniAddress, setBeniAddress] = useState();
    const [sortCode, setSortCode] = useState();
    const [iBan, setIBan] = useState();
    const [swift, setSwift] = useState();
    const [accountType, setAccountType] = useState('');


    const [paymentInfo, setPaymentInfo] = useState(false);
    const [payment, setPayment] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);


    useEffect(() => {
        getSetPaymentInfo();
        // getSetProfile();
    }, [])

    const resetForm = () => {
        setAccount('');
        setNameBeni('');
        setBankName('');
        setBankAddress('');
        setBeniAddress('');
        setSortCode('');
        setAccountType('');
        setIBan('');
        setSwift('');


        // Reset other form fields to their initial values...
      };



    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log("this is user in payment info--->",user)
        const accessToken = user.data.access_token;
        console.log("access token is from Paymentdetails   -->:", accessToken)


        const data = {

            account_number: account,
            beneficiary_name: nameBeni,
            bank_name: bankName,
            bank_address: BankAddress,
            beneficiary_address: beniAddress,
            sort_code: sortCode,
            iban: iBan,
            swift: swift,
            account_type: accountType
        };

        console.log("User is :", user);
        console.log("Data we get form front end--->", data)

        const url   = `${process.env.REACT_APP_PROD_API}/api/affiliates/payment_info`;
        console.log("this is surl -->",url);
        try {


            const response = await axios.post(url,data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`


                },
               
            });
            console.log("this is respos form payment detials -->", response);
            if(response.status === 200){
                toast.success("Payment Details saved Success!");
                resetForm();
                await getPaymentInfo();
                
            }
            return response.data;

            

           
        } catch (error) {
            console.log("error in submitting dataa is --->", error);
            toast.error( error.response.data.detail);
        }

    };


    const getSetPaymentInfo = async () => {

        
        try {
            const res = await getPaymentInfo();
            console.log("this is response payment details -->",res);

        if (res[0]) {
            setPaymentInfo(true);
        }
        setPayment(res);
        setPaymentInfo(res);
            
        } catch (error) {
            console.log("Error while getting payment details-->", error);
            
        }

        
        
    }

    const handlesavedpayment = async () => {

        setShowAllProjects(true);
        // getSetPaymentInfo();

    }




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
            <Box maxWidth={"1200px"} sx={boxstyleForm} bg={"gray.100"} className="labour-form" >

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
                                <FormLabel htmlFor="role">Type of Account:</FormLabel>
                                <Select
                                    id="role"
                                    cursor="pointer"
                                    value={accountType}
                                    onChange={(e) => setAccountType(e.target.value)}
                                >
                                    <option value="">--Please select--</option>
                                    <option value="Current">Current Account</option>
                                    <option value="Saving">Saving Account</option>
                                    <option value="Salary">Salary Account</option>
                                    <option value="NRI">NRI Account</option>
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
                <Button colorScheme="blue" onClick={() => { handlesavedpayment() }} type="submit">
                    Saved Deatils
                </Button>

            </Box >
            {/* </SimpleGrid> */}
            {/* <Footer /> */}
            <PaymentModal showModal={showAllProjects} hideModal={() => { setShowAllProjects(false) }} projects={payment} projectInfo={paymentInfo} />
            <ToastContainer />
        </>
    );
}

export default PaymentDetails;




