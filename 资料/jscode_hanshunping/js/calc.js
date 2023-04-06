
function calc(num1,num2,opear){

	var res = 0;
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	switch(opear){
		case '+':
			res = num1 + num2;
			break;
		case '-':
			res = num1 - num2;
			break;
		case '*':
			res = num1 * num2;
			break;
		case '/':
			res = num1 / num2;
			break;
		default:
			window.alert("请输入运算符");	
	}
	document.write("res = " + res);
	// return res;
}

function params(){
	var params_len = arguments.length;
	for(var i = 0; i < params_len; i++){
		window.alert(arguments[i]);
	}
}