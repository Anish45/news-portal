const express = require("express");

const router = express.Router();

const Form = require("../models/form");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "plz fill the field properly" });
  }

  try {
    const userExist = await Form.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const user = new Form({ name, email, password });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(500).json({ error: "failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }

    const userLogin = await Form.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // token = await userLogin.generateAuthToken();

      // res.cookie("jwtoken", token, {
      //   expires:new Date(Date.now() + 25892000000),
      //   httpOnly:true
      // });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        token = await userLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "successfully signed in" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logged out");
});

module.exports = router;
