import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { apiStatusCodes } from "@/contants";
import { sendAPIResponse } from "@/utils";
import connectToDatabase from "@/database/connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

const routerHandler = router.handler({
  onError: (error: any, req, res) => {
    return res
      .status(apiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        sendAPIResponse({ status: false, message: "Some router error", error })
      );
  },
});

// Connect to DB
const connectDB = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  try {
    await connectToDatabase();
    console.log("DB Connected")
  } catch (error) {
    return res
      .status(apiStatusCodes.INTERNAL_SERVER_ERROR)
      .json(sendAPIResponse({ status: false, message: "DB error", error }));
  }
  next();
};
export { router, routerHandler, connectDB };
