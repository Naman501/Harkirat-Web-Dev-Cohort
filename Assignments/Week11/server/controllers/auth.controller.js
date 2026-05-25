const userModel = require("../model/user.model");
const Account = require("../model/account.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  const { username, password, firstName, lastName } = req.body;

  if (!username || !password || !firstName || !lastName) {
    return res.status(403).json({
      status: "Failure",
      message:
        " username, password, firstName & lastName are required to sign up",
    });
  }

  const user = await userModel.findOne({ username });

  if (user)
    return res.status(403).json({
      msg: "User with username already exists.",
    });

  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
 const newUser= await userModel.create({
      username,
      password: hashPassword,
      firstName,
      lastName,
    });
    console.log("newUser",newUser)
    await Account.create({
      userId: newUser._id,
      balance:(1 + Math.random() * 10000).toFixed(2),
    })
  }

  return res.status(201).json({
    status: "Success",
    message: "User signed up successfully!",
  });
}








async function signin(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(201).json({
        status: "Failure",
        message: "Both username and password are required to log in.",
      });
    }

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({
        status: "Failure",
        message: "User does not exists",
      });
    }

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        "secretKey",
        {
          expiresIn: "7d",
        },
      );

      return res.status(201).json({
        status: "Success",
        message: "User logged in successfully.",
        user,
        token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signin failed",
    });
  }
}



async function updateDetails(req, res) {
  try {
    const { firstName, lastName, username,password } = req.body;
    const user=await userModel.findOne({_id:req.user.id})
  console.log(user)
    if(!user){
      return res.status(201).json({
          status:false,
          message:"Cannot find the user"
      })
    }
  
const updatedData={
  firstName, lastName, username
}


if(password){
  const newHashPassword=await bcrypt.hash(password,10)
  updatedData.password=newHashPassword
}

  const details=await userModel.findbyIdAndUpdate(
    req.user.id,
    updatedData,
    {new:true}
  )
  return res.status(201).json({
    status:true,
    message:"User details updated.",
    data:details
  })



  } catch (error) {
    console.error("Error in updating user details",error)
    return res.status(401).json({
      status:false,
      message:"Failed to update user details"
    })
  }

}


async function getUsers(req,res) {
  try {
    const users=await userModel.find().select("firstName lastName username")
  
    if(!users){
      return res.status(403).json({
        status:false,
        message:"No user exists"
      })
    }
  
  return res.status(201).json({
    status:true,
    message:"Fetched all the users",
    users
  })

  } catch (error) {
    console.error("Error in fetching users",error)
    return res.status(501).json({
      status:false,
      message:"Error in fetching the users."
    })
  }

}

module.exports = {
  signup,
  signin,
  updateDetails,
  getUsers
};
