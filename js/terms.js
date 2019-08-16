$(function() {
	$(".terms_btn a").click(function() {
		var j_this = $(this);
		var index = j_this.index();

		$(".terms_inner").removeClass("now");
		j_this.find(".terms_inner").addClass("now");
		
		$(".terms_content").css({
			display: 'none'
		});
		$(".terms_content").eq(index).css({
			display: 'block'
		})
	});
});