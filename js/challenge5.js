
// goal , change over image hover
// put in CDN!

var msg = "Hover over an image below."

$("imgs").mouseover(function() {
		console.log("H1")
	 	$('#image').css("backgroundImage","url('"+$(this).attr("src")+"')");

	 	$('#image').html($(this).attr("alt"))
	})

$("img").mouseleave(function(){
		console.log("H2")
		$("#image").css("backgroundImage","");

		$("#image").html(msg);
	})

	// imgs[i].onblur = function() {
	//  document.querySelector('#image').style.backgroundImage="url('')";
	//  document.querySelector('#image').innerHTML= msg;
	// }
