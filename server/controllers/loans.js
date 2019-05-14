import { allLoans } from '../mock-data/loans.data';

class Loans {
  static async apply(req, res, next) {
    try {
      req.body.createdOn = new Date().toDateString();

      return res.status(200).json({
        data: req.body,
      });
    } catch (err) {
      next(err);
    }
  }

  static approveOrReject(req, res, next) {
    try {
      const { id } = req.params;

      const aloan = allLoans.find(loan => loan.id === id);

      aloan.status = req.body.status;
      return res.status(200).json({
        data: aloan,
      });
    } catch (err) {
      next(err);
    }
  }

  static getALoan(req, res, next) {
    try {
      const { id } = req.params;

      const aloan = allLoans.find(loan => loan.id === id);

      return res.status(200).json({
        data: aloan,
      });
    } catch (err) {
      next(err);
    }
  }

  static getAllLoans(req, res, next) {
    try {
      return res.status(200).json({
        data: allLoans,
      });
    } catch (err) {
      next(err);
    }
  }

  static createLoanRepayment(req, res, next) {
    try {
      const { loanId } = req.params

      let findLoan = allLoans.find(loan => {
        return loan.id === loanId
      })

      findLoan.repaymentId = Math.random()

      return res.status(200).json({
        data: findLoan,
      });
    } catch(err) {
      next(err)
    }
  }

}

export default Loans;
