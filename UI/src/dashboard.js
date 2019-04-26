import'../styles/index.css';

const LoansNFP = document.getElementById('LoansNFP')
const LoansFP = document.getElementById('LoansFP')
const postRepayment = document.getElementById('postRepayment')

LoansNFP.addEventListener('click', (event) => {
	event.preventDefault()
	window.location = 'loans-nfp.html'
})

LoansFP.addEventListener('click', (event) => {
	event.preventDefault()
	window.location = 'loans-fp.html'
})

postRepayment.addEventListener('click', (event) => {
	event.preventDefault()
	window.location = 'post-repayment.html'
})
