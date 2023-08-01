import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { SideDrawer } from "..";
import { useAppContext } from "../../context/ChatProvider";
import {  useEffect } from "react";
import { afterLoginStorage, getResFromLocalStorage } from "../../utils/localStorage";
import { motion } from "framer-motion";
import hero from "../../assets/img/homesc.gif";

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
  // const { x } = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  //   config: { duration: 4000 },
  //   reset: true,
  //   loop: Infinity,
  // });


  useEffect(() => {

    afterLoginStorage()
  }, [])



  return (
    <>
      {user && <SideDrawer />}
      <Text alignitems="center" display="flex" justifyContent="center" fontSize="4xl" sx={boxstyle}  >
        Affworld Technologies
      </Text>

      <Box alignitems="center" display="flex" justifyContent="center">

        <Button ml={10} mr={10} colorScheme="purple" onClick={handleClick}> Offers</Button>
        <Button colorScheme="purple" onClick={ClickConversion}> Clicks & Conversion</Button>
      </Box>

      <SimpleGrid p={10} minChildWidth={300} spacing={5} >
        <Box display={"flex"} alignItems={"center"} bg={"gray.100"} braderRadius="20px" width="fit-content">
          <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring' }}>
            <Text fontSize="2xl" fontWeight="bold" padding="30px"  >
              Welcome
              &nbsp;<span style={{ fontWeight: "700" }}>

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

    </>
  );
};

export default Home;
