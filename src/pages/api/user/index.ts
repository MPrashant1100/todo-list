import { apiStatusCodes } from "@/contants";
import User from "@/database/models/User";
import { connectDB, router, routerHandler } from "@/middleware/api";
import { sendAPIResponse } from "@/utils";
import { setDefaultAutoSelectFamily } from "net";
import { NextApiRequest, NextApiResponse } from "next";

// Add a user
const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, contact } = req.body;

    const newUser = new User({
      firstName,
      contact,
    });
    await newUser.save();

    console.log("working");
    return res.status(apiStatusCodes.RESOURCE_CREATED).json(
      sendAPIResponse({
        status: true,
        message: "User added ",
        data: newUser,
      })
    );
  } catch (error) {
    console.error(error);
    return res
      .status(apiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(sendAPIResponse({ status: false, message: "Server error", error }));
  }
};

// Get All user
const getAllUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await User.find({});
    return res.status(apiStatusCodes.RESOURCE_CREATED).json(
      sendAPIResponse({
        status: true,
        message: "User available",
        data: users,
      })
    );
  } catch (error) {
    console.error(error);
    return res
      .status(apiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(sendAPIResponse({ status: false, message: "Server error", error }));
  }
};

// Get a user by ID
const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await User.findById(req.query.id);
    if (!user) {
      return res
        .status(apiStatusCodes.NOT_FOUND)
        .json(sendAPIResponse({ status: false, message: "User Not Found" }));
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: "User found",
        data: user,
      })
    );
  } catch (error) {
    console.error(error);
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Server error",
        error,
      })
    );
  }
};

// Update user by ID

const updateUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, contact } = req.body;
    const user = await User.findByIdAndUpdate(
      req.query.id,
      { firstName, contact },
      { new: true }
    );

    if (!user) {
      return res
        .status(apiStatusCodes.NOT_FOUND)
        .json(sendAPIResponse({ status: false, message: "User not Found" }));
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: "User updated",
        data: user,
      })
    );
  } catch (error) {
    console.error(error);
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Server error",
        error,
      })
    );
  }
};
router
  .use(connectDB)
  .post(addUser)
  .get(getAllUser)
  .get('/user/:id', getUserById)
  .put('/user/:id', updateUserById);

export default routerHandler;
