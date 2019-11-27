$("#useBilling").click(function() {
	let home = $("#home");
	let billing = $("#billing");

	if (this.checked){
		home.val(billing.val())
		home.attr("disabled",true)}
	else {
		home.val("");
		home.attr("disabled",false)
	}

});

	// Return the value of an attribute:
	// $(selector).attr(attribute)

	// Set the attribute and value:
	// $(selector).attr(attribute,value)
