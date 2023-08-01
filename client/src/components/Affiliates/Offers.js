import React, { useEffect, useState } from "react";
import { SideDrawer, MyChats, ChatBox } from "..";
import { useClipboard } from "@chakra-ui/react";
import { toast } from "react-toastify";
import {  Button } from '@chakra-ui/react';
import Loader from "../Loader";
import { getData } from "../../service/api"
import { getUserFromLocalStorage , getResFromLocalStorage } from "../../utils/localStorage";

const URL = process.env.REACT_APP_PROD_ADMIN_API;
const Offers = () => {
  const  user   = getUserFromLocalStorage();
  const res = getResFromLocalStorage();
  // const [fetchAgain, setFetchAgain] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState("");
  const { hasCopied, onCopy } = useClipboard();

  useEffect(() => {

    fetchData();

  });

  const fetchData = async () => {
    try {
      // console.log("current user is --->",user)
      const result = await getData();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.log('error is-->', error);
    }
  };

  // const copyLink = `https://affilator.onrender.com/${item?.code}?${user?._id}`
  const handleCopyAff = async (item) => {

    const link = `${URL}/${item?.code}?affiliate_id=${res.data.affiliate_id}`
    console.log("copy clicked");
    console.log("link is -->", link);
    console.log("this is res --->", res);
    console.log("this is user affilatre id-----> :",res.data.affiliate_id);

    try {
     
      await navigator.clipboard.writeText(link);
      onCopy();
      toast.success("Link copied to clipboard", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.error("Error copying link to clipboard:", error);
      toast.error("Error copying link to clipboard", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    // href={`${URL}/${item?.code}?${user?._id}`} target="_blank"


  }


  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      {/* <Container > */}

      <div style={{ margin: "20px" }} className="affilate-table-container ">
        <div className="affilate-table-container">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th className="affilate-deatils-all">No.</th>
                <th className="affilate-deatils-all">Campagin</th>
                <th className="affilate-deatils-all">Description</th>
                <td className="affilate-deatils-all"> URL</td>
                <td className="affilate-deatils-all"> Copy Offer Link</td>
                {/* <td className="affilate-deatils-all"> code</td> */}
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
                      <td style={{ fontSize: 20 }} className='affilate-deatils-all'>

                        <Button colorScheme="purple" style={{ fontWeight: 700 }}>
                          <a href={item?.url} target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </Button>
                      </td>
                      <td style={{ fontSize: 20 }} className='affilate-deatils-all'>

                        <Button onClick={() => { handleCopyAff(item) }} colorScheme="teal" style={{ fontWeight: 700 }}>
                          Copy 
                        </Button>
                      </td>
                      {/* <td className="affilate-deatils-all">{item?.code}</td> */}
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



    </div>
  );
};

export default Offers;
