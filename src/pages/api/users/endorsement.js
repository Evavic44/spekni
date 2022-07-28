import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // const { u_id, f_uid } = req.query; // u_id -> userId, f_ui -> from_userId
  if (req.method === "POST") {
    // Make an endorsement
    const body = JSON.parse(req.body.data);
    const { u_id, f_uid: f_email, skill_id } = body;
    try {
      const endorsingUser = await prisma.profile.findUnique({ where: { email: f_email }, select: { userId: true }});
      if(u_id === endorsingUser.userId) return res.status(400).json({ success: false, message: "You can not endorse yourself" });
      const endorsement = await prisma.endorsement.create({
        data: {
          userId: u_id,
          fromUserId: endorsingUser.userId,
          skillId: skill_id
        }
      });
      console.log(endorsement);
      return res.json({ success: true, message: `Successfully endorsed user ${u_id} on skill with id ${skill_id}` });
    } catch (error) {
      console.log(error);
      return res.send("Server Error");
    }
  }
}