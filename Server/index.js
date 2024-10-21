import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'

	const app = express();

	

	app.use(bodyparser.json({ limit: "30mb", extended: true }));
	app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

	app.use(cors());

	app.use('/posts',postRoutes)
	const MONGO_URL =
  "mongodb+srv://shrividya:iM9YNo2J2av4SN6i@cluster1.nf1wxyp.mongodb.net/memories";
 //mongodb+srv://<db_username>:<db_password>@cluster1.nf1wxyp.mongodb.net/
	const PORT = process.env.port || 5000;
	
	mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`server running on port ${PORT}`);
  })
  .catch((err) => console.log(err));
app.listen(PORT,()=>{
	console.log('connected')
})