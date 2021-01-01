let operators = /[*+-/]/;
let numbers=/[0-9]/;
var state = "S1";
var result = 0.0;
var operator="";
var input = "";
function readInput(c){
		switch (state) {
		case "S1":
			return s1(c);
		case "S2":
			return s2(c);
		case "S3":
			return s3(c);
		case "S4":
			return s4(c);
		case "S5":
			return s5(c);
		}
		return null;
}
function s1( c) {
		if (c == 'C' || c == '=') {
			state = "S1";
			return 0.0;
		} else if (numbers.test(c) || c == '.') {
			state = "S2";
			input += c;
			return Number(input);
		} else if (operators.test(c)) {
			state = "S3";
			operator = c;
			return 0.0;
		}
        return 0.0;
}
function s2(c) {
		if (c == 'C') {
			state = "S1";
			result = 0.0;
			input = "";
			return 0.0;
		} else if (numbers.test(c) || c == '.') {
			state = "S2";
			if (c == '.' && input.indexOf(".") == -1)
				input += c;
			else if (c != '.')
				input += c;
			return Number(input);
		} else if (c == '=') {
			state = "S4";
			result = Number(input);
			return result;
		} else if (operators.test(c)) {
			state = "S3";
			result = Number(input);
			input = "";
			operator = c;
			return result;
		}
		return 0.0;
}
function s3(c) {
		if (c == 'C') {
			state = "S1";
			result = 0.0;
			input = "";
			return 0.0;
		} else if (numbers.test(c) || c == '.') {
			state = "S3";
			if (c == '.' && input.indexOf(".") == -1)
				input += c;
			else if (c != '.')
				input += c;
			return Number(input);
		} else if (c == '=') {
			state = "S4";
			switch (operator) {
			case '+':
				result += Number(input);
				break;
			case '-':
				result -= Number(input);
				break;
			case '*':
				result *= Number(input);
				break;
			case '/':
				result /= Number(input);
				break;
			}
			input = "";
			return result;
		} else if (operators.test(c)) {
			state = "S5";
			switch (operator) {
			case '+':
				result += Number(input);
				break;
			case '-':
				result -= Number(input);
				break;
			case '*':
				result *= Number(input);
				break;
			case '/':
				result /= Number(input);
				break;
			}
			input = "";
			operator = c;
			return result;
		}
		return 0.0;
}
function s4(c) {
		if (c == 'C') {
			state = "S1";
			result = 0.0;
			input = "";
			return 0.0;
		} else if (numbers.test(c) || c == '.') {
			state="S2";
			result = 0.0;
			input = "";
			input += c;
			return Number(input);
		} else if (c == '=') {
			state="S4";
		} else if (operators.test(c)) {
			state="S3";
			input = "";
			operator = c;
			return 0.0;
		}
		return result;
}
function s5(c) {
		if (c == 'C') {
			state = "S1";
			result = 0.0;
			input = "";
			return 0.0;
		} else if (numbers.test(c) || c == '.') {
			state = "S3";
			input += c;
			return Number(input);
		} else if (c == '=') {
			state = "S4";
			switch (operator) {
			case '+':
				result += Number(input);
				break;
			case '-':
				result -= Number(input);
				break;
			case '*':
				result *= Number(input);
				break;
			case '/':
				result /= Number(input);
				break;
			}
			input = "";
			return result;
		} else if (operators.test(c) >= 0) {
			state = "S5";
			switch (operator) {
			case '+':
				result += Number(input);
				break;
			case '-':
				result -= Number(input);
				break;
			case '*':
				result *= Number(input);
				break;
			case '/':
				result /= Number(input);
				break;
			}
			input = "";
			operator = c;
			return result;
		}
		return result;
}
export default readInput