import dbConnectLogin from '@/utils/dbConnectLogin';
import UserLogin from '@/models/UserLogin';


dbConnectLogin();


export default async function handler(req, res) {
    const { email } = req.query;

    try {
        const user = await UserLogin.findOne({ email });
        if (user) {
            const { is_subscribed } = user;
            res.status(200).json({ is_subscribed });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
  }