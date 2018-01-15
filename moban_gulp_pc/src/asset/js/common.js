$(function() {
	//全局替换#
	replaceAlink();
	//开启js转css
	jsToCss('jst');
});

//==========================================================
//延时执行常配合resize使用
//==========================================================

function delay_exec(id, wait_time, callback_f) {
	if(typeof window['delay_exec'] === "undefined")
		window['delay_exec'] = [];
	if(typeof window['delay_exec'][id] !== "undefined")
		clearTimeout(window['delay_exec'][id]);
	window['delay_exec'][id] = setTimeout(callback_f, wait_time);
};

//==========================================================
//全局替换空链接
//==========================================================

function replaceAlink() {
	$.each($("a"), function(index, value) {
		var aHref = $(this).attr("href");
		if(aHref == "javascript:void(0)" || aHref == "" || aHref == "#") {
			$(this).removeAttr("target");
			$(this).attr("href", "javascript:void(0)");
		}
	})
};

//==========================================================
//左右翻页，html文件名称p1.html...p100.html
//==========================================================

document.onkeydown = chang_page

function chang_page(ev) {
	var evt = ev || window.event;
	var arr = /(\d+)-?(\d*).html/g.exec(window.location.pathname);
	var numarr = arr[0].split(".");
	var countdesc = parseInt(numarr[0]) - 1 > 0 ? parseInt(numarr[0]) - 1 : 1;
	var countasc = parseInt(numarr[0]) + 1;
	if(evt.keyCode == 37 || evt.keyCode == 33) location.href = window.location.pathname.replace(arr[0], countdesc + '.html');
	if(evt.keyCode == 39 || evt.keyCode == 34) location.href = window.location.pathname.replace(arr[0], countasc + '.html');
}

//==========================================================
//模拟alert
//==========================================================
//var alertStr, alertStr2, alertStr3;
//
//function alert(txt) {
//	alertStr = '<div class="alert">';
//	alertStr += '<div class="alertInner">';
//	alertStr += '<h2>';
//	alertStr2 = '</h2>';
//	alertStr2 += '<a href="javascript:;">好</a>';
//	alertStr2 += '</div></div>';
//	alertStr3 = alertStr + txt + alertStr2;
//	$("body").append(alertStr3);
//	var wh = $(window).height()
//	var thisH = $(".alertInner").height()
//	$(".alertInner").css("top", (wh - thisH) / 2)
//	$(".alert a").on("click", function() {
//		$(this).parent().parent().remove();
//	})
//}
//==========================================================
//模拟confirm
//==========================================================
//function confirmTest(tit, con, yes, no, type, url) {
//	var confirmStr = '';
//	confirmStr += '<div class="confirmeBox">';
//	confirmStr += '<div class="confirmeBoxInner">';
//	confirmStr += '<h2>' + tit + '</h2>';
//	confirmStr += '<div>' + con + '</div>';
//	confirmStr += '<p class="btnGroup"><a href="javascript:;" class="true">' + yes + '</a><a href="javascript:;" class="false">' + no + '</a></p>';
//	confirmStr += '</div></div>';
//	$("body").append(confirmStr);
//	$(".confirmeBox").show();
//	$(".confirmeBox .true").on('click', function() {
//		if(type == 1) {
//			window.location.href = url;
//		} else {
//			return true;
//		}
//	});
//	$(".confirmeBox .false").on('click', function() {
//		$(".confirmeBox").remove();
//		return false;
//	});
//}

