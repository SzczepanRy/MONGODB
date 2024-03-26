import { Request, Response } from "express";
import Item, { ItemI } from "./mongo/Item";

interface reqI {
    title: string;
    done: boolean;
}

class ItemController {
    async getItems(_req: Request, res: Response) {
        try {
            const items = (await Item.find({})).map((e: ItemI) => e);
            console.log(items);
            return res.json({ items });
        } catch {
            return res.json({ message: "could not find " });
        }
    }
    async createItems(req: Request, res: Response) {
        try {
            const { title, done } = req.body as reqI;

            const item = new Item({
                title,
                createDate: new Date(),
                done,
            });
            await item.save();

            return res.json({ message: "added Item" });
        } catch {
            return res.json({ message: "could not find " });
        }
    }
}
export { ItemController };
