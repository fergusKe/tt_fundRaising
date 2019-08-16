$(document).ready(function() {






/*
  var container = document.querySelector('.project_list');
  var msnry = new Masonry( container, {
"columnWidth":".project",
"itemSelector": ".project",
isFitWidth: true
  });

msnry.bindResize();

$('.project_list').masonry()
*/

  // no method is same as layout -> .masonry('layout')





var hot_array=new Array();
hot_array.push($('.label_hot'));

var new_array=new Array();
new_array.push($('.label_new'));

var time_array=new Array();
time_array.push($('.label_time'));

var success_array=new Array();
success_array.push($('.label_success'));

var begin_array=new Array();
begin_array.push($('.label_begin'));

$('.hot_type').click(function(event){
event.preventDefault();




$('.label_begin').css('display', 'none');
$('.label_new').css('display', 'none');
$('.label_time').css('display', 'none');
$('.label_success').css('display', 'none');

$('.label_hot').css('display', 'block');

// msnry.layout();





})

$('.new_type').click(function(event){
event.preventDefault();




$('.label_begin').css('display', 'none');
$('.label_new').css('display', 'block');
$('.label_time').css('display', 'none');
$('.label_success').css('display', 'none');

$('.label_hot').css('display', 'none');

// msnry.layout();






})

$('.time_type').click(function(event){
event.preventDefault();


$('.label_begin').css('display', 'none');
$('.label_new').css('display', 'none');
$('.label_time').css('display', 'block');
$('.label_success').css('display', 'none');

$('.label_hot').css('display', 'none');

// msnry.layout();
})

$('.success_type').click(function(event){
event.preventDefault();



$('.label_begin').css('display', 'none');
$('.label_new').css('display', 'none');
$('.label_time').css('display', 'none');
$('.label_success').css('display', 'block');

$('.label_hot').css('display', 'none');

//  msnry.layout();


})

$('.begin_type').click(function(event){
event.preventDefault();


$('.label_begin').css('display', 'block');
$('.label_new').css('display', 'none');
$('.label_time').css('display', 'none');
$('.label_success').css('display', 'none');

$('.label_hot').css('display', 'none');

// msnry.layout();
})

$('.all_type2').click(function(event){
event.preventDefault();


$('.label_begin').css('display', 'block');
$('.label_new').css('display', 'block');
$('.label_time').css('display', 'block');
$('.label_success').css('display', 'block');

$('.label_hot').css('display', 'block');

// msnry.layout();
})

// or with vanilla JS



  // filter functions
  
  

  
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


	
});