//==========================================================
//js转换css简易
//==========================================================
//支持css定义:w100,h100,p100,m100,ml100,mr100,mt100,mb100,pl100,pr100,pb100,pt100,fs100,wp100,lh100,mpl10,mpt10,mpr10,mpb10,ppl10,ppt10,ppr10,ppb10
function jsToCss(cls) {
	$('.' + cls).each(function() {
		var cls_arr = $(this).attr("class").split(" "); //class数组
		var cls_lens = cls_arr.length; //class长度
		for(i = 0; i < cls_lens; i++) {
			var cls_len = cls_arr[i].length; //获取当前class的长度
			var re = /\D+/g; //字母+数字
			var re1 = /\D\D\d+/g; //字母+字母+数字
			var re2 = /\D\D\D\d+/g; //字母+字母+字母+数字
			//++++++++++++++匹配re
			if(re.test(cls_arr[i])) {
				var first_letter = cls_arr[i].substring(0, 1); //获取首字母
				////////////////////////////////////
				if(first_letter == "w") {
					var set_num = parseInt(cls_arr[i].substring(1, cls_len))
					$(this).css("width", set_num + "px");
				}
				////////////////////////////////////
				if(first_letter == "h") {
					var set_num = parseInt(cls_arr[i].substring(1, cls_len))
					$(this).css("height", set_num + "px");
				}
				////////////////////////////////////
				if(first_letter == "p") {
					var set_num = parseInt(cls_arr[i].substring(1, cls_len))
					$(this).css("padding", set_num + "px");
				}
				////////////////////////////////////
				if(first_letter == "m") {
					var set_num = parseInt(cls_arr[i].substring(1, cls_len))
					$(this).css("margin", set_num + "px");
				}
			}
			//++++++++++++++匹配re1
			if(re1.test(cls_arr[i])) {
				var first_letter = cls_arr[i].substring(0, 1);
				var second_letter = cls_arr[i].substring(1, 2);
				////////////////////////////////////
				if(first_letter == "m") {
					var set_num = parseInt(cls_arr[i].substring(2, cls_len))
					if(second_letter == "l") {
						$(this).css("margin-left", set_num + "px");
					}
					if(second_letter == "t") {
						$(this).css("margin-top", set_num + "px");
					}
					if(second_letter == "r") {
						$(this).css("margin-right", set_num + "px");
					}
					if(second_letter == "b") {
						$(this).css("margin-bottom", set_num + "px");
					}
				}
				////////////////////////////////////
				if(first_letter == "p") {
					var set_num = parseInt(cls_arr[i].substring(2, cls_len))
					if(second_letter == "l") {
						$(this).css("padding-left", set_num + "px");
					}
					if(second_letter == "t") {
						$(this).css("padding-top", set_num + "px");
					}
					if(second_letter == "r") {
						$(this).css("padding-right", set_num + "px");
					}
					if(second_letter == "b") {
						$(this).css("padding-bottom", set_num + "px");
					}
				}
				////////////////////////////////////
				if(first_letter == "f") {
					var set_num = parseInt(cls_arr[i].substring(2, cls_len))
					if(second_letter == "s") {
						$(this).css("font-size", set_num + "px");
					}
				}
				////////////////////////////////////
				if(first_letter == "w") {
					var set_num = parseInt(cls_arr[i].substring(2, cls_len))
					if(second_letter == "p") {
						$(this).css("width", set_num + "%");
					}
				}
				////////////////////////////////////
				if(first_letter == "l") {
					var set_num = parseInt(cls_arr[i].substring(2, cls_len))
					if(second_letter == "h") {
						$(this).css("line-height", set_num + "px");
					}
				}
			}
			//++++++++++++++匹配re2
			if(re2.test(cls_arr[i])) {
				var first_letter = cls_arr[i].substring(0, 1);
				var second_letter = cls_arr[i].substring(1, 2);
				var third_letter = cls_arr[i].substring(2, 3);
				if(first_letter == "m") {
					if(second_letter == "p") {
						var set_num = parseInt(cls_arr[i].substring(3, cls_len))
						if(third_letter == "l") {
							$(this).css("margin-left", set_num + "%");
						}
						if(third_letter == "t") {
							$(this).css("margin-top", set_num + "%");
						}
						if(third_letter == "r") {
							$(this).css("margin-right", set_num + "%");
						}
						if(third_letter == "b") {
							$(this).css("margin-bottom", set_num + "%");
						}
					}
				}
				if(first_letter == "p") {
					if(second_letter == "p") {
						var set_num = parseInt(cls_arr[i].substring(3, cls_len))
						if(third_letter == "l") {
							$(this).css("padding-left", set_num + "%");
						}
						if(third_letter == "t") {
							$(this).css("padding-top", set_num + "%");
						}
						if(third_letter == "r") {
							$(this).css("padding-right", set_num + "%");
						}
						if(third_letter == "b") {
							$(this).css("padding-bottom", set_num + "%");
						}
					}
				}
			}
		}
	})
};