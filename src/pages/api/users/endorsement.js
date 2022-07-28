import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { u_id, f_uid } = req.query; // u_id -> userId, f_ui -> from_userId
  if (req.method === "POST") {
    // Make an endorsement
    try {
      // const skills = await prisma.skill.findMany({ where: { userId: u_id }, select: { userId: false, skillName: true, endorsements: { select: { fromUserId: true, id: true, endorsers: true }} } });
      return res.json({ success: true, message: `Successfully endorsed ${u_id}` });
    } catch (error) {
      console.log(error);
      return res.send("Server Error");
    }
  }
}