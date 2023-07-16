import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/ChatProvider";
import { SideDrawer, MyChats, ChatBox } from "..";


import { Box, Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Stack, Tooltip, Button, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { FiSearch } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import Loader from "../Loader";

import { getData } from "../../service/api"
// import { useNavigate } from "react-router-dom";
// import { getUserFromLocalStorage } from "../../utils/localStorage";

const Offers = () => {
  const { user } = useAppContext();
  // const [fetchAgain, setFetchAgain] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState("");

  useEffect(() => {

    fetchData();

  });

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.log('error is-->', error);
    }
  };



  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      {/* <Container > */}

      <div style={{margin:"20px"}} className="affilate-table-container ">
        <div className="affilate-table-container">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th className="affilate-deatils-all">No.</th>
                <th className="affilate-deatils-all">Campagin</th>
                <th className="affilate-deatils-all">Description</th>
                <th className="affilate-deatils-all">Tags</th>
                <td className="affilate-deatils-all"> URL</td>
                <td className="affilate-deatils-all"> code</td>
                {/* <td className="affilate-deatils-all"> Remarks</td> */}
              </tr>
            </thead>


            <tbody>
              {

                loading ? (
                  data?.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="affilate-deatils-all">{index + 1}</td>
                      {/* <td className="affilate-deatils-all">{item?.advitisor_id}</td> */}
                      <td className="affilate-deatils-all">{item?.name}</td>
                      <td className="affilate-deatils-description">{item?.description}</td>
                      <td className="affilate-deatils-all">10</td>
                      <td style={{ fontSize: 20 }} className='affilate-deatils-all'>
                      
                        <Button colorScheme="purple" style={{  fontWeight: 700 }}>
                          <a href={item?.url} target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </Button>
                      </td>
                      <td className="affilate-deatils-all">{item?.code}</td>
                      {/* <td className="affilate-deatils-all">{item?._id}</td> */}

                      <td >

                        {/* <Button style={{marginLeft:20}} variant="danger" onClick={()=>deleteOfferCampagin(item._id)}>
                      Delete
                    </Button> */}

                      </td>

                    </tr>
                  ))
                ) : <Loader />


              }
            </tbody>



          </table>
        </div>

      </div>
      {/* </Container> */}


    </div>
  );
};

export default Offers;
