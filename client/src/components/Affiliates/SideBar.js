import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import React from 'react';
import { Box, HStack, Button, Input, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    const navigate = useNavigate();
    const handleclick = ()=>{
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
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample;