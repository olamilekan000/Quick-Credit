import'../styles/index.css';

import regexPatterns from './regex.js'

const initResetPwd = document.querySelector('input')
const initResetConfirmPwd = document.querySelector('#input-field-pwd2')

initResetPwd.addEventListener('keyup', (e) => {
	let validatePwd = document.getElementById('errPwd')

	if (!regexPatterns.password.test(e.target.value)) {
		validatePwd.style.display = 'block'
	}else {
		validatePwd.style.display = 'none'		
	}
})

initResetConfirmPwd.addEventListener('keyup', (e) => {
	let validatePwd = document.getElementById('errPwd2')

	if (
		initResetPwd.value !==
		e.target.value
	) {
		validatePwd.style.display = 'block'
	}else {
		validatePwd.style.display = 'none'		
	}
})
