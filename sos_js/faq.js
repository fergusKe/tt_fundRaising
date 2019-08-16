$(document).ready(function() {
	
	
// HASHTAG CONTROL

function hashtagger(){

if(window.location.hash) {
	
var hash = window.location.hash.substring(1);

if(hash == 'sos'){
		
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(0).css('display', 'block');
		 
		 $('.faq_tag').eq(0).animate({'opacity':1}, 300);
		 
		}); 

}

if(hash == 'crowd'){
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(1).css('display', 'block');
		 
		 $('.faq_tag').eq(1).animate({'opacity':1}, 300);
		 
		}); 

}

if(hash == 'return'){
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(2).css('display', 'block');
		 
		 $('.faq_tag').eq(2).animate({'opacity':1}, 300);
		 
		}); 

}


if(hash == 'subscribe'){
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(3).css('display', 'block');
		 
		 $('.faq_tag').eq(3).animate({'opacity':1}, 300);
		 
		}); 

}


if(hash == 'payment'){
		$('.faq_tag').animate({'opacity':0}, 300, function(){
		
		 $('.faq_tag').css('display', 'none');
		 $('.faq_tag').eq(4).css('display', 'block');
		 
		 $('.faq_tag').eq(4).animate({'opacity':1}, 300);
		 
		}); 

}

	

} else {
	

}

}

hashtagger();

window.addEventListener("popstate", function(e) {

	hashtagger();
})

    

});
