import React from "react";
import { Box, HStack } from "@chakra-ui/react";
// import "./style.css";
// import SingleChat from "./SingleChat";
// import { useAppContext } from "../context/ChatProvider";

const MainBox = ({ fetchAgain, setFetchAgain }) => {
//   const { selectedChat } = useAppContext();

  return (
    <Box
    //   display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      {/* <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
      <HStack spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
            1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
            2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
            3
        </Box>
    </HStack>
    </Box>
  );
};

export default MainBox;
