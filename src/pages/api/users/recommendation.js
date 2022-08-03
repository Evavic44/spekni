import prisma from "../../../prisma";


export default async function handler(req, res) {
  if(req.method === "POST") {
    // Add new recommendation
    try {
      const recommender = await prisma.user.findUnique({ where: { email: req.body.recommenderEmail }});
      if(recommender.id == req.body.recommendeeID) return res.status(400).json({ success: false, message: "You can't recommend yourself" });
      await prisma.recommendation.create({
        data: {
          userId: req.body.recommendeeID,
          fromUserId: recommender.id,
          summary: req.body.summary
        }
      });
      return res.json({ success: true, message: "Recommendation successful" });
    } catch (err) {
      // console.log(err);
      return res.status(400).json({ success: false, message: "Recommendation unsuccessful" });
    }
  } else if(req.method === "GET") {
    // Get recommendations
    try {
      const recommendations = await prisma.recommendation.findMany({ where: { userId: req.query.u_id }, include: { user: true } });
      return res.json(recommendations || []);
    } catch (err) {
      // console.log(err);
      return res.status(500).json([])
    }
  }
}