$(document).ready(function() {
    $("ul").on("click", ".done i", function() {
		$(this).parent().parent().toggleClass("checked", "order-2");
		$(this).toggleClass("fa-check-square");
		$(this).toggleClass("fa-square");
	});

	$("ul").on("click", ".delete i", function() {
		$(this).parent().parent().slideUp(500, function() {
			$(this).removeClass("d-flex");
		});
	});

	$('input[type=text]').keypress(function(event) {
		if(event.which === 13) 
		{
			var todo = $(this).val();
			$(this).val("");

			$("ul").append(
				'<li class="list-group-item d-flex justify-content-between"><span class="done"><i class="far fa-square"></i></span><p>'
				+ escapeHTML(todo) + 
				'</p><span class="delete"><i class="fas fa-trash"></i></span></li>'
			);
		}
	})
});

function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}