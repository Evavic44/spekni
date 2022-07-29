import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import prisma from "../../../prisma";

export default async function handler(req, res) {
  // req.query: u_email -> email

  /**
   * @description Setup account profile
   */
  if (req.method === "POST") {
    console.log(req.body);
    const { bio, job_title, githubLink, username, portfolioLink, twitterLink, linkedinLink, fullName, email } = req.body;
    try {
      const profile = await prisma.profile.findUnique({ where: { email } });
      let username, oldUser;
      if (profile) {
        username = req.body.username;
        delete req.body.username;
        delete req.body.email
      } else {
        oldUser = await prisma.user.findUnique({ where: { email }});
        console.log(oldUser);
      }
      const upsertProfile = await prisma.profile.upsert({
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
  }
}