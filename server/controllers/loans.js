import { allLoans } from '../mock-data/loans.data.js' 

class Loans {
	static async apply(req, res, next) {
		try {

			req.body.createdOn = new Date().toDateString()

			return res.status(200).json({
				data: req.body
			})			
		} catch(err) {
			next(err)
		}
	}

	static approveOrReject(req, res, next) {
		try {
			const {id} = req.params

			let aloan = allLoans.find(loan => {
				return loan.id === id
			})

			aloan.status = req.body.status
			return res.status(200).json({
				data: aloan
			})				
		} catch(err) {
			next(err)
		}
	}

	static getALoan(req, res, next) {
		try {
			const {id} = req.params

			let aloan = allLoans.find(loan => {
				return loan.id === id
			})
			
			return res.status(200).json({
				data: aloan
			})				
		} catch(err) {
			next(err)
		}		
	} 
}

export default Loans
