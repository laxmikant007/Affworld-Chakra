
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
    const [last , setLast] = useState();
    const [experience, setExperience] = useState(0);
    const [bankName, setBankName] = useState();
    const [userAddress, setUserAddress] = useState();



    const [price, setPrice] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();
    const [profilePic, setProfilePic] = useState('');
    // const [aadharPic, setAadharPic] = useState('');
    const [profilePicName, setProfilePicName] = useState('')
    // const [aadharPicName, setAadharPicName] = useState('')
    const [storeData, setStoreData] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [showImg, setShowImg] = useState(false);
    const [profilePicLink, setprofilePicLink] = useState('/profile.png');
    // const [aadharPicLink, setAadharPicLink] = useState('/profile.png');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {

        event.preventDefault();
        // console.log('aadhar:', aadhar);
        // console.log('experience:', experience);
        // console.log('Price:', price);
        // console.log('address:', address);
        // console.log('pin:', pin);
        // console.log('age:', age);
        // console.log('phone:', phone);
        // console.log("profile pic link ", profilePicLink);
        // console.log("aadhar pic link ", aadharPicLink);


        //   if(!address || !phone || !age || !pin || !price || !experience || !aadharPic || !profilePic ||  !aadhar){
        //     console.log("mouse clicked");
        //     toast("Form is not filled properly",{
        //         autoClose:2000
        // })
        //   }

        //   else{
        setWorkerData();

        //     toast.success("Form Submitted Successfully!!", {
        //         autoClose: 1500, 
        //     });

        //     const timer = setTimeout(() => {        navigate("/adminLabour");
        // }, 1500);

        // return () => clearTimeout(timer);



        // const d= new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset","rental-rack");
        // d.append("cloud_name","ddwsaojx6");

        // const d1= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:d
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setProfilePic(data.url)
        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ",data.url);
        // }).catch((err)=>{
        //     console.log(err)
        // })

        // const dA= new FormData();
        // dA.append("file", aadharPic);
        // dA.append("upload_preset","rental-rack");
        // dA.append("cloud_name","ddwsaojx6");

        // const d2= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:dA
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setAadharPic(data.url)
        //         setAadharPicLink(data.url);
        //         console.log("aadhar url is ", data.url);


        //     }

        // }).catch((err)=>{
        //     console.log(err)
        // })
        // }
    };
    const setWorkerData = async () => {
        const data = localStorage.getItem("user")
        const user = JSON.parse(data)
        localStorage.setItem("role", "worker");

        const myForm = new FormData();

        myForm.set("age", age);
        myForm.set("email", user.email);
        myForm.set("fullName", user.fullname);
        // myForm.set("aadhar", aadhar);
        myForm.set("phone", phone);
        myForm.set("address", address);
        myForm.set("role", role);
        myForm.set("pin", pin);
        myForm.set("profilePic", profilePicLink);
        // myForm.set("aadharPic", aadharPicLink);
        myForm.set('experience', experience);
        myForm.set("price", price);
        myForm.set("userId", user._id);


        // console.log("my form is ",myForm);

        // const res = await workerRegister(myForm);


        // const res = await workerRegister({
        //     aadhar: aadhar,
        //     age: age,
        //     fullName: user.fullname,
        //     email: user.email,
        //     userId: user._id,
        //     phone: phone,
        //     pin: pin,
        //     address: address,
        //     role: role,
        //     profilePic: profilePicLink,
        //     aadharPic: aadharPicLink,
        //     experience: experience,
        //     price: price,
        // })
    }

    const onProfilePicChange = async (e) => {

        const reader = new FileReader();



        reader.onload = () => {

            if (reader.readyState === 2) {
                // setAvatarPreview(reader.result);
                setprofilePicLink(reader.result);
            }
        };


        reader.readAsDataURL(e.target.files[0]);

        // console.log("e is ",e.target.files[0]);





        // setProfilePic(e.target.files[0]);
        setProfilePicName(e.target.files[0].name);
        // const d = new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset", "rental-rack");
        // d.append("cloud_name", "ddwsaojx6");
        // const d1 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
        //     method: "post",
        //     body: d
        // }).then((res) => res.json()).then((data) => {
        //     if (data) {
        //         setProfilePic(data.url)


        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ", data.url);
        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    // const onAadharPicChange = async (e) => {

    //     const reader = new FileReader();

    //     reader.onload = () => {

    //         if (reader.readyState === 2) {
    //             // setAvatarPreview(reader.result);
    //             setAadharPicLink(reader.result);
    //         }
    //     };



        // reader.readAsDataURL(e.target.files[0]);






        // setAadharPic(e.target.files[0]);
        // setAadharPicName(e.target.files[0].name);

        // const dA = new FormData();
        // dA.append("file", aadharPic);
        // dA.append("upload_preset", "rental-rack");
        // dA.append("cloud_name", "ddwsaojx6");

        // const d2 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
        //     method: "post",
        //     body: dA
        // }).then((res) => res.json()).then((data) => {

        //     if (data) {
        //         setAadharPic(data.url)
        //         setAadharPicLink(data.url);
        //         console.log("aadhar url is ", data.url);
        //         // setWorkerData();   
        //     }
        // }).catch((err) => {
        //     console.log(err)
        // })
    // }

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
            <Box  maxWidth={"1200px"} sx={boxstyleForm} bg={"gray.100"} className="labour-form" >

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
                                <FormLabel htmlFor="address">Last Name:</FormLabel>
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
                                <FormLabel htmlFor="BankAddress">Address:</FormLabel>
                                <Input
                                    type="text"
                                    id="BankAddress"
                                    placeholder="Enter Bank Address"
                                    value={userAddress}
                                    onChange={(event) => setUserAddress(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel htmlFor="price">Price (per day):</FormLabel>
                                <Input
                                    type="number"
                                    placeholder="Price Per Day"
                                    id="price-labour"
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </FormControl>
                        </Box>

                        <Box >
                            <FormControl>
                                <FormLabel htmlFor="pin">Pin Code:</FormLabel>
                                <Input
                                    type="number"
                                    id="pin"
                                    placeholder="Enter Pin"
                                    value={pin}
                                    onChange={(event) => setPin(event.target.value)}
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

export default UserDetails;




