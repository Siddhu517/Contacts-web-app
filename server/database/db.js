import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@merncamp.xvndl.mongodb.net/CRUD-APPLICATION?retryWrites=true&w=majority`;
  try {
      mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (err) {
    console.log("Error Connection database", err);
  }
};
