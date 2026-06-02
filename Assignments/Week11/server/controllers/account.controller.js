const accountModel = require("../model/account.model");
const userModel = require("../model/user.model");
const mongoose=require("mongoose")

async function balance(req, res) {
  try {
    const account = await accountModel.findOne({ userId: req.user.id });

    if (!account) {
      return res.status(402).json({
        status: false,
        message: "Account not found",
      });
    }

    return res.status(201).json({
      status: true,
      message: "Successfully fetched account balance",
      balance: account.balance,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Error in fetching balance",
    });
  }
}

async function transfer(req, res) {
  const { accountId, amount } = req.body;
  if (!accountId || !amount) {
    return res.status(401).json({
      status: false,
      message: "Receivers account and amount are  required. ",
    });
  }
  if (amount <= 0) {
    return res.status(401).json({
      status: false,
      message: "Amount should be more than 0",
    });
  }
  const senderAccount = await accountModel.findOne({ userId: req.user.id });
  const receiverAccount = await accountModel.findOne({ _id: accountId });

console.log("s",senderAccount,"R",receiverAccount)
  if (senderAccount._id == receiverAccount._id) {
    return res.status(401).json({
      status: false,
      message: "Sender and Receiver account must be different.",
    })
  }

  if (!receiverAccount) {
    return res.status(401).json({
      success: false,
      message: "Receiver Account not found",
    });
  }

  if (!senderAccount) {
    return res.status(400).json({
      status: false,
      message: "Sender account not found",
    });
  } else {
    if (senderAccount.balance < amount) {
      return res.status(401).json({
        status: false,
        message: "Insufficient balance",
      });
    }
  }

  const session =await mongoose.startSession()

  await session.startTransaction()

 try {
   senderAccount.balance-=amount
   receiverAccount.balance+=amount
 await senderAccount.save({session})
 await receiverAccount.save({session})
 await session.commitTransaction()
 return res.status(201).json({
  success:true,
  message:"Transaction was successfull"

 })
 
 } catch (error) {
  console.error(error)
  await session.abortTransaction()
   return res.status(401).json({
  success:false,
  message:"Transaction was failure"
 })

 } finally{
  await session.endSession()
 }

}

async function fetchAccounts(req,res){
  
const account=await accountModel.findOne({userId})
}

module.exports = { balance, transfer,fetchAccounts };
