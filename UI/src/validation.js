import regexPatterns from './regex.js';

const validateFields = (inputField, regexPattern) => {
	let validateEmail = document.getElementById('errEmail')
	let validatePwd = document.getElementById('errPwd')
	let validatePhonenumber = document.getElementById('errPhoneNum')

	if (regexPattern.test(inputField.value)) {
		switch (inputField.name) {
			case 'email':
				validateEmail.style.display = 'none'
				break;
			case 'password':
				validatePwd.style.display = 'none'
				break;
			case 'phoneNumber':
				validatePhonenumber.style.display = 'none'
				break;					
			default:
				// statements_def
				break;
		}		
	}else {
		switch (inputField.name) {
			case 'email':
				validateEmail.style.display = 'block'
				break;
			case 'password':
				validatePwd.style.display = 'block'
				break;
			case 'phoneNumber':
				validatePhonenumber.style.display = 'block'
				break;									
			default:
				// statements_def
				break;
		}
	}
}

const validateInputFields = document.querySelectorAll('input#validate')

validateInputFields.forEach((inputField) => {
	inputField.addEventListener('keyup', (event) => {
		validateFields(
			event.target,
			regexPatterns[event.target.name]
		)
	})
})

export default validateFields;
