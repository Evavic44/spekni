import prisma from "../../../prisma";

// Get computed value of users endorsements
const getEndorsements = usersObject => {
  usersObject.forEach(({user}) => {
    user.endorsements = 0;
    user.Skill.forEach(skill => user.endorsements += skill._count.endorsements)
  });
}

export default async function handler(req, res) {
  // req.query: u_email -> email

  /**
   * @description Setup account profile
   */
  if (req.method === "POST") {
    const { email } = req.body;
    const skills = Array.from(req.body.skills);
    console.log("Skills: ", skills);
    delete req.body.skills;
    try {
      const profile = await prisma.profile.findUnique({ where: { email } });
      let username, oldUser;
      if (profile) {
        username = req.body.username;
        delete req.body.username;
        delete req.body.email;
      } else {
        oldUser = await prisma.user.findUnique({ where: { email } });
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
            Skill: {
              select: {
                skillName: true,
                id: true,
                _count: {
                  select: {
                    endorsements: true
                  }
                }
              }
            },
            _count: {
              select: {
                Skill: true
              }
            }
          }
        }
      } });
      // make endorsements a computed value
      if(users) getEndorsements(users);
      return res.json({ success: true, data: users });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, message: err.message });
    }
  }
}