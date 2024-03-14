import { NextApiRequest, NextApiResponse } from "next";
import { courseSampleData } from "../../../utils/course-sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(courseSampleData)) {
      throw new Error("Cannot find user data");
    }
    res.status(200).json(courseSampleData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
