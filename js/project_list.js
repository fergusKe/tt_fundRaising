$(document).ready(function() {
	
	

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

/*
			 $('.type_iframe').css('display', 'none');
		 $('#type_hot').css('display', 'block');

	
	$('.hot_type').click(function(e){
		e.preventDefault();
		$('a', '.project_type').css('color','#212121');
		$('a','.hot_type').css('color','#c82439');		
		$('.type_iframe').animate({'opacity':0}, 300, function(){
		
		 $('.type_iframe').css('display', 'none');
		 $('#type_hot').css('display', 'block');
		 
		 $('#type_hot').animate({'opacity':1}, 300);
		 
		}); 
		
	})
	
		$('.new_type').click(function(e){
		e.preventDefault();
$('a', '.project_type').css('color','#212121');
		$('a','.new_type').css('color','#c82439');	
		$('.type_iframe').animate({'opacity':0}, 300, function(){
		
		 $('.type_iframe').css('display', 'none');
		 $('#type_new').css('display', 'block');
		 
		 $('#type_new').animate({'opacity':1}, 300);
		 
		}); 
		
	})
	
	
	
		$('.time_type').click(function(e){
		e.preventDefault();
$('a', '.project_type').css('color','#212121');
		$('a','.time_type').css('color','#c82439');	
		$('.type_iframe').animate({'opacity':0}, 300, function(){
		
		 $('.type_iframe').css('display', 'none');
		 $('#type_time').css('display', 'block');
		 
		 $('#type_time').animate({'opacity':1}, 300);
		 
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
*/





});



