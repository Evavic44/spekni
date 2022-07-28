import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { u_id } = req.query; // u_id -> userId
  if (req.method === "GET") {
    // Get skills
    try {
      const skills = await prisma.skill.findMany({ where: { userId: u_id }, select: { userId: false, skillName: true, endorsements: { select: { fromUserId: true, id: true, endorsers: true }} } });
      return res.json({ success: true, skills });
    } catch (error) {
      console.log(error);
      return res.send("Server Error");
    }
  }
}