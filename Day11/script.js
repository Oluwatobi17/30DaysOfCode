$(document).ready(()=>{
	let given_rate;
	$('.rate-form .rate-value').on('click', function(){
		//remove all active-rate;
		let rates = $('.rate-value');
		for(let i=1; i<=rates.length; i++){
			$('#'+i).removeClass('active-rate');
		}

		// adding active-rate class
		let id = $(this).attr('id');
		$('.message .userrate').text(id);
		for(let i=1; i<=id; i++){

			$('#'+i).addClass('active-rate');
		}
	});

	$('.rate-form button').on('click', function(){
		$('.success').toggleClass('hide');
		$('.rate-form').toggleClass('hide');
	});
});