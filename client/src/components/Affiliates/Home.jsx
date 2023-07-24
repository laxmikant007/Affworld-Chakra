import React from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Text  , Box} from "@chakra-ui/react";
import { SideDrawer, MyChats, ChatBox } from "..";
import { useAppContext } from "../../context/ChatProvider";
import Loader from "../Loader";
import { useState , useEffect } from "react";
import {  getData } from "../../service/api"
import { afterLoginStorage } from "../../utils/localStorage";


// import {Text} from 





const Home = () => {
  

    const { user } = useAppContext();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/affiliate/offers")
    }
   

    const boxstyle = {
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
        fontSize: "4xl",
        fontWeight: "extrabold"
    }

    
    
    useEffect(()=>{
        
        afterLoginStorage()
    },[])

    

    return (
        <>


            {user && <SideDrawer />}



            <Container>

                <Box sx={boxstyle}>
                    <Text> Go Visit Your Dashbooard! </Text>
                </Box>

                {/* <Button  >Offers</Button> */}
                <Button style={{ marginTop: "40px" }} colorScheme="purple" onClick={handleClick}> Offers</Button>



                <Text style={{ margin: "20px", padding: "20px", fontSize: "30px", fontWeight: "600" , backgroundColor:"#eef3f7" , borderRadius:"20px" }}>
                Welcome  to Affworld , where we make it easy and affordable to get the help you need for your projects! Affworld is affiliate network platform that focus on growing sales and growth for Advertisers.😁😁
                </Text>
            </Container>


        </>
    );
};

export default Home;
