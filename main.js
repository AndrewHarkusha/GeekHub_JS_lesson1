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
		
