import { Router } from 'express';

import User from '../controllers/users';
import { checkVals } from '../middlewares/checkInputVals';

const router = Router();

router.route('/auth/signup')
  .post(checkVals, User.signUp);


export default router;
