const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true,
      },
    movieId:{
        type: String,
        required: true
    },
    userId:{
      type: String,
    },
    userName:{
      type:String,
    },
    movieName:{
      type:String,
    }
    
})
const Review = mongoose.model("Review", reviewSchema);

function validateReview(review) {
    const schema = {
      movieId: Joi.string()
        .required(),
      review: Joi.string()
        .required(),
      userId: Joi.string(),
      userName: Joi.string(),
      movieName:Joi.string()
    };
  
    return Joi.validate(review, schema);
  }

  exports.Review = Review;
exports.validate = validateReview;