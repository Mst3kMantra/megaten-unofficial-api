export {};
const asyncHandler = require("express-async-handler");

const getDemonList = asyncHandler(
  async (req: any, res: { send: (arg0: string) => void }, next: any) => {
    res.send("NOT IMPLEMENTED");
  }
);
