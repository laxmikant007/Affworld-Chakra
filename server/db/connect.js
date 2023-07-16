import mongoose from "mongoose";

const connect = (url) => {
  return mongoose
    // .connect("mongodb+srv://RAHULFP:Rahul6375@fastapi.ryfado0.mongodb.net/")
    .connect(process.env.MONGO_URI)

    .then(() => console.log(`Connection Established!😁`))
    .catch((error) => console.log(`Connection Error ${error}`));
};

export default connect;
