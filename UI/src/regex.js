const regexPatterns = {
	email: /^[a-z]+@(yahoo|gmail|hotmail).(com|co)(.[\w]{2,3})?$/,
	phoneNumber: /^((080|090|070)[^0124][0-9]{7}|01[\d]{7})$/,
	password: /^[^@_]{6,}$/,
}

export default regexPatterns
