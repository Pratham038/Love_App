const mongoose = require("mongoose");
const Love = require("../models/LoveModel");
const createLove = async (req, res) => {
  const { fname, lname, percent } = req.body;

  try {
    const love = await Love.create({
      fname,
      lname,
      percent,
    });
    res.status(200).json(love);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createLove,
};
