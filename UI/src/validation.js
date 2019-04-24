import regexPatterns from './regex.js';

const validateFields = (inputField, regexPattern) => {
	if (regexPattern.test(inputField.value)) {
		switch (inputField.name) {
			case 'email':
				let validateEmail = document.getElementById('errEmail')
				validateEmail.style.display = 'none'
				break;
			case 'password':
				let validatePwd = document.getElementById('errPwd')
				validatePwd.style.display = 'none'
				break;					
			default:
				// statements_def
				break;
		}		
	}else {
		switch (inputField.name) {
			case 'email':
				let validateEmail = document.getElementById('errEmail')
				validateEmail.style.display = 'block'
				break;
			case 'password':
				let validatePwd = document.getElementById('errPwd')
				validatePwd.style.display = 'block'
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
