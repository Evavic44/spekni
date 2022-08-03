import prisma from "../../../prisma";

export default async function handler(req, res) {
  // req.query: u_id -> userId, f_ui -> from_userId
  if (req.method === "POST") {
    // Make an endorsement
    const body = JSON.parse(req.body.data);
    const { u_id, f_uid: f_email, skill_id } = body;
    try {
      const endorsingUser = await prisma.profile.findUnique({ where: { email: f_email }, select: { userId: true }});
      if(!endorsingUser) return res.json({ success: false, message: "Please setup profile first", noAccount: true })
      if(u_id === endorsingUser.userId) return res.status(400).json({ success: false, message: "You can not endorse yourself" });
      const oldEndorsement = await prisma.endorsement.findFirst({
        where: {
          skillId: skill_id,
          fromUserId: endorsingUser.userId
        }
      });
      if(oldEndorsement) return res.status(400).json({ success: false, message: "You can't endorse more than once"})
      await prisma.endorsement.create({
        data: {
          userId: u_id,
          fromUserId: endorsingUser.userId,
          skillId: skill_id
        }
      });
      // console.log(endorsement);
      return res.json({ success: true, message: `Successfully endorsed user ${u_id} on skill with id ${skill_id}` });
    } catch (error) {
      // console.log(error);
      return res.status(500).send("Server Error");
    }
  }
}