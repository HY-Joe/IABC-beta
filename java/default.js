
var data;



for (var i = 1; i <= 2; i++ ) { // comicnumber
	var modeName = sessiongetItem("mode1");
	console.log("de >>> " + data);
		var fileName = data;
		fileName += i;
		console.log(fileName);
		if (i == 1) { 
			for (var j = 1; j <= 3; j++ ) { // mode

				if ( j == 1 ) {	// panel
					sessiongetItem(fileName);
					console.log(fileName);
					var getName = data;
					console.log(" j1 > " +getName);

					//var x = data;
					//alert(x);
					if(data == null || data == "undefined"){
						sessionsetItem('panel1', 1);	
						sessiongetItem('panel1');	
						console.log(" j1 >> " +data);
					} else {
						sessiongetItem('panel1');
						// return null;
					}
				} else if ( j == 2 ) { // scrip
					sessiongetItem(fileName);
					console.log(" j2 > " +data);

					if(data == null || data == "undefined"){
						sessionsetItem('strip1', 1);	
						sessiongetItem('strip1');	
						console.log(" j2 >> " +data);
					} else{
						sessiongetItem('strip1');	
						//return null;
					}
				} else if ( j == 3 ) { // page
					sessiongetItem(fileName);
					console.log(" j3 > " +data);

					if(data == null || data == "undefined"){
						sessionsetItem('page1', 1);	
						sessiongetItem('page1');	
						console.log(" j3 >> " +data);
					} else {
						sessiongetItem('page1');	
						// return null;
					}
				}
			}
		} else if (i == 2) { 
			for (var j = 1; j <= 3; j++ ) { // mode

				if ( j == 1 ) {	// panel
					sessiongetItem(fileName);
					console.log(" j1 > " +data);

					//var x = data;
					//alert(x);
					if(data == null || data == "undefined"){
						sessionsetItem('panel2', 1);	
						sessiongetItem('panel2');	
						console.log(" j1 >> " +data);
					} else {
						sessiongetItem('panel2');	
						// return null;
					}
				} else if ( j == 2 ) { // scrip
					sessiongetItem(fileName);
					console.log(" j2 > " +data);

					if(data == null || data == "undefined"){
						sessionsetItem('strip2', 1);	
						sessiongetItem('strip2');	
						console.log(" j2 >> " +data);
					} else {
						sessiongetItem('strip2');	
						// return null;
					}
				} else if ( j == 3 ) { // page
					sessiongetItem(fileName);
					console.log(" j3 > " +data);

					if(data == null || data == "undefined"){
						sessionsetItem('page2', 1);	
						sessiongetItem('page2');	
						console.log(" j3 >> " +data);
					} else {
						sessiongetItem('page2');	
						// return null;
					}
				}
			}
		}
	}

function sessiongetItem(key) {
  this.key = key;

  data = sessionStorage.getItem(this.key);
}

function sessionsetItem(key, value) {
  this.key = key;
  this.value = value;

  sessionStorage.setItem(this.key, this.value);
}
