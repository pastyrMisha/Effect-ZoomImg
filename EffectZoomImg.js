<script type="text/javascript">
$(document).ready(function(){
		$("#img").bind("click", function (event) {
			$(event.target).parent().css("text-align", "center");
			$(event.target).animate ({
				width: $(event.target).width() * 5,
				width: $(event.target).height() * 5,
			}, 3000);
		});
	});

</script>