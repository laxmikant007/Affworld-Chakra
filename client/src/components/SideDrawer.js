import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { Spinner } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import { toast } from "react-toastify";
import ChatLoading from "./ChatLoading";
import UserListItem from "./UserListItem";
import { useAppContext } from "../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { removeUserFromLocalStorage } from "../utils/localStorage";
import { getSender } from "../config/chat";

import managerPhoto from "../assets/img/manager.jpeg"


import {


  DrawerFooter,
  DrawerHeader,


  DrawerCloseButton,
  Image,
  Stack,

  Heading,
  Divider,
  ButtonGroup



} from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'

import { HStack } from "@chakra-ui/react";

import { CalendarIcon } from '@chakra-ui/icons';

import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon } from '@chakra-ui/icons'

import avatar from "../assets/img/avatar.png";











const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = useAppContext();

  const logoutHandler = () => {
    removeUserFromLocalStorage("user");
    removeUserFromLocalStorage("res");


    navigate("/register");
  };

  const handleSearch = async () => {
    if (!search) {
      toast.error("Please Provide username");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.get(`/api/v1/auth/users?search=${search}`);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast.error(error);
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);

      const { data } = await api.post(`/api/v1/chat`, { userId });

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast.error(error);
    }
  };

  // const handleClick = ()=>{
  //   console.log("ok")
  // }

  const btnRef = React.useRef();

  const handleClick = () => {
    navigate("/");
  }





  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.200"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Manager Sidebar" hasArrow placement="bottom-end">


          {/* <Button variant="ghost" onClick={onOpen}> */}
          {/* <FiSearch /> */}
          {/* <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text> */}
          {/* <Button>
            Side Bar
          </Button> */}
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon />
          </Button>


          {/* </Button> */}




        </Tooltip>
        <Text
          onClick={handleClick}
          fontSize="2xl"
          fontFamily="Poppins"
          css={{
            background: "linear-gradient(110.29deg, #2E5CFF 11.11%, #973DF0 60.96%)",
            textFillColor: "text",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            "-webkit-text-fill-color": "transparent",
            fontWeight: 700,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          AffWorld
        </Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              {notification?.length > 0 ? (
                <>{toast.info(`New Message`)}</>
              ) : null}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification?.length && "No New Message"}
              {notification?.map((noti) => (
                <MenuItem
                  key={noti._id}
                  onClick={() => {
                    setSelectedChat(noti.chat);
                    setNotification(notification.filter((n) => n !== noti));
                  }}
                >
                  {noti?.chat?.isGroupChat
                    ? `New Message in ${noti?.chat?.chatName} `
                    : ` New Message from ${getSender(user, noti?.chat?.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"

          >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={avatar}
              />
            </MenuButton>
            <MenuList
            borderRadius="10"
            bg="gray.200"
             display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column">
              <MenuItem display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column">My Profile</MenuItem>
              <ProfileModal user={user} />
              <MenuDivider />
              <MenuItem display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column" onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer bg="gray.200" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Text
            height="max-content"
            fontSize="20px"
            fontFamily="Poppins"
            alignSelf="center"
            margin="20px"
          >
            Search Users
          </Text>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user?._id}
                  user={user}
                  handleFunction={() => accessChat(user?._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open Sidebar
      </Button> */}
      {/* <Button ref={btnRef} colorScheme='teal' onClick={handleclick}>
        Home
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="gray.200"
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />





          <Card maxW='sm'>
            <CardBody  >
              <div style={{ width: "fit-content", margin: "auto" }}>

                <Avatar style={{ margin: "10px" }} size='xl' name='Dan Abrahmov' src={managerPhoto} />
              </div>



              <Stack bg="gray.100" alignItems={"center"} mb='3' mt='6' spacing='3'>
                <Heading size='md'>Your Manager</Heading>
                <Text>
                  Name : Rishika Jain
                </Text>
                <Text>
                  email : Portal@Affworld.in
                </Text>
                <Text>
                  phone : 9116150431
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  Available $
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              {/* <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  View Details
                </Button>
                <Button variant='solid' colorScheme='blue'>
                  Payment Details
                </Button>
              </ButtonGroup> */}
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
  );
};

export default SideDrawer;
