import prisma from "../../../prisma";

export default async function handler(req, res) {
  // req.query: u_email
  if (req.method === "GET") {
    // Return a user
    const { u_email: email } = req.query;
    let user = await prisma.profile.findUnique({ where: { email } });
    if(!user) user = {};
    else {
      const skills = await prisma.skill.findMany({ where: { userId: user.userId }});
      user.skills = skills;
    }
    return res.json(user);
  }
}