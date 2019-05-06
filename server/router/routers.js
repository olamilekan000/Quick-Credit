import { Router } from 'express';

import User from '../controllers/users';
import Loans from '../controllers/loans'
import { checkVals } from '../middlewares/checkInputVals';
import { checkIfAdmin, checkIfUserOrAdmin } from '../middlewares/authorizeUser';

const router = Router();

router.route('/auth/signup')
  .post(checkVals, User.signUp);

router.route('/auth/signin')
  .post(checkVals, User.signIn);

router.route('/users/:email/verify')
  .patch(checkIfAdmin, checkVals, User.verifyUser);

router.route('/loans')
  .post(checkIfUserOrAdmin, Loans.apply);  

export default router;
