import prisma from "../../../prisma";

export default async function handler(req, res) {
  // req.query: u_email -> email

  /**
   * @description Setup account profile
   */
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const profile = await prisma.profile.findUnique({ where: { email } });
      let username, oldUser;
      if (profile) {
        username = req.body.username;
        delete req.body.username;
        delete req.body.email;
      } else {
        oldUser = await prisma.user.findUnique({ where: { email } });
        console.log(oldUser);
      }
      await prisma.profile.upsert({
        where: { email },
        update: { ...req.body },
        create: {
          username,
          email,
          userId: oldUser.id,
          ...req.body
        }
      });
      return res.redirect("/");
    } catch (err) {
      console.log(err);
      return res.json({ success: false, message: err.message });
    }
  } else {
    // GET - list profiles with pagination
    // console.log(req.query);
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    try {
      const users = await prisma.profile.findMany({
        skip: offset,
        take: limit,
        select: {
        userId: true, 
        bio: true,
        job_title: true,
        fullName: true,
        user: {
          select: {
            image: true,
            Skill: true,
            _count: {
              select: {
                endorsements: true
              }
            }
          }
        }
      } });
      return res.json({ success: true, data: users });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, message: err.message });
    }
  }
}