import nextConnect from 'next-connect';
import jobsdata  from  '../../db/jobs';
const handler = nextConnect()
  .get(async (req, res) => {
    const listMyjob =  jobsdata()
    res.statusCode = 200;
    return res.json({ status: 'success', data: listMyjob });
  });

export default handler;
