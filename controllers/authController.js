const User = require("../Model/user");

var passwordHash = require("password-hash");


const login = (req, res) => {
    const body = req.body;
    // console.log("body", body);
    User.findOne({ email: body.email })
      .then((user) => {
        if (user) {
          const isValidPassword = passwordHash.verify(
            body.password,
            user.password
          );
  
          if (isValidPassword) {
            res.send({
              message: "Login successfully!!",
              user: user,
            });
          } else {
            res.send({
              message: "Invalid password please enter valid password!!",
            });
          }
        } else {
          res.status(500).send({
            message: "User not found, please signup first",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  
const signup = (req, res) => {
    const body = req.body;
  
    const hashedPassword = passwordHash.generate(body.password);
  
    const newUser = new User({
      email: body.email,
      password: hashedPassword,
      name: body.name,
      age: body?.age,
      category: body.category,
      contact: body?.contact,
      address: body?.address,
      bio: body?.bio,
      profile: body?.profile
    });
  
    newUser
      .save()
      .then((user) => {
        console.log("user", user);
        res.send({
          message: "Signup Successfully",
          user,
        });
      })
      .catch((err) => {
        console.log("err", err);
        if (err?.message?.includes("duplicate key")) {
          res.status(500).send({
            message: "User already exist please try with another email!",
          });
        } else {
          res.status(500).send({
            message: err.message,
            error: err,
          });
        }
      });
  };
  const updateProfile =(req, res)=> {
    const userId = req.params.userId;
    const updatedData = req.body;  // Make sure you can receive the updated data
  
    // Logic to update the user profile in the database
    User.findByIdAndUpdate(userId, updatedData, { new: true })
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.status(400).send({ message: "Error updating profile", err }));
  };


  const  getUsersByIds =  async (req, res) => {
  // app.post('/user/getUsersByIds',
    const { userIds } = req.body;
    try {
      const users = await User.find({ _id: { $in: userIds } });
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user details', error });
    }
  };


  const getAllUsers = (req, res) => {
    // Fetch all users from the database
    User.find({})
      .then((users) => {
        res.json(users); // Return all users as JSON response
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error fetching all users', error })
      });
  };


     
  const deleteUser =  (req, res) => {
    const userId = req.params.id;
  
    // Find the user by ID and delete it
    User.findByIdAndDelete(userId)
      .then(deletedUser => {
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user', error });
      });
  };
  
module.exports = { login, signup, updateProfile, getUsersByIds, getAllUsers, deleteUser };
