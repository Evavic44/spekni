import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if(req.method === "POST") {
    return res.send("This is a post request for the user");
  } else {
    return res.send("This is a get request for the user");
  }
}