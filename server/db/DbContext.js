import mongoose from "mongoose";
import CarSchema from "../models/Car";
import ValueSchema from "../models/Value";
import HouseSchema from "../models/House";


// this is where models get registered and access from the db
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema);
}

export const dbContext = new DbContext();
