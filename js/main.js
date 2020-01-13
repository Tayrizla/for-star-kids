$(function(){
	$('.load-more').on('scroll', loadMore);
});

let count = 0;
let limit = 12;

function loadMore() {
	// const btn = $(this);
	// const loader = btn.find('span');
	// $.ajax({
	// 	url: '/data.html',
	// 	type: 'GET',
	// 	beforeSend: function(){
	// 		btn.attr('disabled', true);
	// 		loader.addClass('d-inline-block');
	// 	},
	// 	success: function(responce){
	// 		setTimeout(function(){
	// 			// loader.removeClass('d-inline-block');
	// 			btn.attr('disabled', false);
	// 			$('.after-posts').before(responce);
	// 		}, 1000);
	// 	},
	// 	error: function(){
	// 		alert('Error!');
	// 		loader.removeClass('d-inline-block');
	// 		btn.attr('disabled', false);
	// 	}
	// });
	let block = Array(12).fill(0).map(x => count < limit? `<div class="col-md-4 col-lg-3 col-sm-6">
	<div class="card">
	  <img src="img/dress${++count}.jpg"  alt="..." />
	  <div class="card-body">
		<h3 class="post-category">Какое-то название</h3>
		<h5 class="post-title"> еще что-то</h5>
		<p class="card-text">
		  описание чего-то

		</p>
	  </div>
	</div>
  </div>`:'');
  
  $('#load-more').append(block);

}

  $(window).scroll(function(){
	let targetBlock = $('.after-posts');
	let targetPos = targetBlock.offset().top;
	let winHeight = $(window).height();
	let scrollToElem = targetPos - winHeight;
  	let winScrollTop = $(this).scrollTop();
  	if(winScrollTop > scrollToElem && count < limit){
		loadMore();
  	}
  });