$(function() {
	calcSideH();
	$(window).resize(function() {
		calcSideH();
	});
	//去除side>div下最后一个a的border
	$(".side li div").each(function() {
		$(this).children("a").last().css("border", "none")
	});
	//将图像替换成背景
	imgToBg($(".side li h2 span"));
	//手凤琴
	$(".side h2").click(function() {
		var status = $(this).next("div").css("display");
		if(status == "none") {
			$(this).next("div").slideDown();
			$(this).addClass("on");
		} else {
			$(this).next("div").slideUp();
			$(this).removeClass("on");
		}
	});
	$(".side h2").each(function() {
		var status = $(this).hasClass("on");
		if(status) {
			$(this).next("div").show();
		} else {
			$(this).next("div").hide();
		}
	});
	//table tr hover
	$(".table-response tbody tr").hover(function(){
		$(this).find("td").css("background","#e8eff5");
	},function(){
		$(this).find("td").css("background","");
	})
})

function calcSideH() {
	$(".side,.main").css("min-height", '')
	var winW = $(window).width();
	var winH = $(window).height();
	var headH = $(".head").height();
	var H = winH - headH;
	var mainH = $(".main").height();
	if(H > mainH) {
		$(".side").css("min-height", H);
		$(".main").css("min-height", H - 71)
	} else {
		$(".side").css("min-height", mainH + 71);
	}
};

function imgToBg(obj) {
	obj.each(function() {
		var imgSrc = $(this).find("img").attr("src");
		$(this).find("img").hide();
		$(this).css("background", "url(" + imgSrc + ") no-repeat center center")
	})
}
//# sourceMappingURL=../maps/js.js.map
