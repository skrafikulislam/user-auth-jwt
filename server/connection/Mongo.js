import mongoose from "mongoose";

export const MongoDb_Connection = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_CONNECTION}`)
      .then(() => {
        console.log("MongoDb Atlas Connected Successfully");
      })
      .catch((err) => console.log(err.message));
  } catch (error) {
    console.log(error.message);
  }
};
