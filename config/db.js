import  mongoose  from "mongoose";
const db = "mongodb+srv://thoufiqh56_db_user:bYa0yzMpJMfpcrrB@cluster0.h5lxvnm.mongodb.net/?appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB };