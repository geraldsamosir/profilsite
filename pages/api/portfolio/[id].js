import nextConnect from 'next-connect';
import BehanceService  from  '../../../services/behance';

const handler = nextConnect()
  .get(async (req, res) => {
    const portfolio = await BehanceService.getProjectByid(req.query.id)
    res.statusCode = 200;
    return res.json({ status: 'success', data: portfolio });
  });

export default handler;

