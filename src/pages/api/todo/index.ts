import { apiStatusCodes } from "@/contants";
import Todo from "@/database/models/Todo";
import { connectDB, router, routerHandler } from "@/middleware/api";
import { sendAPIResponse } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

// Add a Todo Items
const addTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    return res.status(apiStatusCodes.RESOURCE_CREATED).json(
      sendAPIResponse({
        status: true,
        message: "Todo added",
        data: newTodo,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Server Error",
        error,
      })
    );
  }
};

// Get all Todo item

const getAllTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todos = await Todo.find({});

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: "Todos fetched successfully",
        data: todos,
      })
    );
  } catch (error) {
    console.log( error );
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Server Error",
        error,
      })
    )
  }
}

router.use(connectDB).post(addTodo).get(getAllTodo);

export default routerHandler;
