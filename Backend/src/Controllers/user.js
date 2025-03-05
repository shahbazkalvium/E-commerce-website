const {Router}= require("express");
const userModel = require("../Model/userModel");

const router = Router();


router.post("/create-user",upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }
const filename = req.file.filename ;
const fileUrl = path.join(filename);
const user={
    name:name,
    email:email,
    password:password,
    avatar: fileUrl,
} ;
console.log(user);
});

userrouter.post('/add-address', async (req, res) => {
    try {
      const {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
        email
      } = req.body;
      const user = await userModel.findOne({ email: email });
      const newaddress = {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType
      };
      user.addresses.push(newaddress);
      await user.save();
      res.status(200).json({ message: "Address added successfully" });
    } catch (err) {
      console.log("error in adding address", err);
      res.status(500).json({ message: "Error in adding address" });
    }
  });
  
module.exports = router;