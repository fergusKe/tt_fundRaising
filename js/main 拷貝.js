$(document).ready(function() {
	
	
	var rnd_pic_int = Math.floor((Math.random() * 3) + 1);
	$('.info_page_rnd_pic').css('display', 'none');
	$('.info_page_rnd_pic').eq(rnd_pic_int -1).css('display', 'block');
	
	
	
			$('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(0).css('display', 'block');
		
		
					$('.faq_tag_a').click(function(e){
/*
						e.preventDefault();
						
			var faq_num = $(this).index('.faq_tag_a');
		
			
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(faq_num).css('display', 'block');
		 
		 $('.faq_tag').eq(faq_num).animate({'opacity':1}, 300);
		 
		}); 
*/
		
	})	
		
		
		
	
	
		$('.package_style').css('display', 'none');
		 $('.package_1 ').css('display', 'block');
	
	
			$('.payment_radio').click(function(){
			var payment_num = $(this).index('.payment_radio');
		
			
		$('.package_style').animate({'opacity':0}, 300, function(){
		
		 $('.package_style').css('display', 'none');
		 $('.package_style').eq(payment_num).css('display', 'block');
		 
		 $('.package_style').eq(payment_num).animate({'opacity':1}, 300);
		 
		}); 
		
	})	
	

			 $('.project_list', '.index_project_list_all').css('display', 'none');
		 $('.projects_hot', '.index_project_list_all').css('display', 'block');
	
	
		 

	$('.hot_type').click(function(e){
		e.preventDefault();
		$('li', '.type_a').removeClass('type_now');
		$(this).addClass('type_now');
		
		$('.project_list', '.index_project_list_all').animate({'opacity':0}, 300, function(){
		
		 $('.project_list' , '.index_project_list_all').css('display', 'none');
		 $('.projects_hot' , '.index_project_list_all').css('display', 'block');
		 
		 $('.projects_hot' , '.index_project_list_all').animate({'opacity':1}, 300);
		 
		}); 
		
	})
	
		$('.new_type').click(function(e){
		e.preventDefault();
	$('li', '.type_a').removeClass('type_now');
		$(this).addClass('type_now');
		$('.project_list' , '.index_project_list_all').animate({'opacity':0}, 300, function(){
		
		 $('.project_list' , '.index_project_list_all').css('display', 'none');
		 $('.projects_new' , '.index_project_list_all').css('display', 'block');
		 
		 $('.projects_new' , '.index_project_list_all').animate({'opacity':1}, 300);
		 
		}); 
		
	})
	
	
	
		$('.time_type').click(function(e){
		e.preventDefault();
	$('li', '.type_a').removeClass('type_now');
		$(this).addClass('type_now');
		$('.project_list' , '.index_project_list_all').animate({'opacity':0}, 300, function(){
		
		 $('.project_list' , '.index_project_list_all').css('display', 'none');
		 $('.projects_time' , '.index_project_list_all').css('display', 'block');
		 
		 $('.projects_time' , '.index_project_list_all').animate({'opacity':1}, 300);
		 
		}); 
		
	})



		$('.successful_type').click(function(e){
		e.preventDefault();
	$('li', '.type_a').removeClass('type_now');
		$(this).addClass('type_now');
		$('.project_list' ,'.index_project_list_all').animate({'opacity':0}, 300, function(){
		
		 $('.project_list', '.index_project_list_all').css('display', 'none');
		 $('.projects_success' ,'.index_project_list_all').css('display', 'block');
		 
		 $('.projects_success', '.index_project_list_all').animate({'opacity':1}, 300);
		 
		}); 
		
	})








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

 $('.slider_text').css('opacity', 0);
 $('.slider_text').eq(0).css('opacity', 1);

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 10000,
        
         onSlideChangeEnd: function (swiper) {
          

           var text_num = swiper.activeIndex;
           if (swiper.activeIndex == 0){
	           text_num = $('.swiper-slide').length -2;
           }
           if (swiper.activeIndex == $('.swiper-slide').length -1){
	           
	           text_num = 1
           }
  
           $('.slider_text').stop().animate({'opacity': 0}, 300, function(){
	           
	             $('.slider_text').eq(text_num - 1).stop().animate({'opacity': 1}, 300);
           });
             
             
             
                }
    })
    








if( $('.testimonial').length )   
{
   var testimonial_tot = $('.testimonial_li').length;
var testimonial_num = 0;


function myMethod( )
{
	
	testimonial_num = testimonial_num + 1;
	
	if (testimonial_num >= testimonial_tot){
		
		testimonial_num = 0;
		
		
	}
	
	$('.testimonial_li').removeClass('current');
	$('.testimonial_li').eq(testimonial_num).addClass('current');
	
  //this will repeat every 5 seconds
  //you can reset counter here
}


setInterval(myMethod, 10000);


}else{

}


    

});
