function randIndex(n)
{
	return Math.floor(Math.random()*n);
}

function generate(length)
{
	let password = "";

	const symbols = ['!','@','#','$','£','%','^','&','*','(',')','-','_','=','+','{','}','[',']','|',';',':',',','.','<','>','/','?'];
	
	const numbers = [];
	for(let i=48 ; i<58 ; i++)
	{
		let ch = String.fromCharCode(i);
		numbers.push(ch);
	}

	const alphabets = [];
	for(let i=97 ; i<123 ; i++)
	{
		let ch = String.fromCharCode(i);
		alphabets.push(ch);
	}

	const Alphabets = [];
	for(let i=65 ; i<91 ; i++)
	{
		let ch = String.fromCharCode(i);
		Alphabets.push(ch);
	}

	const charset = [symbols,numbers,alphabets,Alphabets];	

	password+=symbols[randIndex(symbols.length)];
	length--;
	while(length>0)
	{
		const temp = Array.from(charset[randIndex(4)]); 
		password+=temp[randIndex(temp.length)];
		length--;
	}
	
	return password; 
}
function display()
{
	var val=document.getElementById("in").value;
	var pass;
	if(val>=15)
	{
		pass=generate(parseInt(val))
	} 
	else
	{
		pass="<font color='#FF0000'>Length Must Be Atleast 15!</font>"
	}	
	document.getElementById("out").innerHTML=pass;
}