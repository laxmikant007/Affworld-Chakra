import React from "react";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { SideDrawer, MyChats, ChatBox } from "..";
import { useAppContext } from "../../context/ChatProvider";
import Loader from "../Loader";
import { useState, useEffect } from "react";
import { getData } from "../../service/api"
import { afterLoginStorage, getResFromLocalStorage } from "../../utils/localStorage";
import { motion, useSpring } from "framer-motion";
import hero from "../../assets/img/homesc.gif";
import styled from "styled-components";






// import {Text} from 





const Home = () => {

    const res = getResFromLocalStorage();
    const { user } = useAppContext();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/affiliate/offers")
    }
    const ClickConversion = () => {
        navigate("/affiliate/clicks")
    }


    const boxstyle = {
        bgGradient: "linear(to-l, #7928CA, #FF0080)",
        bgClip: "text",
        fontSize: "4xl",
        fontWeight: "extrabold"
    }
    const { x } = useSpring({
        from: { x: 0 },
        to: { x: 100 },
        config: { duration: 4000 },
        reset: true,
        loop: Infinity,
    });


    useEffect(() => {

        afterLoginStorage()
    }, [])



    return (
        <>


            {user && <SideDrawer />}


{/* 
            <Container>

                <Box sx={boxstyle}>
                    <Text> Go Visit Your Dashbooard! </Text>
                </Box>

                
                <Button style={{ marginTop: "40px" }} colorScheme="purple" onClick={handleClick}> Offers</Button>
                <Button style={{ marginTop: "40px", marginLeft: "40px" }} colorScheme="purple" onClick={ClickConversion}> Clicks & Conversion</Button>



                <Text style={{ margin: "20px", padding: "20px", fontSize: "30px", fontWeight: "600", backgroundColor: "#eef3f7", borderRadius: "20px" }}>
                    Welcome  to Affworld , where we make it easy and affordable to get the help you need for your projects! Affworld is affiliate network platform that focus on growing sales and growth for Advertisers.😁😁
                </Text>
            </Container> */}

            
                
                    <Text alignitems="center" display="flex" justifyContent="center" fontSize="4xl" sx={boxstyle}  >
                     Affworld Technologies
                    </Text> 
                    
                    <Box alignitems="center" display="flex" justifyContent="center">

                    <Button ml={10} mr={10} colorScheme="purple" onClick={handleClick}> Offers</Button>
                    <Button  colorScheme="purple" onClick={ClickConversion}> Clicks & Conversion</Button>
                    </Box>

                    <SimpleGrid p={10} minChildWidth={300} spacing={5} >
                        <Box display={"flex"} alignItems={"center"} bg={"gray.100"} braderRadius="20px" width="fit-content">
                            <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring' }}>
                                <Text  fontSize="2xl" fontWeight="bold" padding="30px"  >
                                    Welcome
                                    &nbsp;<span style={{  fontWeight: "700" }}>
                                    
                                    {res?.data.name.split(" ")[0]}&nbsp;!!
                                    
                                    
                                    </span> &nbsp;
                                    to <b> Affworld </b> , An Ecommerce platform and Affiliate
                                    market palace that delivers High
                                    performance on web & mobile To
                                    worldwide Adervitsers.😁😁
                                </Text>

                            </motion.div>
                        </Box>
                        <Box>
                            <motion.div
                                initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring' }}

                                className="hero-section-image">

                                <img
                                    src={hero}
                                    alt="hero-section-photo"
                                    className="img-style"
                                />

                            </motion.div>
                        </Box>

                    </SimpleGrid>
                    {/* </div> */}
                
            


        </>
    );
};

const Wrapper = styled.section`
padding: 6rem 0;
/* border: 1px solid red; */

.container-hero{


  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  
  
  justify-content: center;
  align-items: center;
}

.sub-container-hero{
  gap : 8rem;
  margin-top:40px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

img {
  /* border: 1px solid red; */
  width: 600px;
  border-radius: 50px;

  /* width : 200px; */
  height: 10rem;
}

.hero-section-data {
  p {

    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}
.intro-crew{
  border-radius: 30px;
  padding: 35px;
  background-color: #eef3f7;
  align-items: center;
  text-align: center;
  max-width : 500px;
  margin-top: 0;
  font-weight: bold;
  font-size: 1.8em;
}

.hero-section-image {
  width: 650px;
  height: 450px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.hero-section-image img{
  width: 100%;
  height: 100%;
  object-fit: cover;

}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}


`;


export default Home;
