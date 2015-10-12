		function start(x)
		{
			
			if (x > 0) {
				console.log("Good digit");
				confirm("Are you sure?");
			} else{
				throw new Error("Error. Digit less then 1");
			}
			alert(x);
		}
		
		function even(x)
		{
			var i = 0;
			while (i<=x){
				console.log(i+',');
				i = i + 2;
			}
		}
		
		function degree2(x)
		{
			var result = 1;
			for(var i = 0; i < x; i = i + 1){
				result = result * 2;
			}
			console.log('2^'+x+' = '+result);
		}
		
		function triangeleFromSharp(x){
			var sign = '#';
			for(var i=1;i<=x;i++){
				console.log(sign);
				sign=sign+'#';
			}
		}
		
		function fizzBuzz(x){
			for(var i = 1; i<=x; i++){
				if ((i%3==0)&&(i%5==0)){
					console.log('FizzBuzz');
				}else if (i%3==0){
					console.log('Fizz');
				}else if (i%5==0){
					console.log('Buzz');
				}else{
					console.log(i);
				}
				
				
			}
		}
		
		function chessBoard(x){
			blackOrWhite = 0;
			str = "";
			for(var i=1; i<=x; i++){
				for(var j=1; j<=x; j++){
					if (blackOrWhite == 0){
					    str = str + "#";
						blackOrWhite = 1;
					} else{
						str = str + " ";
						blackOrWhite = 0;
					}	
					
				}
				console.log(str);
				str = "";
				if (blackOrWhite == 0){
					blackOrWhite = 1;
				}else{
					blackOrWhite = 0;
				}
			}
			
		}