import prisma from "../../../prisma";

// Get computed value of users endorsements
const getEndorsements = usersObject => {
  usersObject.forEach(({ user }) => {
    user.endorsements = 0;
    user.Skill.forEach(skill => user.endorsements += skill._count.endorsements);
  });
};

export default async function handler(req, res) {
  // req.query: u_email -> email

  /**
   * @description Setup account profile
   */
  if (req.method === "POST") {
    const { email } = req.body;
    const skills = Array.from(req.body.skills);
    const skillIds = Array.from(req.body.skillIds || []);
    delete req.body.skillIds;
    delete req.body.skills;
    try {
      const profile = await prisma.profile.findUnique({ where: { email } });
      let username;
      if (profile) {
        username = req.body.username;
        delete req.body.username;
        delete req.body.email;
        await prisma.profile.update({
          where: {
            email
          },
          data: req.body
        });

        skills.forEach(async (skill, idx) => {
          await prisma.skill.update({
            where: {
              id: Number(skillIds[idx])
            },
            data: {
              skillName: skill
            }
          });
        });
        
        return res.redirect("/account");
      } else {
        const oldUser = await prisma.user.findUnique({ where: { email } });
        if(!oldUser) return res.status(400).json({ success: false, message: "Please contact the webmaster." });
        req.body.userId = oldUser.id;
        await prisma.profile.create({
          data: req.body,
        });
        // Add skills
        await prisma.skill.createMany({
          data: skills.map(skill => {
            return {
              skillName: skill.trim(),
              userId: oldUser.id,
            }
          }),
          skipDuplicates: true,
        });
        return res.redirect("/account");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).redirect("/error");
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
          username: true,
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
        }
      });
      // make endorsements a computed value
      if (users) getEndorsements(users);
      return res.json({ success: true, data: users });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, message: err.message });
    }
  }
}