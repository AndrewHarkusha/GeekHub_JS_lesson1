		function start(x)
		{
			
			if (x > 0) {
				console.log("Good digit");
			} else{
				console.error("Error. Digit less then 1");
			}
			alert(x);
		}
		
		test = function()
		{
		var sign = "#";
		for (var i = 0; i <= 7; i++)
			{
				console.log(sign + "<br>");
				sign = sign + "#";
			}
		}	