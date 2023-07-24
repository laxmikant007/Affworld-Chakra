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
import { getResFromLocalStorage } from "../utils/localStorage";

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

  const user1  = getResFromLocalStorage();



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
             Hi! {user1?.data.name}
            </Text>
            <Image
              borderRadius="50%"
              margin="10px"
              boxSize="150px"
              src={"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
              alt={user1?.data.name}
            />
            <Text bg={"gray.100"}  fontSize={{ base: "28px", md: "30px" }} fontFamily="Poppins">
              Email: {user1?.data.email}
            </Text>
            <Button style={{ marginTop: "20px" }} colorScheme="purple" onClick={handleClick}> Payment Details</Button>
            <Button style={{ marginTop: "20px" }} colorScheme="purple" onClick={handleClickEdit}> Edit Details</Button>

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
