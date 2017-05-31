

///////////////////////
function validateForm(frm) {
	for (cnt=0; cnt < frm.elements.length; cnt++) {	
		ctl = frm.elements[cnt];
		
		value = trim(frm.elements[cnt].value);
		type = frm.elements[cnt].type.toUpperCase();
		title = frm.elements[cnt].title;
		
		req = frm.elements[cnt].lang;
		if (req != "" && req != null && req != "0") {
			
			req = req.toUpperCase();
			
			//textbox
			if (type == "TEXT" || type == "TEXTAREA") {
				
				//Simple blank value check											[MUST]
				if (req.indexOf("MUST") != -1) {
					if (value == "" || value == null) {
						alert("Please enter \"" + title + "\"");
						ctl.focus()
						return (false);
					}
					req = req.replace("MUST", "");
				}
				
				//Integer value check												[(MUST)INT]
				if (req.indexOf("INT") != -1) {				
					if (isNaN(value)) {
						alert("Please enter numeric values for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					if (value.indexOf(".")  != -1)
					{
						alert("Please enter numeric values for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("INT", "");
					
					//Positive Integer Check										[(MUST)INT+]
					if (req.indexOf("+") != -1 && parseInt(value) <= 0 || value.indexOf(".")  != -1) {
						alert("Please enter positive numerics for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("+", "");
					
					//Negative Integer Check										[(MUST)INT-]
					if (req.indexOf("-") != -1 && parseInt(value) >= 0) {
						alert("Please enter negative numerics for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("-", "");
					

					//Comparison Integer Check										[(MUST)INT<=X]
					if (req.indexOf("<=") != -1 && 
					(parseInt(value) > parseInt( req.substr(req.indexOf("<=")+2, req.length - req.indexOf("<=")) ))
					) {
						alert("Please enter numerics <= " + req.substr(req.indexOf("<=")+2, req.length - req.indexOf("<=")) + " for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("<=", "");
					
					//																[(MUST)INT>=X]
					if (req.indexOf(">=") != -1 && 
					(parseInt(value) < parseInt( req.substr(req.indexOf(">=")+2, req.length - req.indexOf(">=")) ))
					) {
						alert("Please enter numerics >= " + req.substr(req.indexOf(">=")+2, req.length - req.indexOf(">=")) + " for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace(">=", "");
					
					continue;
				}
				
				
				//Double value check												[(MUST)DBL]
				if (req.indexOf("DBL") != -1) {
					if (isNaN(value)) {
						alert("Please enter numeric values for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("DBL", "");
					
					//Positive Double Check											[(MUST)DBL+]
					if (req.indexOf("+") != -1 && parseFloat(value) <= 0) {
						alert("Please enter positive numerics for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("+", "");
					
					//Negative Double Check											[(MUST)DBL-]
					if (req.indexOf("-") != -1 && parseFloat(value) >= 0) {
						alert("Please enter negative numerics for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("-", "");
					

					//Comparison Double Check										[(MUST)DBL<=X]
					if (req.indexOf("<=") != -1 && 
					(parseFloat(value) > parseFloat( req.substr(req.indexOf("<=")+2, req.length - req.indexOf("<=")) ))
					) {
						alert("Please enter numerics <= " + req.substr(req.indexOf("<=")+2, req.length - req.indexOf("<=")) + " for \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("<=", "");
					
					//																[(MUST)DBL>=X]
					if (req.indexOf(">=") != -1 && 
					(parseFloat(value) < parseFloat( req.substr(req.indexOf(">=")+2, req.length - req.indexOf(">=")) ))
					) {
						alert("Please enter numerics >= " + req.substr(req.indexOf(">=")+2, req.length - req.indexOf(">=")) + " for \"" + title + "\"");
						ctl.focus();
						return (false);

					}
					req = req.replace(">=", "");
					
					continue;
				}
				
				//Characters and string value check
				if (req.indexOf("LEN") != -1) {
					if (req.indexOf("LEN=") != -1 && value.length != parseInt(req.substr(req.indexOf("LEN=")+4)) && value.length != 0) {
						alert("Please enter " + req.substr(req.indexOf("LEN=")+4) + " characters for " + title);
						ctl.focus();
						return (false);
					}
					
					if ( (req.indexOf("LEN<") != -1) && !(value.length <= parseInt(req.substr(req.indexOf("LEN<")+4))) ) {
						alert("Please enter atmost " + req.substr(req.indexOf("LEN<")+4) + " characters for " + title);
						ctl.focus();
						return (false);
					}
					
					if ( (req.indexOf("LEN>") != -1) && !(value.length >= parseInt(req.substr(req.indexOf("LEN>")+4))) ) {
//						alert(req.indexOf("|"))
						check = req.substr(0,req.indexOf("|")).length;
						if (check != 0) {
							alert("Please enter atleast " + req.substr(req.indexOf("LEN>")+4,check-4) + " characters for " + title);
						}
						else
						{
							alert("Please enter atleast " + req.substr(req.indexOf("LEN>")+4) + " characters for " + title);
						}
						ctl.focus();
						return (false);
					}
				}


				//user name; min 4 characters no special characters
				if (req.indexOf("USERNAME") != -1){					
					var re = /^[A-Za-z]\w{3,}$/; 
					if (!re.test(value)) {
						alert("Please choose a correct \"" + title + "\".");
						ctl.focus();
						return (false);
					}
				}


				
				if (req.indexOf("AGE18+") != -1) {									//[AGE18+]
					var string = value;
					var separator = '/';
					var stringArray = string.split(separator);
					mm=stringArray[1]
					dd=stringArray[0]
					yy=stringArray[2]
					alert(mm + " " + dd + " " + yy);
					thedate = new Date()
    				mm2 = thedate.getMonth() + 1
    				dd2 = thedate.getDate()
    				yy2 = thedate.getYear()
					    if (yy2 < 100) {
					        yy2 = yy2 + 1900 }
					    yourage = yy2 - yy
    					if (mm2 < mm) {
				        yourage = yourage - 1; }
					    if (mm2 == mm) {
				        	if (dd2 < dd) {
                			yourage = yourage - 1; }
        				}
    				agestring = yourage + " "
					if (parseInt(agestring) < 18) {
						alert("You should be 18+ to fill this form.");
						ctl.focus();
						return (false);
					}
					
					}

				
				//Character Checks
				
				
				//Date Checks														[DATE*][MMDDYY]
				if (req.indexOf("DATE") != -1 && value != "") {
					if (!isDate(value)) {
						alert("Please enter valid date for \"" + title + "\". [Format :mm/dd/yyyy]");
						ctl.focus();
						return (false);
					}
					
					
					if (req.indexOf("FUTURE") != -1) {
						
						var dt = new Date();
						var dtVal = new Date(value);
						
						if (dt > dtVal) {
							alert("Please enter a future date for \"" + title + "\"");
							ctl.focus();
							return (false);
						}
						req = req.replace("FUTURE", "");
					}
					
				}//DATE CHECK
				
				//EMAIL
				if (req.indexOf("EMAIL") != -1 && value != "") {
					if (!isValidEmailStrict(value)) {
						alert("Please enter valid " + title);
						ctl.focus();
						return (false);
					}
					
				}//EMAIL CHECK

				//Email confirmation
				if (req.indexOf("COMP") != -1 && value != "") 
				{
					req = req.replace("MUST", "");
					req = req.replace("COMP", "");
					var valemailc = trim(eval("frm." + req.toLowerCase() + ".value"));
					if (valemailc != value) {
						alert("Email Address Mismatched");
						return (false);
					}
				}// Email confirmation ends here
			}

//password; min of 4 characters but no special characters
			if (type == "PASSWORD") {
				if (value == "" || value == null) {
					alert("Please enter \"" + title + "\"");
					ctl.focus();
					return (false);
				}
				else
				{	
					if (req.indexOf("COMP") == -1){					
						if (value.length <= 3) {
							alert("Please enter \"" + title + "\" more than 4 characters.");
							ctl.focus();
							return (false);
						}
					}
					var re =  /^[A-Za-z]\w{3,}$/; 
					if (!re.test(value)) {alert("Please choose a correct password. Must not start with numeric characters."); ctl.focus(); return (false);}
				}

				//confirm password
				if (req.indexOf("COMP") != -1 && value != "") 
				{
					
					req = req.replace("MUST", "");
					req = req.replace("COMP", "");
					var valpwdc = trim(eval("frm." + req.toLowerCase() + ".value"));
					if (valpwdc != value) {
						alert("Password Mismatched");
						ctl.focus();
						return (false);
					}
					//var re = /\w{4,}/;
					var re =  /^[A-Za-z]\w{3,}/; 
					if (!re.test(value)) {alert("not valid password");
						ctl.focus();
					return (false);}
				}
			}

			if (type == "CHECKBOX") {
				if (ctl.checked == false) {
					alert("Please check \"" + title + "\" to proceed.");
					ctl.focus();
					return (false);
				}
			}
			
			if (ctl.tagName == "SELECT") {
				if (req.indexOf("MUST") != -1) {
					if (value == "" || value == null) {
					alert("Please select \"" + title + "\" to proceed.");
					ctl.focus();
					return (false);
					}
					req = req.replace("MUST", "");
				}
			}
			
			//Simple blnak value check											[MUST]
			if (type == "FILE") {
				if (req.indexOf("MUST") != -1) {
					if (value == "" || value == null) {
						alert("Please enter \"" + title + "\"");
						ctl.focus();
						return (false);
					}
					req = req.replace("MUST", "");
				}
			}//FILE IF
			
		}
	}
	
	return (true);
}





////////////////////////////////////////////////
////////////////STRING FUNCTIONS////////////////
////////////////////////////////////////////////
function trim( str ) {
	// Immediately return if no trimming is needed
	if( (str.charAt(0) != ' ') && (str.charAt(str.length-1) != ' ') ) { return str; }
	// Trim leading spaces
	while( str.charAt(0)  == ' ' ) {
		str = '' + str.substring(1,str.length);
	}
	// Trim trailing spaces
	while( str.charAt(str.length-1)  == ' ' ) {
		str = '' + str.substring(0,str.length-1);
	}
	return str;
}

// Remove characters that might cause security problems from a string 
function removeBadCharacters(string) {
	if (string.replace) {
		string.replace(/[<>\"\'%;\)\(&\+]/, '');
	}
	return string;
}

// Check that a string contains only letters
function isAlphabetic(string) {
	return isAlphabetic1(string, true);
}

function isAlphabetic1(string, ignoreWhiteSpace) {
	if (string.search) {
		if ((ignoreWhiteSpace && string.search(/[^a-zA-Z\s]/) != -1) || (!ignoreWhiteSpace && string.search(/[^a-zA-Z]/) != -1)) return false;
	}
	return true;
}

// Check that a string contains only numbers
function isNumeric(string) {
	return isNumeric1(string, false);
}

function isNumeric1(string, ignoreWhiteSpace) {
	if (string.search) {
		if ((ignoreWhiteSpace && string.search(/[^\d\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\D/) != -1)) return false;
	}
	return true;
}

// Remove all spaces from a string
function trimAll(string) {
	var newString = '';
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) != ' ') newString += string.charAt(i);
	}
	return newString;
}

// Check that a string contains only letters and numbers
function isAlphanumeric(string) {
	return isAlphanumeric1(string, false);
}
function isAlphanumeric1(string, ignoreWhiteSpace) {
	if (string.search) {
		if ((ignoreWhiteSpace && string.search(/[^\w\s]/) != -1) || (!ignoreWhiteSpace && string.search(/\W/) != -1)) return false;
	}
	return true;
}

// Check that the number of characters in a string is between a max and a min
function isValidLength(string, min, max) {
	if (string.length < min || string.length > max) return false;
	else return true;
}

// Check that an email address is valid based on RFC 821 (?)
function isValidEmail(address) {
	if (address.indexOf('@') < 3) return false;
	var name = address.substring(0, address.indexOf('@'));
	var domain = address.substring(address.indexOf('@') + 1);
	if (name.indexOf('(') != -1 || name.indexOf(')') != -1 || name.indexOf('<') != -1 || name.indexOf('>') != -1 || name.indexOf(',') != -1 || name.indexOf(';') != -1 || name.indexOf(':') != -1 || name.indexOf('\\') != -1 || name.indexOf('"') != -1 || name.indexOf('[') != -1 || name.indexOf(']') != -1 || name.indexOf(' ') != -1) return false;
	if (domain.indexOf('(') != -1 || domain.indexOf(')') != -1 || domain.indexOf('<') != -1 || domain.indexOf('>') != -1 || domain.indexOf(',') != -1 || domain.indexOf(';') != -1 || domain.indexOf(':') != -1 || domain.indexOf('\\') != -1 || domain.indexOf('"') != -1 || domain.indexOf('[') != -1 || domain.indexOf(']') != -1 || domain.indexOf(' ') != -1) return false;
	return true;
}
// Check that an email address has the form something@something.something
// This is a stricter standard than RFC 821 (?) which allows addresses like postmaster@localhost
function isValidEmailStrict(address) {
	if (isValidEmail(address) == false) return false;
	var domain = address.substring(address.indexOf('@') + 1);
	if (domain.indexOf('.') == -1) return false;
	if (domain.indexOf('.') == 0 || domain.indexOf('.') == domain.length - 1) return false;
	return true;
}


////////////////////////////////////////////////
////////////////DATE VALIDATION/////////////////
////////////////////////////////////////////////
function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return (false);
    }
    // All characters are numbers.
    return (true);
}
function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return (returnString);
}
function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31;
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30;}
		if (i==2) {this[i] = 29;}
   } 
   return (this);
}
function isDate(dtStr){
	var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	
	var daysInMonth = DaysArray(12);
	var pos1 = dtStr.indexOf(dtCh);
	var pos2 = dtStr.indexOf(dtCh,pos1+1);
	var strMonth = dtStr.substring(0, pos1);
	var strDay = dtStr.substring(pos1+1,pos2);
	var strYear = dtStr.substring(pos2+1);
	strYr = strYear;
	if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1);
	if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1);
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
	}
	month = parseInt(strMonth);
	day = parseInt(strDay);
	year = parseInt(strYr);
	if (pos1 == -1 || pos2 == -1){
		//alert("The date format should be : mm/dd/yyyy");
		return (false);
	}
	if (strMonth.length<1 || month<1 || month>12){
		//alert("Please enter a valid month");
		return (false);
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		//alert("Please enter a valid day");
		return (false);
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year");// between "+minYear+" and "+maxYear);
		return (false);
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		//alert("Please enter a valid date");
		return (false);
	}
	
	return (true);
}

//
function checkAllCB(cb, blnVal) {
	var iCnt;
	for (iCnt=0; iCnt < cb.length; iCnt++) {
		cb[iCnt].checked = blnVal;
	}
}

function checkAllFRM(frm, blnVal) {
	var iCnt;
	for (iCnt=0; iCnt < frm.elements.length; iCnt++) {
		if (frm.elements[iCnt].type == 'checkbox') {
			frm.elements[iCnt].checked = blnVal;
		}
	}
}

function isAllChecked(cb, resCb) {
	var iCnt;
	for (iCnt=0; iCnt < cb.length; iCnt++) {
		if (!cb[iCnt].checked) {
			break;
		}
	}
	if (iCnt == cb.length)
		resCb.checked = true;
	else
		resCb.checked = false;
}

function isAnyCheckedFRM(frm, msg) {
	for (var iCnt = 0; iCnt < frm.elements.length; iCnt++) {
		if (frm.elements[iCnt].type.toLowerCase() == "checkbox") {
			if (frm.elements[iCnt].checked) {
				return (true);
			}
		}
	 }
	alert(msg);
	return (false);
}

//
function openFixedWindow(argURL, argSize) {
	window.open(argURL, "newWindow", "resizable=no," + argSize);
}

function openImageWindow(argURL, argSize) {
	window.open(argURL, "newImageWindow", "resizable=yes,scrollbars=yes," + argSize);
}

function clearCombo(varCombo) {
	for (var iCnt = varCombo.options.length; iCnt >= 0; --iCnt)
		varCombo.options[iCnt] = null;
}


function Highlight(e) {
	var r = null;
	
	r = document.getElementById("tr_" + e.value).className;
	
	if (r == "trListValue")
		r = "trListValue1";
	else
		r = "trListValue";
	
	document.getElementById("tr_" + e.value).className = r;
}

function createIDs(e) {
	var nm = e.name;
	var cb = eval("document.frmMain." + e.name);
	
	var t = "";
	var f = "";
	
	if (cb.length) {
		for (var i = 0; i < cb.length; i++) {
			if (cb[i].checked)
				t += "'" + cb[i].value + "',";
			else
				f += "'" + cb[i].value + "',";
		}
		t = t.substr(0, t.length - 1);
		f = f.substr(0, f.length - 1);
	}
	else {
		if (cb.checked)
			t = "'" + cb.value + "'";
		else
			f = "'" + cb.value + "'";
	}
	
	document.getElementById(nm.replace("cb_", "h_")).value = t + "|" + f;
}

function doChangeWay(ctl, val) {
	document.getElementById(ctl).value = val;
	//eval("document.frmMain." + ctl + ".value = val;");
	document.frmMain.submit();
}

function doChangeSort(argSort) {
	var sort = document.frmMain.sort.value;
	var order = document.frmMain.order.value.toLowerCase();
	
	if (sort == argSort) {
		if (order == "asc")
			order = "desc";
		else
			order = "asc";
	}
	else {
		order = "asc";
	}
	document.location = document.frmMain.action + "?sort=" + argSort + "&order=" + order;
}

var popUpWin=0;
function popUpWindow(URLStr,width,height,top,left)
{
  if(popUpWin)
  {
    if(!popUpWin.closed) popUpWin.close();
  }
  popUpWin = open(URLStr, 'SendSms', 'width='+width+',height='+height+',top='+top+',left='+left+'');
}

function messageWindow(title, msg)
{
  var width="300", height="125";
  var left = (screen.width/2) - width/2;
  var top = (screen.height/2) - height/2;
  var styleStr = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+',top='+top+',screenX='+left+',screenY='+top;
  var msgWindow = window.open("","msgWindow", styleStr);
  var head = '<head><title>'+title+'</title></head>';
  var body = '<center>'+msg+'<br><p><form><input type="button" value="   Done   " onClick="self.close()"></form>';
  msgWindow.document.write(head + body);
}
// JavaScript Document
/*
FormatTelNo method takes in the current element of the form and formats the phone number 
in "(123 456-7890" format. This method should be fired on every key entry 
(using onKeyUp method) in the current element of the form. If any key other than 0 to 9 
is entered, it erases that entry rightaway. Maxlength and size of the current
element of the form should be 13.
Eg. <netui:textBox size="13" maxlength="13" onKeyUp="JavaScript:formatTelNo (this);" onBlur="JavaScript:checkTelNo (this);" onKeyDown="JavaScript:formatTelNo (this);"/>    
*/
function formatTelNo (telNo)
{
    // If it's blank, save yourself some trouble by doing nothing.
    if (telNo.value == "") return;

    

    var phone = new String (telNo.value);
    
    phone = phone.substring(0,14);

    /*
    "." means any character. If you try to use "(" and ")", the regular expression becomes 
    complicated sice both are reserve characters and escaping them sometimes fails. So just 
    use "." for any character and replace it later.
    */
    if (phone.match (".[0-9]{3}.[0-9]{3}-[0-9]{4}") == null)
    {
        /*
        Following "if" is for user making any changes to the formatted tel. no. If you don't put this 
        "if" condition, the user can not correct a digit by first deleting it and then entering a 
        correct one, since this will fire two "onkeyup" events : first one on deleting a 
        character and second one on entering the correct one. The first "onkeyup" event will fire this 
        function which will reformatt the tel no before the user gets a chace to correct the digit. This 
        will surely confuse the user. The "if" condition below eliminates that.
        */
        if (phone.match (".[0-9]{2}.[0-9]{3}-[0-9]{4}|" + ".[0-9].[0-9]{3}-[0-9]{4}|" +
            ".[0-9]{3}.[0-9]{2}-[0-9]{4}|" + ".[0-9]{3}.[0-9]-[0-9]{4}") == null)
        {
            /*
            You will reach here only if the user is still typing the number or if he/she has 
            messed up already formatted number. 
            */
            var phoneNumeric = phoneChar = "", i;
            // Loop thru what user has entered.
            for (i=0;i<phone.length;i++)
            {
                // Go thru what user has entered one character at a time.
                phoneChar = phone.substr (i,1);
    
                // If that character is not a number or is a White space, ignore it. Only if it is a digit, 
                // concatinate it with a number string.
                if (!isNaN (phoneChar) && (phoneChar != " ")) phoneNumeric = phoneNumeric + phoneChar;
            }
    
            phone = "";
            // At this point, you have picked up only digits from what user has entered. Loop thru it.
            for (i=0;i<phoneNumeric.length;i++)
            {
                // If it's the first digit, throw in "(" before that.
                if (i == 0) phone = phone + "(";
                // If you are on the 4th digit, put ") " before that.
                if (i == 3) phone = phone + ") ";
                // If you are on the 7th digit, insert "-" before that.
                if (i == 6) phone = phone + "-";
                // Add the digit to the phone charatcer string you are building.
                phone = phone + phoneNumeric.substr (i,1)
            }
        }
    }
    else
    { 
        // This means the tel no is in proper format. Make sure by replacing the 0th, 4th and 8th character.
        phone = "(" + phone.substring (1,4) + ") " + phone.substring (5,8) + "-" + phone.substring(9,13); 
    }
    // So far you are working internally. Refresh the screen with the re-formatted value.
    if (phone != telNo.value) telNo.value = phone;
}

/*
CheckTelNo method takes in current element of the form as input. This method should be 
fired as the user attempts to leave the current element in the form (by using onBlur method). 
It checks to see if the format of the phone is "(123) 456-7890".
Eg. <netui:textBox size="13" maxlength="13" onBlur="JavaScript:checkTelNo (this);" onKeyUp="JavaScript:formatTelNo (this);" onKeyDown="JavaScript:formatTelNo (this);"/>  
*/      
function checkTelNo (telNo)
{
    if (telNo.value == "") return;
    if (telNo.value.match (".[0-9]{3}.[0-9]{3}-[0-9]{4}") == null)
    {
        if (telNo.value.match ("[0-9]{10}") != null)
            formatTelNo (telNo)              
    }
}


function formatSSNNo (SSNNo)
{
    // If it's blank, save yourself some trouble by doing nothing.
    if (SSNNo.value == "") return;

    

    var phone = new String (SSNNo.value);
    
    phone = phone.substring(0,11);

    /*
    "." means any character. If you try to use "(" and ")", the regular expression becomes 
    complicated sice both are reserve characters and escaping them sometimes fails. So just 
    use "." for any character and replace it later.
    */
    if (phone.match ("[0-9]{3}-[0-9]{2}-[0-9]{4}") == null)
    {
        /*
        Following "if" is for user making any changes to the formatted tel. no. If you don't put this 
        "if" condition, the user can not correct a digit by first deleting it and then entering a 
        correct one, since this will fire two "onkeyup" events : first one on deleting a 
        character and second one on entering the correct one. The first "onkeyup" event will fire this 
        function which will reformatt the tel no before the user gets a chace to correct the digit. This 
        will surely confuse the user. The "if" condition below eliminates that.
        */
        if (phone.match ("[0-9]{2}-[0-9]{2}-[0-9]{4}|" + "[0-9]-[0-9]{2}-[0-9]{4}|" +
            "[0-9]{3}-[0-9]-[0-9]{4}") == null)
        {
            /*
            You will reach here only if the user is still typing the number or if he/she has 
            messed up already formatted number. 
            */
            var phoneNumeric = phoneChar = "", i;
            // Loop thru what user has entered.
            for (i=0;i<phone.length;i++)
            {
                // Go thru what user has entered one character at a time.
                phoneChar = phone.substr (i,1);
    
                // If that character is not a number or is a White space, ignore it. Only if it is a digit, 
                // concatinate it with a number string.
                if (!isNaN (phoneChar) && (phoneChar != " ")) phoneNumeric = phoneNumeric + phoneChar;
            }
    
            phone = "";
            // At this point, you have picked up only digits from what user has entered. Loop thru it.
            for (i=0;i<phoneNumeric.length;i++)
            {
                // If it's the first digit, throw in "(" before that.
              //  if (i == 0) phone = phone + "(";
                // If you are on the 4th digit, put ") " before that.
                // If you are on the 7th digit, insert "-" before that.
                if (i == 3) phone = phone + "-";
                if (i == 5) phone = phone + "-";
                // Add the digit to the phone charatcer string you are building.
                phone = phone + phoneNumeric.substr (i,1)
            }
        }
    }
    else
    { 
//		alert("asdfa");
// This means the tel no is in proper format. Make sure by replacing the 0th, 4th and 8th character.
//        phone = "" + phone.substring (1,4) + "-" + phone.substring (5,8) + "-" + phone.substring(9,13); 
    }
    // So far you are working internally. Refresh the screen with the re-formatted value.
    if (phone != SSNNo.value) SSNNo.value = phone;
}


function checkSSNNo (SSNNo)
{
    if (SSNNo.value == "") return;
    if (SSNNo.value.match ("[0-9]{3}-[0-9]{2}-[0-9]{4}") == null)
    {
        if (SSNNo.value.match ("[0-9]{9}") != null)
            formatSSNNo (SSNNo)              
    }
}


//==========================================
 //////////////EIN FORMAT//////////////////
//==========================================

function formatEINNo (EINNo)
{
    // If it's blank, save yourself some trouble by doing nothing.
    if (EINNo.value == "") return;

    

    var phone = new String (EINNo.value);
    
    phone = phone.substring(0,10);

    /*
    "." means any character. If you try to use "(" and ")", the regular expression becomes 
    complicated sice both are reserve characters and escaping them sometimes fails. So just 
    use "." for any character and replace it later.
    */
    if (phone.match ("[0-9]{2}-[0-9]{7}") == null)
    {
        /*
        Following "if" is for user making any changes to the formatted tel. no. If you don't put this 
        "if" condition, the user can not correct a digit by first deleting it and then entering a 
        correct one, since this will fire two "onkeyup" events : first one on deleting a 
        character and second one on entering the correct one. The first "onkeyup" event will fire this 
        function which will reformatt the tel no before the user gets a chace to correct the digit. This 
        will surely confuse the user. The "if" condition below eliminates that.
        */
        if (phone.match ("[0-9]{2}-[0-9]{7}|" + "[0-9]-[0-9]{7}") == null)
        {
            /*
            You will reach here only if the user is still typing the number or if he/she has 
            messed up already formatted number. 
            */
            var phoneNumeric = phoneChar = "", i;
            // Loop thru what user has entered.
            for (i=0;i<phone.length;i++)
            {
                // Go thru what user has entered one character at a time.
                phoneChar = phone.substr (i,1);
    
                // If that character is not a number or is a White space, ignore it. Only if it is a digit, 
                // concatinate it with a number string.
                if (!isNaN (phoneChar) && (phoneChar != " ")) phoneNumeric = phoneNumeric + phoneChar;
            }
    
            phone = "";
            // At this point, you have picked up only digits from what user has entered. Loop thru it.
            for (i=0;i<phoneNumeric.length;i++)
            {
                // If it's the first digit, throw in "(" before that.
              //  if (i == 0) phone = phone + "(";
                // If you are on the 4th digit, put ") " before that.
                // If you are on the 7th digit, insert "-" before that.
                if (i == 2) phone = phone + "-";
                // Add the digit to the phone charatcer string you are building.
                phone = phone + phoneNumeric.substr (i,1)
            }
        }
    }
    else
    { 
// This means the tel no is in proper format. Make sure by replacing the 0th, 4th and 8th character.
//        phone = "" + phone.substring (1,4) + "-" + phone.substring (5,8) + "-" + phone.substring(9,13); 
    }
    // So far you are working internally. Refresh the screen with the re-formatted value.
    if (phone != EINNo.value) EINNo.value = phone;
}


function checkEINNo (EINNo)
{
    if (EINNo.value == "") return;
    if (EINNo.value.match ("[0-9]{2}-[0-9]{7}") == null)
    {
        if (EINNo.value.match ("[0-9]{9}") != null)
            formatEINNo (EINNo)              
    }
}




function drawTable(maxlength, tablewidth, tablename)
{
	if ((navigator.appName.indexOf("Microsoft") !=-1) && (parseInt(navigator.appVersion)>= 4))
	{
		var str;
	    str='<table id="box" name="'+maxlength+'" cellpadding="0" cellspacing="0" border="0" width="'+tablewidth+'">';
	    str += '<tr>';
	    str += '<td bgcolor="#003366" width="0"><img src="/images/dot.gif" name="'+tablename+'1" height="5" width="0"></td>';
	    str += '<td bgcolor="#8CAAE6" width="'+tablewidth+'"><img src="/images/dot.gif" name="'+tablename+'2" height="5" width="'+tablewidth+'"></td></tr>';
	    //str += '<tr><td colspan="2"><div><span name=tablename3 style="width:'+tablewidth/2+'px;"></span><span id="'+tablename+'4" style="width:'+tablewidth/2+'px;text-align:right;"></span></div></td></tr>';
	    str += '</table>';
		document.write(str);
	}
	else 
	{
	    document.write(' ');
	}
}

function funMycomment(a){
	obj=document.getElementById('box');
	tblwidth=obj.width;
	maxlen=obj.name;
	var aa
	aa=document.getElementById(a.id);
	x = maxlen - aa.value.length;
	if (x <0)
	{
	    aa.value=aa.value.substring(0,maxlen);
	    x=0;
	    alert('Maximum '+maxlen+' character used');
	}
	
	eval("document."+a.id+"1").width=tblwidth*(maxlen-x)/maxlen;
	eval("document."+a.id+"1").alt=maxlen-x+" chars used";
	eval("document."+a.id+"2").width=tblwidth*x/maxlen;
	eval("document."+a.id+"2").alt=x+" chars available";
	//document.getElementByName("tablename3").innerHTML=maxlen-x+" chars used";
	//document.getElementById("tablename4").innerHTML=x+" chars left";
}

	var maxAdNo = 1
	var adNo
	var myAd = new Array()

	myAd[0] = '<a href="http://www.emisha.com/cat-Florenzia-Collection~66.html"><img src="/images/florenzia.gif"  border="0"></a>'
	myAd[1] = '<a href="http://www.emisha.com/cat-Personalized-&-Engraved-Gifts~27.html"><img src="shop_images/mainimg.gif" width="453" height="167" border="0"></a>'

///////////////////code for small ads ///////////////////////////////
//	adNo = Math.round(Math.random() * maxAdNo)
//	document.write(myAd[adNo])
/////////////////////////////////////////////////////////////////////

	var maxAdNoLarge = 1
	var adNoLarge
	var myAdLarge = new Array()

	myAdLarge[0] = '<a href="http://www.emisha.com/cat-Florenzia-Collection~66.html"><img src="/images/florenzia_large.gif"  border="0"></a>'
	myAdLarge[1] = '<a href="http://www.emisha.com/cat-Bridal-Wear~2.html"><img src="shop_images/shop_inner.gif" border="0"></a>'

///////////////////code for small ads ///////////////////////////////
//	adNoLarge = Math.round(Math.random() * maxAdNoLarge)
//	document.write(myAdLarge[adNoLarge])
/////////////////////////////////////////////////////////////////////

	var maxAdNoVenue = 3
	var adNoVenue
	var myAdVenue = new Array()

	myAdVenue[0] = '<img src="images/venue1.jpg" width="427" height="222">'
	myAdVenue[1] = '<img src="images/venue2.jpg" width="427" height="222">'
	myAdVenue[2] = '<img src="images/venue3.jpg" width="427" height="222">'
	myAdVenue[3] = '<img src="images/venue4.jpg" width="427" height="222">'

///////////////////code for small ads ///////////////////////////////
//	adNoVenue = Math.round(Math.random() * maxAdNoVenue)
//	document.write(myAdVenue[adNoVenue])
/////////////////////////////////////////////////////////////////////

	var maxAdNoCaterer = 4
	var adNoCaterer
	var myAdCaterer = new Array()

	myAdCaterer[0] = '<img src="images/catering2.jpg" width="427" height="222">'
	myAdCaterer[1] = '<img src="images/catering1.jpg" width="427" height="222">'
	myAdCaterer[2] = '<img src="images/catering3.jpg" width="427" height="222">'
	myAdCaterer[3] = '<img src="images/catering4.jpg" width="427" height="222">'
	myAdCaterer[4] = '<img src="images/catering5.jpg" width="427" height="222">'

///////////////////code for small ads ///////////////////////////////
//	adNoCaterer = Math.round(Math.random() * maxAdNoCaterer)
//	document.write(myAdCaterer[adNoCaterer])
/////////////////////////////////////////////////////////////////////


	var maxAdNoPerformer = 2
	var adNoPerformer
	var myAdPerformer = new Array()

	myAdPerformer[0] = '<img src="images/ent1.jpg" width="427" height="222">'
	myAdPerformer[1] = '<img src="images/ent2.jpg" width="427" height="222">'
	myAdPerformer[2] = '<img src="images/ent3.jpg" width="427" height="222">'
	

///////////////////code for small ads ///////////////////////////////
//	adNoPerformer = Math.round(Math.random() * maxAdNoPerformer)
//	document.write(myAdPerformer[adNoPerformer])
/////////////////////////////////////////////////////////////////////

	var maxAdNoLimo = 2
	var adNoLimo
	var myAdLimo = new Array()

	myAdLimo[0] = '<img src="images/limo1.jpg" width="427" height="222">'
	myAdLimo[1] = '<img src="images/limo3.jpg" width="427" height="222">'
	myAdLimo[2] = '<img src="images/limo2.jpg" width="427" height="222">'
	
	

///////////////////code for small ads ///////////////////////////////
//	adNoLimo = Math.round(Math.random() * maxAdNoLimo)
//	document.write(myAdLimo[adNoLimo])
/////////////////////////////////////////////////////////////////////


	var maxAdNoHome = 4
	var adNoHome
	var myAdHome = new Array()

	myAdHome[0] = '<img src="images/home1.jpg" width="427" height="222">'
	myAdHome[1] = '<img src="images/home2.jpg" width="427" height="222">'
	myAdHome[2] = '<img src="images/home3.jpg" width="427" height="222">'
	myAdHome[3] = '<img src="images/home4.jpg" width="427" height="222">'
	myAdHome[4] = '<img src="images/home5.jpg" width="427" height="222">'
	
	
///////////////////code for small ads ///////////////////////////////
//	adNoHome = Math.round(Math.random() * maxAdNoHome)
//	document.write(myAdHome[adNoHome])
/////////////////////////////////////////////////////////////////////
