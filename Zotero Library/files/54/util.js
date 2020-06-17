/** a miscellaneous group of JavaScript utilised by Orlando
*
* 2008-01-18
**/


// erase default text-box contents.
// if the value of the input box specified
// by "obj" equals the "default value"
// for the input box
// then clear the contents (i.e. value)
function clearInputValue( obj, defaultValue ) {
	if ( obj && obj.value == defaultValue ) {
		obj.value = "";
	}
}


// check the specified input element (radio button)
function checkInputControl( elementID ) {
	var obj = document.getElementById(elementID);
	if ( obj ) {
		obj.checked = true;
	}
}

// change the specified input element value 
function updateValueInputControl( elementID, valueStr ) {
	var obj = document.getElementById(elementID);
	if ( obj ) {
		obj.value = valueStr;
	}
}

// disable the enter key for automatic form submission
function disableEnterKey(e)
{
	var key = (window.event) ?  event.keyCode : e.which;
	return (key != 13);
} 

