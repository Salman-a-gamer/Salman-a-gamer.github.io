alert("Welcome To Salman's Website");
					// RIME	
function Onload() {
   var time = new Date();
   var hours = time.getHours();
   var mins = time.getMinutes();
   var secs = time.getSeconds();
   var ampm = "AM"
   var displayTime = document.getElementById("timeButt");
   if (secs <= 9 ) {
   	secs = "0"+secs;
   }

   if (mins <= 9 ) {
   	mins = "0"+mins;
   }

   if (hours <= 9 ) {
   	hours = "0"+hours;
   }

   if (hours > 12 ) {
   	hours = hours-12;
   }

   displayTime.innerHTML = hours + ":" +mins + ":" + secs + " " + ampm;
   setTimeout(Onload , 1000);
	}

					// PASSWORD CHECK
 var users = {
    	"user1":"salman",
    	"user1Pass": "salman",
    	"user2": "",
    	"user2Pass": ""
    }

function SIGNUP() {
	var  newUser = prompt("Enter Your New Username");
	var newPass =  prompt("Enter Your New Password");
	newUser = users.newUser;
	newPass = users.newPass;
	alert("SUCESSFULLY CREATED AN ACCOUNT!!");
}

function PASS() {

		var user = prompt("What is your User Name?");
		var pass = prompt("What is your Password?");
		var username = user.toLowerCase();
		var password = user.toLowerCase();
		if (user=== users.user1 || users.newUser  && 
		password === users.user1Pass || users.newPass ) {

		alert('Login Successful ');
		} else{

			window.location.assign("wrongPass.html");
		}
}






				// RESET VALUES STUFFF

initialValues={
'Array1': 'Store different values',
'shift': 'Delete the first value',
'pop': 'delete the last value',
'push': 'enter a new value (pushes it to the end)',
'concat': 'sort it in alphabical order',
'sort': 'The first value of array (these are called index)'
}


            // TRANSFPRMING BUTTON 
function clickme() {
	console.log('see');
	document.getElementById('clickmebutton').hidden=true; 
	document.getElementById('click2').hidden=false; 
}

function clickme2() {
	console.log('see2');
	document.getElementById('clickmebutton').hidden=false; 
	document.getElementById('click2').hidden=true; 
}
			// TRANSFPRMING BUTTON 

	for (var k of Object.keys(initialValues))
		{
			document.getElementById(k).innerHTML = initialValues[k];
		}



				// Destruction
 function destroy() {
 	console.log("dij");
	var hidden = document.getElementById("destroyedParagraph").hidden
if(!hidden) 	
{document.getElementById("destroyedParagraph").hidden=true;
		console.log(hidden);
 	document.getElementById("destroyButton").innerHTML="Bring Back The Paragraph";}
else 
{
	document.getElementById("destroyedParagraph").hidden=false;
	console.log(hidden);
	document.getElementById("destroyButton").innerHTML="Destroy Paragraph";}
}

				// DESRTUCTIONS
/*function destroy() {
	document.getElementById("destroyedParagraph").hidden=true;
	document.getElementById("destroyButton").hidden=true;	
	document.getElementById("recoverButton").hidden=false ;
	console.log("YOU DESTROYED THAT PARAGAPH");
}
function recover() {
	// body...
	document.getElementById("destroyedParagraph").hidden=false;
	document.getElementById("destroyButton").hidden=false;
	document.getElementById("recoverButton").hidden=true;
	console.log("YOU RECOVERED THAT PARAGRAPH ");
}*/

function Dfunction() {
	var hid = document.getElementById("Dparagraph").hidden;
	if ( hid===true) {
		document.getElementById("Dparagraph").hidden=false;
		console.log(hid);
		document.getElementById("Dbutton").innerHTML="Destroy";
	} else if (hid===false) {
		document.getElementById("Dparagraph").hidden=true;
		document.getElementById('Dbutton').innerHTML="Bring it back";
		console.log(hid);
	}
}

				// DESRTUCTIONS





				// WHO ARE YOU

function justifyYourself() {
	var justify = prompt("What is Your Name");
	document.getElementById("WhoAreYou").innerHTML = "You are " + justify;
}
				// WHO ARE YOU




				// TIME DISPLAY


				// Math---


					// Add
function addition() {
	var addfirst = prompt("_  Added to  _ \n Enter Your First Number:");
	var addsecond = prompt(addfirst +" Added to _ \n" + "Enter Your Second Number:");
	var sum = Number(addfirst) + Number(addsecond);
	alert("The answer is " + sum );
}

					// Sub
function subtraction() {
	var subfirst = prompt("_  Subtracted by  _ \n Enter Your First Number:");
	var subsecond = prompt( subfirst + " Subtracted by _ \n " + "Enter Your Second Number:");
	var diff = Number(subfirst) - Number(subsecond);
	alert("The answer is " + diff );
}

					// Mult
