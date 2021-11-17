$(function () {
  // スムーススクロール
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href =="" ? 'html' :href);
    let position = target.offset().top;
    console.log(href);
    $('html').animate({scrollTop:position},speed,'swing');
    return false;
  })

	// totop
	$(window).scroll(function () {
		// 100pxスクロールしていたらトップに戻るボタンを表示
		if ($(this).scrollTop() > 100) {
			$(".js-totop").fadeIn();
		} else {
			$(".js-totop").fadeOut();
		}
	});
	// トップに戻るボタンを押したらトップに戻る
	$(".js-totop").click(function () {
		$("body,html").animate({ scrollTop: 0 }, 800);
	});

	// モダール（開く）
	$(".js-modal-open").click(function (e) {
		e.preventDefault();
		let target = $(this).data("target");
		$("." + target).addClass("is-show");
		return false;
	});

	// モダール（閉じる）
	$(".js-modal-close").click(function (e) {
		e.preventDefault();
		let target = $(this).data("target");
		$("." + target).removeClass("is-show");
		return false;
	});
	$(".p-form__button").click(function (e) {
		let $form = $(".js-form");
		let formData = $("#form").serialize();
		$.ajax({
			type: "POST",
			url: $form.attr("action"),
			data: formData,
			dataType: "xml",
			statusCode: {
				200: function () {
					$form.slideUp();
					$("#js-success").slideDown();
				},
				400: function () {
					$form.slideUp();
					$("#js-error").slideDown();
				},
			},
		});
    e.preventDefault();
	});

	// ボタン活性化
	const $submit = $(".js-submit");
	$(".js-form input, .js-form textarea").on("change", function () {
		console.log("aa");
		if (
			$('.js-form input[type="text"]').val() !== "" &&
			$('.js-form input[type="email"]').val() !== "" &&
			$(".js-form textarea").val() !== "" &&
			$('.js-form input[name="entry.1115560496"]').prop("checked") === true
		) {
			$submit.prop("disabled", false);
			$submit.addClass("-active");
		} else {
			$submit.prop("disabled", true);
			$submit.removeClass("-active");
		}
	});
});
