import axios from "axios";

export const afterLoginStorage = async()=>{
  try {
    const user = localStorage.getItem("user");
    if (user) {
      const url = "https://affilator-affiliate-api.onrender.com/api/affiliates"
      try {
        const userData = JSON.parse(user); // Parse the JSON data
        const accessToken = userData.data.access_token; // Access the 'access_token' property
        console.log("Access Token:", accessToken);
       
        const res = await axios.get(url ,{
      
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      
    })
    console.log("response is -->",res);
    localStorage.setItem("res", JSON.stringify(res));
    return res.data;



      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      console.log("User data not found in local storage.");
    }

    

    

  } catch (error) {
    console.log("error while get reques is ",error)
    
  }
}

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));

};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem("user");

  const result = localStorage.getItem("user");
  const user = JSON.parse(userData); // Parse the JSON data

  
  return user;
};
