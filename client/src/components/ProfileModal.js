import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate(); 
  const handleClick = ()=>{
    navigate("/paymentDetails")
  }
  const handleClickEdit =()=>{

    console.log(user);
    // navigate("/userDetails")

  }



  return (

    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="440px">
          <ModalCloseButton />

          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="40px"
              fontWeight={600}
              fontFamily="Poppins"
              display="flex"
              justifyContent="center"
            >
             Hi! {user.username}
            </Text>
            <Image
              borderRadius="50%"
              margin="10px"
              boxSize="150px"
              src={user.avatar}
              alt={user.username}
            />
            <Text bg={"gray.100"}  fontSize={{ base: "28px", md: "30px" }} fontFamily="Poppins">
              Email: {user.email}
            </Text>
            <Button style={{ marginTop: "40px" }} colorScheme="purple" onClick={handleClick}> Payment Details</Button>
            <Button style={{ marginTop: "40px" }} colorScheme="purple" onClick={handleClickEdit}> Edit Details</Button>

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
