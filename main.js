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