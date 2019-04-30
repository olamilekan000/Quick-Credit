import { Router } from 'express';

import User from '../controllers/users';
import { checkVals } from '../middlewares/checkInputVals';

const router = Router();

router.route('/auth/signup')
  .post(checkVals, User.signUp);

router.route('/auth/signin')
  .post(checkVals, User.signIn);


export default router;
