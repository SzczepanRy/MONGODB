import mongoose, { Schema, Document } from "mongoose";

interface ItemI extends Document {
    title: string;
    createDate: Date;
    done: boolean;
}

const itemSchema = new Schema<ItemI>({
    title: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
});

const Item = mongoose.model<ItemI>("Items", itemSchema);

export { Item as default, ItemI };
