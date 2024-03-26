import express from "express";
import { ItemController } from "./ItemController";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

const itemController = new ItemController();

// const middleware = () => {
//     console.log("called");
//     return;
// };

(async () => {
    const { DATABASE_URI } = process.env;
    await mongoose.connect(DATABASE_URI as string);
    app.use(cors());

    app.use(express.json());

    app.get("/getItems", (req, res) => {
        itemController.getItems(req, res);
    });
    app.post("/createItems", (req, res) => {
        itemController.createItems(req, res);
    });

    app.listen(3000, () => {
        console.log("running");
    });
})();
