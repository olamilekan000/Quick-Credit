import { Router } from 'express';

import User from '../controllers/users';
import { checkVals } from '../middlewares/checkInputVals';
import { checkIfAdmin } from '../middlewares/authorizeUser';

const router = Router();

router.route('/auth/signup')
  .post(checkVals, User.signUp);

router.route('/auth/signin')
  .post(checkVals, User.signIn);

router.route('/users/:email/verify')
  .patch(checkIfAdmin, checkVals, User.verifyUser);

export default router;