function multiplication() {
	var multiplyfirst = prompt("_  Multiplied by  _ \n Enter Your First Number:");
	var multiplysecond = prompt(multiplyfirst + " Multiplied by _ \n" +"Enter Your Second Number:");
	var product = Number(multiplyfirst) * Number(multiplysecond);
	alert("The answer is " + product );
}

					// division
					
function division() {
	var dividefirst = prompt("_  Divided by  _ \n Enter Your First Number:");
	var dividesecond = prompt( dividefirst +" Divided by _ \n "+ "Enter Your Second Number:" );
	var quotient = Number(dividefirst) / Number(dividesecond);
	alert("The answer is " + quotient);
}

function divisionShort() {
	var dividefirst = prompt("_  Divided by  _ \n Enter Your First Number:");
	var dividesecond = prompt( dividefirst +" Divided by _ \n "+ "Enter Your Second Number:" );
	var quotient0 = Number(dividefirst) / Number(dividesecond);
	var quotient1 = Math.floor(quotient0);
	var remainder = Number(dividefirst) % Number(dividesecond);
	alert("The Quotient is " + quotient1 +" and " + "Remainder is " + remainder );
}







				// Differrent Calculator
function add2() {
	a = prompt("Enter Your First Number");
	b = prompt("Enter Second Number");
	 var sum2 = Number(a)+Number(b);
	return alert("Your Answer is: " + sum2 );
}

function subtract2() {
	a = prompt("Enter Your First Number");
	b = prompt("Enter Second Number");
	var diff2 = Number(a)-Number(b);
	return alert("Your Answer is: " + diff2);
}


function multiply2() {
	a = prompt("Enter Your First Number");
	b = prompt("Enter Second Number");
	var mult2 = Number(a)*Number(b);
	return alert("Your Answer is: " + mult2);
}

function divide2() {
	a = prompt("Enter Your First Number");
	b = prompt("Enter Second Number");
	var quo=Number(a)/Number(b);
	var rem = Number(a)%Number(b)
	// return alert("Your Answer is: " +quo +" and Remainder is: "+ rem);
}




				// BACKGROUND

function changeColor() {
	var colorArray = ["red","blue","orange","green","purple","white",
	"red","blue","orange","purple"];
	var button = document.getElementById("Cbutton");
	var bodyc = document.getElementsByTagName('body');
 	
	
	console.log("free");
}




				// BACKGROUND




				// ARRAYS
var oglist =["apple","banana","pineapple","dragon fruit"]
var list = [...oglist];
function Array() {
	console.log(list);
	var like = list.toString() + "<br/>";
	document.getElementById("Array1").innerHTML+=" like: "+ like;
} 		

function arrayShift() {
	
	list.shift();
	var like1 = list.toString() + "<br/>";
	document.getElementById("shift").innerHTML+=" like: "+ like1;
	console.log(list);		
}		

function arrayPop() {
	a = list.pop();
	var like3 = list.toString() + "<br/>";
	document.getElementById("pop").innerHTML+=" like: "+ like3;
	console.log(a,list);		
}	

function arrayPush() {
	list.push("kiwi");
	var like4 = list.toString();
	document.getElementById("push").innerHTML+=" like: "+ like4;
	console.log(list);		
}

function arrayConcaT() {
	var newlist =list.concat("pizza","morePizza");
	var like5 = newlist.toString();
	document.getElementById("concat").innerHTML+=" like: "+ like5;
	console.log(list);
}

function arraySort() {
	list.sort();
	var like6 = list.toString();
	document.getElementById("sort").innerHTML+=" like: "+ like6;
	console.log(list);
}

function arrayIndex() {
	var index0= list[0].toString();
	document.getElementById("index").innerHTML+=" [0]: "+ index0;
	console.log(list[0]);
}

function arrayIndex1() {
	var index1= list[1].toString();
	document.getElementById("index").innerHTML+=" [1]: "+ index1;
	console.log(list[1]);
}

function arrayIndex2() {
	var index2= list[2].toString();
	document.getElementById("index").innerHTML+=" [2]: "+ index2;
	console.log(list[2]);
}

function arrayIndex3() {
	var index3= list[3].toString();
	document.getElementById("index").innerHTML+=" [3]: "+ index3;
	console.log(list[3]);
}

function arrayIndex4() {
	var index4= list[4].toString();
	document.getElementById("index").innerHTML+=" [4]: "+ index4;
	console.log(list[4]);
}

function resetValues() {
	for (var k of Object.keys(initialValues))
		document.getElementById(k).innerHTML=''
	list=[...oglist]
}