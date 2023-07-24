import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/ChatProvider";
import { SideDrawer } from "../../components";
import MainBox from "./MainBox";
import SideBar from "./SideBar";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { getUserFromLocalStorage } from "../utils/localStorage";
import { afterLoginStorage } from "../../utils/localStorage";


const Dashboard = () => {
  const { user } = useAppContext();
  const [fetchAgain, setFetchAgain] = useState(false);
  
  useEffect(()=>{
    afterLoginStorage();

  },[])
  



  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <SideBar fetchAgain={fetchAgain} />}
        {user && (
          <MainBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Dashboard;
