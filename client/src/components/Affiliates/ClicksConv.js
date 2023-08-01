
import React, { useEffect, useState } from "react";
import { getUserFromLocalStorage, getResFromLocalStorage } from "../../utils/localStorage";
import { SideDrawer, MyChats, ChatBox } from "..";
import axios from 'axios';
import { Button, useDisclosure } from "@chakra-ui/react";
import Loader from "../Loader";
import { Container, Text, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { fetchDataClick, postDataClick } from "../../service/api";
import { toast } from "react-toastify";


const ClicksConv = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = getUserFromLocalStorage();
  const URL2 = process.env.REACT_APP_PROD_API;
  // const accessToken = user.data.access_token;

  const fetchData = async () => {
    const accessToken = user.data.access_token;
    // console.log("access token is from apis   -->:", accessToken)
    const url = `${URL2}/api/analytics/clicks`;
    // console.log("URL is in apis -->", url)

    try {
      // const response = await fetchDataClick();
      const response = await axios.get(url , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
  
        },}
      );
      // console.log("this is response  --->",response.data)
      setData(response.data);
      setLoading(true);
    } catch (error) {
      console.log("Error While Fetching data click --->",error)
      toast.error("Error in Fetching Data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handlePostback = async (item) => {
    onOpen()
    try {
      const response = await postDataClick(item);
      console.log("data of post back data------>", response)
      setPostData(response);
      setLoading(true);
    } catch (error) {
      console.log('error is-->', error);
      toast.error("Error in Fetching Status");
    }
  }
  const boxstyle = {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgClip: "text",
    fontSize: "4xl",
    fontWeight: "extrabold",
    margin: "auto",
    display: "flex",
    justifyContent: "center"
  }

  return (
    <>

      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}



        <Box sx={boxstyle}>
          <Text> Clicks and Conversions! </Text>
        </Box>


        <div style={{ margin: "20px" }} className="affilate-table-container ">
          <div className="affilate-table-container">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th className="affilate-deatils-all">No.</th>
                  <th className="affilate-deatils-all">Campagin</th>
                  <th className="affilate-deatils-all">Counts</th>
                  <td className="affilate-deatils-all"> Conversions</td>
                </tr>
              </thead>
              <tbody>
                {
                  loading ? (
                    data?.length > 0 &&
                    data.map((item, index) => (
                      <tr key={index}>
                        <td className="affilate-deatils-all">{index + 1}</td>
                        <td className="affilate-deatils-all">{item?.name}</td>
                        <td className="affilate-deatils-description">{item?.count}</td>
                        <td style={{ fontSize: 20 }} className='affilate-deatils-all'>
                          <Button onClick={() => { handlePostback(item) }} colorScheme="teal" style={{ fontWeight: 700 }}>
                            Status
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : <Loader />


                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Conversion Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th className="affilate-deatils-all">No.</th>
                  <th className="affilate-deatils-all">Count</th>
                  <th className="affilate-deatils-all">Event ID</th>

                </tr>
              </thead>


              <tbody>
                {

                  loading ? (
                    postData?.length > 0 &&
                    postData.map((item, index) => (
                      <tr key={index}>
                        <td className="affilate-deatils-all">{index + 1}</td>
                        <td className="affilate-deatils-all">{item?.count}</td>
                        <td className="affilate-deatils-description">{item?.event_id}</td>
                      </tr>
                    ))
                  ) : <Loader />
                }
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default ClicksConv