jQuery(document).ready(function() {
	//location.href = 'index.html#start';
	var pages = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
	var current = 0; //the index of the starting page. 0 for index.html in this case
	var loaded = new Array(); //key value array to prevent loading a page more than once
	var click_all = 0;


	//get all the pages link inside the #pages div and fill an array
	$('#pages_all a').each(function(index) {
		pages[index] = $(this).attr('href');
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
	});

	var pages_hot = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
	var current_hot = -1; //the index of the starting page. 0 for index.html in this case
	var loaded_hot = new Array(); //key value array to prevent loading a page more than once
	var click_hot = 0;


	//get all the pages link inside the #pages div and fill an array
	$('#pages_hot a').each(function(index) {
		pages_hot[index] = $(this).attr('href');
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
	});
	
	
		var pages_time = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
	var current_time = 0; //the index of the starting page. 0 for index.html in this case
	var loaded_time = new Array(); //key value array to prevent loading a page more than once
	var click_current= 0;


	//get all the pages link inside the #pages div and fill an array
	$('#pages_time a').each(function(index) {
		pages_time[index] = $(this).attr('href');
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
	});
	
	var pages_success = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
	var current_success = 0; //the index of the starting page. 0 for index.html in this case
	var loaded_success = new Array(); //key value array to prevent loading a page more than once
	var click_success = 0;

	//get all the pages link inside the #pages div and fill an array
	$('#pages_success a').each(function(index) {
		pages_success[index] = $(this).attr('href');
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
	});
	
		var pages_new = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
	var current_new = 0; //the index of the starting page. 0 for index.html in this case
	var loaded_new = new Array(); //key value array to prevent loading a page more than once
	var click_new = 0;

	//get all the pages link inside the #pages div and fill an array
	$('#pages_new a').each(function(index) {
		pages_new[index] = $(this).attr('href');
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
	});
	
	

	var current_type = 'hot';
	var init_check = false;
	$('#loader0').css('display', 'block');

	loaded_hot[pages_hot[current_hot+1]] = loaded_hot[pages_hot[current_hot+1]] + 1; 
	if(loaded_hot[pages_hot[current_hot+1]] <= 1){
	loadMoreContent(current_hot+1);	
	}


	$('.all_type2').click(function(e){
			e.preventDefault();
		if (current_type != 'all'){
		
		
		$('#loader0').css('display', 'block');
		$('#loader').css('display', 'none');

	
		current_type = 'all';
		current = 0;
		current_hot = 0;
		current_time = 0;
		current_success= 0;
		current_new= 0;
		
		click_all = 0;
		click_hot = 0;
		click_time = 0;
		click_success= 0;
		click_new= 0;
	
		$('a', $('.hot_type')).css('color', '#212121');
		$('a', $('.new_type')).css('color', '#212121');
		$('a', $('.time_type')).css('color', '#212121');
		$('a', $('.success_type')).css('color', '#212121');
		$('a', $('.all_type2')).css('color', '#c82439');
		
		$('#pages_hot a').each(function(index) {
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_all a').each(function(index) {	
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_time a').each(function(index) {	
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_success a').each(function(index) {	
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_new a').each(function(index) {	
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		init_check == false;

	
		$('.project_list').empty()
			loadMoreContent(0);
			
			}
	})

	$('.new_type').click(function(e){
			e.preventDefault();
		if (current_type != 'new'){
	
		$('#loader0').css('display', 'block');
		$('#loader').css('display', 'none');
	
		
	
		current_type = 'new';
		current = 0;
		current_hot = 0;
		current_time = 0;
		current_success= 0;
		current_new= 0;
		
				click_all = 0;
		click_hot = 0;
		click_time = 0;
		click_success= 0;
		click_new= 0;
	
		$('a', $('.hot_type')).css('color', '#212121');
		$('a', $('.new_type')).css('color', '#c82439');
		$('a', $('.time_type')).css('color', '#212121');
		$('a', $('.success_type')).css('color', '#212121');
		$('a', $('.all_type2')).css('color', '#212121');
		
		$('#pages_hot a').each(function(index) {
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_all a').each(function(index) {	
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_time a').each(function(index) {	
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_success a').each(function(index) {	
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_new a').each(function(index) {	
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		init_check == false;
// 		$('#loader').css('display', 'block');
		$('.project_list').empty()
			loadMoreContent(0);
			
			
			}
	})



	$('.hot_type').click(function(e){
			e.preventDefault();
		if (current_type !='hot'){
		
		
		$('#loader0').css('display', 'block');
		$('#loader').css('display', 'none');
		
	
		current_type = 'hot';
		current = 0;
		current_hot = 0;
		current_time = 0;
		current_success= 0;
		current_new= 0;
		
				click_all = 0;
		click_hot = 0;
		click_time = 0;
		click_success= 0;
		click_new= 0;
		
		$('a', $('.hot_type')).css('color', '#c82439');
		$('a', $('.new_type')).css('color', '#212121');
		$('a', $('.time_type')).css('color', '#212121');
		$('a', $('.success_type')).css('color', '#212121');
		$('a', $('.all_type2')).css('color', '#212121');
		
		
		
		$('#pages_hot a').each(function(index) {
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_all a').each(function(index) {	
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_time a').each(function(index) {	
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_success a').each(function(index) {	
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_new a').each(function(index) {	
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		init_check == false;
	// 	$('#loader').css('display', 'block');
		$('.project_list').empty()
			loadMoreContent(0);
			
			}
	})


		$('.time_type').click(function(e){
				
		e.preventDefault();
		if(current_type != 'time'){
			
		$('#loader0').css('display', 'block');
		$('#loader').css('display', 'none');
			
			
		current_type = 'time';
		current = 0;
		current_hot = 0;
		current_time = 0;
		current_success= 0;
		current_new= 0;
		
				click_all = 0;
		click_hot = 0;
		click_time = 0;
		click_success= 0;
		click_new= 0;
		
		$('a', $('.hot_type')).css('color', '#212121');
		$('a', $('.new_type')).css('color', '#212121');
		$('a', $('.time_type')).css('color', '#c82439');
		$('a', $('.success_type')).css('color', '#212121');
		$('a', $('.all_type2')).css('color', '#212121');
		
		
		
		$('#pages_hot a').each(function(index) {
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_all a').each(function(index) {	
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_time a').each(function(index) {	
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_success a').each(function(index) {	
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_new a').each(function(index) {	
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		init_check == false;
	// 	$('#loader').css('display', 'block');
		$('.project_list').empty()
			loadMoreContent(0);
			}
	})
	
	
		$('.success_type').click(function(e){
		e.preventDefault();
		if (current_type !='success'){
			
			
		$('#loader0').css('display', 'block');
		$('#loader').css('display', 'none');
			
			
		current_type = 'success';
		current = 0;
		current_hot = 0;
		current_time = 0;
		current_success= 0;
		current_new= 0;
		
				click_all = 0;
		click_hot = 0;
		click_time = 0;
		click_success= 0;
		click_new= 0;
		
		$('a', $('.hot_type')).css('color', '#212121');
		$('a', $('.new_type')).css('color', '#212121');
		$('a', $('.time_type')).css('color', '#212121');
		$('a', $('.success_type')).css('color', '#c82439');
		$('a', $('.all_type2')).css('color', '#212121');
		
		
		
		$('#pages_hot a').each(function(index) {
		loaded_hot[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_all a').each(function(index) {	
		loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_time a').each(function(index) {	
		loaded_time[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_success a').each(function(index) {	
		loaded_success[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		$('#pages_new a').each(function(index) {	
		loaded_new[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
		});
		init_check == false;
		
	// 	$('#loader').css('display', 'block');
		$('.project_list').empty()
			loadMoreContent(0);
			}
	})
	

	//on scroll gets when bottom of the page is reached and calls the function do load more content
	$(window).scroll(function(e){
		//Not always the pos == h statement is verified, expecially on mobile devices, that's why a 300px of margin are assumed.
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 300 - 500 && $('.project_list').css('opacity') == 1) {
			console.log("bottom of the page reached!");
			console.log('current_num:' + current);

			//in some broswer (es. chrome) if the scroll is fast, the bottom 
			//reach events fires several times, this may cause the page loaging 
			//more than once. To prevent such situation every time the bottom is 
			//reached the number of time is added to that page in suach a way to call 
			//the loadMoreContent page only when the page value in "loaded" array is 
		
			if (current_type == 'all' && init_check == true){
			
			//minor or equal to one
			loaded[pages[current+1]] = loaded[pages[current+1]] + 1; 

			if(loaded[pages[current+1]] <= 1)
				loadMoreContent(current+1);
			}
			
			if (current_type == 'hot' && init_check == true){
			
						//minor or equal to one
			loaded_hot[pages_hot[current_hot+1]] = loaded_hot[pages_hot[current_hot+1]] + 1; 

			if(loaded_hot[pages_hot[current_hot+1]] <= 1)
				loadMoreContent(current_hot+1);	
				
			}
			
			if (current_type == 'time' && init_check == true){
			
				
						//minor or equal to one
			loaded_time[pages_time[current_time+1]] = loaded_time[pages_time[current_time+1]] + 1; 

			if(loaded_time[pages_time[current_time+1]] <= 1)
				loadMoreContent(current_time+1);	
				
			}
			
			if (current_type == 'success' && init_check == true){
			
				
						//minor or equal to one
			loaded_success[pages_success[current_success+1]] = loaded_success[pages_success[current_success+1]] + 1; 

			if(loaded_success[pages_success[current_success+1]] <= 1)
				loadMoreContent(current_success+1);	
				
			}
			
			if (current_type == 'new' && init_check == true){
		
				
						//minor or equal to one
			loaded_new[pages_new[current_new+1]] = loaded_new[pages_new[current_new+1]] + 1; 

			if(loaded_new[pages_new[current_new+1]] <= 1)
				loadMoreContent(current_new+1);	
				
			}
			
		}
	});

	//loads the next page and append it to the content with a fadeIn effect. 
	//Before loading the content it shows and hides the loaden Overlay DIV
	function loadMoreContent(position) {
		//try to load more content only if the counter is minor than the number of total pages
		
			if (current_type == 'all' ){
		
		if(position < pages.length) {
			
			if (click_all != 0){
					$('#loader').css('display', 'block');
	}
		
			$('.project_list').fadeIn('fast', function() {
				$.get(pages[position], function(data) {
					$('.project_list').fadeOut('fast', function() {
						$('.project_list').append(data).fadeIn(999, function(){
									init_check = true;
									$('#loader').css('display', 'none');
	
									click_all =1;	
									
									
						});
						current=position;
					});
				});
			});
		}
		
		}
		
		if (current_type == 'hot' ){
			
				if(position < pages_hot.length) {
					
					
						if (click_hot != 0){
						$('#loader').css('display', 'block');
				}
				
				
			$('.project_list').fadeIn('fast', function() {
				$.get(pages_hot[position], function(data) {
					$('.project_list').fadeOut('fast', function() {
								$('.project_list').append(data).fadeIn(999, function(){
									init_check = true;
									$('#loader').css('display', 'none');
				click_hot =1;
						});
						current_hot=position;
					});
				});
			});
		}	
			
		}
		
		if (current_type == 'time'){
			
				if(position < pages_time.length) {
					
						if (click_time != 0){
						$('#loader').css('display', 'block');
	}
					
			$('.project_list').fadeIn('fast', function() {
				$.get(pages_time[position], function(data) {
					$('.project_list').fadeOut('fast', function() {
									$('.project_list').append(data).fadeIn(999, function(){
									init_check = true;
									$('#loader').css('display', 'none');
					click_new = 1;
						});
						current_time=position;
					});
				});
			});
		}	
			
		}
		
		if (current_type == 'success'){
			
				if(position < pages_success.length) {
					
						if (click_success != 0){
						$('#loader').css('display', 'block');
					}
			$('.project_list').fadeIn('fast', function() {
				$.get(pages_success[position], function(data) {
					$('.project_list').fadeOut('fast', function() {
								$('.project_list').append(data).fadeIn(999, function(){
									init_check = true;
									$('#loader').css('display', 'none');
							click_success = 1;
						});
						current_success=position;
					});
				});
			});
		}	
			
		}
		
		if (current_type == 'new' ){
			
				if(position < pages_new.length) {
						if (click_new != 0){
						$('#loader').css('display', 'block');
	}
			$('.project_list').fadeIn('fast', function() {
				$.get(pages_new[position], function(data) {
					$('.project_list').fadeOut('fast', function() {
									$('.project_list').append(data).fadeIn(999, function(){
									init_check = true;
									$('#loader').css('display', 'none');
									click_new = 1;
						});
						current_new=position;
					});
				});
			});
		}	
			
		}
		
		
		
	}
	


$( document ).ajaxComplete(function(  ) {

console.log('complete');

 	$('#loader0').css('display', 'none');



});


	
});