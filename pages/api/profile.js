import nextConnect from 'next-connect';
import profiledata  from  '../../db/profile';
const handler = nextConnect()
  .get(async (req, res) => {
    const profile =  profiledata()
    res.statusCode = 200;
    return res.json({ status: 'success', data: profile });
  });

export default handler;
