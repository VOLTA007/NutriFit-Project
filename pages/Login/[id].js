import { createRouter } from "next-connect";
import dbConnect from "@/utils/dbConnectLogin";
import User from "@/models/User";


dbConnect();


const router = createRouter().delete(async (req, res) => {
    try {
        const loginPass = await User.findOneAndDelete({_id: req.query.id});
        res.status(200).json(loginPass);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}).put(async (req, res) => {

try {
    const post = await User.findOne({_id: req.query.id})
    post.title = req.body.title
    post.details= req.body.details
    post.user= req.body.user 
    post.age= req.body.agd
    await post.save()
    res.send('updated !')

}catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}

})


export default router.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
  });
