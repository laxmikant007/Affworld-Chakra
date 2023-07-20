import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/ChatProvider";
import { SideDrawer, MyChats, ChatBox } from "../components";
import { Box, Text, SimpleGrid, Button, Radio, Stack, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { UseDisclosureProps, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Finance = () => {
  const { user } = useAppContext();
  //   const [fetchAgain, setFetchAgain] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)



  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Text fontSize={40} fontWeight={600} marginLeft={50} w={"fit-content"}>Balances</Text>
      <SimpleGrid marginLeft={"50px"} p={5} minChildWidth={250} spacing={4} >


        <Box
          display="  flex"
          justifyContent="space-between"
          border="2px solid gray"
          borderRadius={"10px"}
          bg={"gray.100"}
          w="100%"
          

          h="25.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>RevShare</h1>
            <h1 style={{ fontSize: "40px" }}>$0.00</h1>
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="2px solid orange"
          borderRadius={"10px"}
          bg={"gray.100"}


          w="100%"
          h="25.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>In processing</h1>
            <h1 style={{ fontSize: "40px" }}>$0.00</h1>

          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid purple"
          borderRadius={"10px"}
          bg={"gray.100"}



          w="100%"
          h="25.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>To the payment</h1>
            <h1 style={{ fontSize: "40px" }}>$1000.00</h1>

          </Text>
        </Box>
      </SimpleGrid>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Payment Method</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Choose your payment method:</Text>
            <RadioGroup defaultValue={1} >
              <Stack  fontWeight={600} spacing={3} direction="column">
                <Radio value={1}>UPI</Radio>
                <Radio value={2}>Astropay</Radio>
                <Radio value={3}>Bitcoin</Radio>
                <Radio value={4}>Other</Radio>

              </Stack>
            </RadioGroup>
          </ModalBody>


          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='whatsapp'>Save </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      <SimpleGrid marginLeft={"50px"} p={5} minChildWidth={250} spacing={10} >


        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid green"
          borderRadius={"10px"}
          bg={"gray.100"}
          w="100%"
          h="20.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>Manual payment</h1>
            <Text >

              <h1 style={{ marginTop: "30px", fontSize: "20px" }}>Payment is made within 3 days of order</h1>
            </Text>

          </Text>
          <Box>
            <Button onClick={onOpen} v w={200} colorScheme="purple" > Order Payment</Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid orange"
          borderRadius={"10px"}
          bg={"gray.100"}


          w="100%"
          h="20.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>Autopay</h1>
            <h1 style={{ marginTop: "30px", fontSize: "20px" }}>You haven't activated the autopay feature</h1>
          </Text>
        </Box>

      </SimpleGrid>

      <SimpleGrid marginLeft={"50px"} p={5} minChildWidth={250} spacing={10} >


        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid green"
          borderRadius={"10px"}
          bg={"gray.100"}
          w="100%"
          h="25.5vh"
          p="30px"
        >
          <Text fontSize={20} fontWeight={700}>
            <h1>Payment History</h1>
          </Text>
        </Box>


      </SimpleGrid>

    </div>
  );
};

export default Finance;
