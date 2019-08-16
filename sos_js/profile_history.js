$(document).ready(function() {
	

			$('.profile_history_detail_wrapper').css('display', 'none');
		$('#profile_history_share_wrapper').css('display', 'block');	


    var mobile_status = 0;

    $('#mob_nav').click(function() {

        if (mobile_status == 0) {

            $('.nav_btns', '.mobile_menu').addClass('m_open');
            $('.mobile_menu').addClass('m_open');

            $('.banner_btns').css('display', 'none');
            $('.main').addClass('m_open');
            mobile_status = 1;
            $('#mob_nav').css('display', 'none');
            $('.nav_close').css('display', 'block');
        }
    })






    $('.main').click(function(e) {


        if (mobile_status != 0) {

            if (mobile_status == 1 && e.target.id != 'mob_nav') {

                $('#mob_nav').css('display', 'block');
                $('.nav_close').css('display', 'none');



                $('.nav_btns', '.mobile_menu').removeClass('m_open');
                $('.banner_btns').css('display', 'block');

                $('.mobile_menu').removeClass('m_open');
                $('.main').removeClass('m_open');
                $('.nav_open').removeClass('current');
                $('.nav_open').addClass('mob');
                mobile_status = 0;

            }



        }

    })

$('#profile_history_share_a').click(function(e){
		e.preventDefault();
			$('.profile_history_detail_wrapper').animate({'opacity':0}, 300, function(){
		$('.profile_history_detail_wrapper').css('display', 'none');
		$('#profile_history_share_wrapper').css('display', 'block');		
		$('#profile_history_share_wrapper').animate({'opacity':1}, 300);

	})
	})

$('#profile_history_like_a').click(function(e){
		e.preventDefault();
			$('.profile_history_detail_wrapper').animate({'opacity':0}, 300, function(){
		$('.profile_history_detail_wrapper').css('display', 'none');
		$('#profile_history_like_wrapper').css('display', 'block');		
		$('#profile_history_like_wrapper').animate({'opacity':1}, 300);

	})
		
})

$('#profile_history_support_a').click(function(e){
		e.preventDefault();
			$('.profile_history_detail_wrapper').animate({'opacity':0}, 300, function(){
		$('.profile_history_detail_wrapper').css('display', 'none');
		$('#profile_history_support_wrapper').css('display', 'block');		
		$('#profile_history_support_wrapper').animate({'opacity':1}, 300);

	})
	})
	
});
