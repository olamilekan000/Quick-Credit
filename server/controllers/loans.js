import { allLoans } from '../mock-data/loans.data.js' 

class Loans {
	static async apply (req, res, next) {
		try {

			req.body.createdOn = new Date().toDateString()

			return res.status(200).json({
				data: req.body
			})			
		} catch(err) {
			next(err)
		}
	}	
}

export default Loans
