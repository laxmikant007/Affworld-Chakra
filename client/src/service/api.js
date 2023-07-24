import axios from 'axios'

const URL1="http://localhost:5000"
// const URL1="https://affworld-chakra-api.onrender.com"

const URL = "https://affilator.onrender.com"
// const URL = "process.env.REACT_APP_BASE_URL;"

const KEY = "key";


const config={
  headers:{
    "token":localStorage.getItem("token")
  }
}

//All are Offer/Campagin Section 


export const getData = async () => {
  try {
  
    const url = `${URL}/campaign/?api_key=${KEY}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return   response.data;
  } catch (error) {
    console.log('error is-->', error);
  }
};

export const addCampagin = async (data) => {
  try {

    const url = `${URL}/campaign/?api_key=${KEY}`;

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("error while posting: ", error.message);
  }
};


export const deleteCampagin = async (id) => {
  try {
    const url = `${URL}/campaign/${id}?api_key=${KEY}`;

    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const result = response.data;
    return result;

  } catch (error) {
    console.log("Error while deleting -->", error);
  }
};



//All are advitisors Section 

export const fetchAdvitisors = async () => {

  try {
    const url = `${URL}/api/advitisor/?api_key=${KEY}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("Error while Fetching Advitisors -->", error.message);
  }
}

export const addNewAdvitisors = async (data) => {

  try {
    const url = `${URL}/api/advitisor/?api_key=${KEY}`

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("Error while Adding New Advitisors-->", error.message)
  }
}

export const deleteAdvitisorsData = async (id) => {

  try {
    const url = `${URL}/api/advitisor/${id}/?api_key=${KEY} `
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response.status);

    return response.status;



  } catch (error) {
    console.log("Error while Deleting Advitisors DAta --> ", error.message)
  }




}

export const getPaymentDetails=async(id)=>{
  try{
    const result=await axios.get(`${URL}/getPaymentDetails/${id}`);
    // console.log("====",result.data);
    return result.data;
  }
  catch(error){
    console.log("error while getting projects ", error.message);
  }
}

export const getPaymentInfo = async(id)=>{
  try{
    const result=await axios.get(`${URL1}/api/v1/payment/getPaymentDetails/${id}`);
    // console.log("====",result.data);
    return result.data;
  }
  catch(error){
    console.log("error while getting projects ", error.message);
  }
}