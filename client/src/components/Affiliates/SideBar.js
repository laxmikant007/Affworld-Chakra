import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  ButtonGroup
  
  

} from '@chakra-ui/react';
import {Avatar} from "@chakra-ui/avatar";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import React from 'react';
import { Box, HStack, Button, Input, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '@chakra-ui/icons';


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/home")
  }

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open Sidebar
      </Button>
      <Button ref={btnRef} colorScheme='teal' onClick={handleclick}>
        Home
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />

         
         


          <Card maxW='sm'>
            <CardBody>
            <Avatar  style={{margin:"100px"}} size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
           
              <Stack bg="gray.100" alignItems={"center"} mb='3' mt='6' spacing='3'>
                <Heading size='md'>Your Manager</Heading>
                <Text>
                 Name : manager
                </Text>
                <Text>
                 email : manager@gmail.com
                </Text>
                <Text>
                 phone : 9544788789
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                 Available $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  View Details
                </Button>
                <Button variant='solid' colorScheme='blue'>
                  Payment Details
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>



          {/* <DrawerHeader >Create your account</DrawerHeader> */}

          {/* <DrawerBody >
            <Input placeholder='Type here...' />
          </DrawerBody> */}

            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
        </DrawerContent>

        


          


      </Drawer>
            


    </>
  )
}

export default DrawerExample;