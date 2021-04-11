const auth = require("../middleware/auth");

const _ = require("lodash");
const { Review, validate } = require("../models/review");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    // let user = await User.findOne({ email: req.body.email });
    // if (user) return res.status(400).send("User already registered.");
  
    let review = new Review(_.pick(req.body, ["rating","movieId", "review", "userId","userName","movieName"]));
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);
    res.send(review);
    await review.save();
  
    // const token = user.generateAuthToken();
    // res
    //   .header("x-auth-token", token)
    //   .header("access-control-expose-headers", "x-auth-token")
    //   .send(_.pick(user, ["_id", "name", "email"]));
  });

  router.get("/", async (req, res) => {
    const reviews = await Review.find()
      .select("-__v")
      .sort("review");
    res.send(reviews);
  });
  
  router.get("/hi", async (req, res) => {
    try {
        
        await res.send("hi")
    } catch (error) {
        res.send(error.message)
    }
  })
  
  module.exports = router;