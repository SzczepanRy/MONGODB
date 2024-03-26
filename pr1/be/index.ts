import express from "express";
import { ItemController } from "./ItemController";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

const itemController = new ItemController();

(async () => {
    await mongoose.connect("http://localhost:8081");
    app.use(cors());

    app.get("/getItems", itemController.getItems);

    app.listen(3000, () => {
        console.log("running");
    });
})();
