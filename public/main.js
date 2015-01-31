// ('#selectmsg').closest('.js-msg').add
$(".js-delete").on("click", deletemsg)
$(".js-send").on("click", sendmail)

$('.js-msgselector').change(function(){
	console.log('yyyyyyyy')
	var message = $(this).closest(".js-msg");
	message.toggleClass("selected");
	$(".blankcenter").toggleClass("selecting")
});
function deletemsg(){
	console.log('nnnnnnnnnn')
	$(".messagerows > .selected").remove();
}

function sendmail(){
	var get = $.get("/sendmail")
	console.log('iiiiiiiiiiiii')
	newwindow=window.open("/sendmail",'name','height=500,width=500');
	if (window.focus) {newwindow.focus()}
	return false;
}


