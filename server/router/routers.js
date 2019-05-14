import { Router } from 'express';

import User from '../controllers/users';
import Loans from '../controllers/loans';
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
	.get(checkIfUserOrAdmin, Loans.getAllLoans)
  .post(checkIfUserOrAdmin, Loans.apply);

router.route('/loans/:id')
	.get(checkIfUserOrAdmin, Loans.getALoan)
  .post(checkIfUserOrAdmin, Loans.approveOrReject);
  

export default router;
