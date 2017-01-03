$("ul").on("click", "li", function() {
 	$(this).toggleClass("list-style");
});
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(400, function() {
		$(this).remove();
	});
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		if($(this).val() !== "") {
			var text = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
		}

	}
});
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(400);
});