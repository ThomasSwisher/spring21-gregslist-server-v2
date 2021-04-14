import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        price: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true },
        year: { type: Number, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String, default: '//placehold.it/300x300' },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default House;