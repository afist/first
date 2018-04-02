$(document).ready(function(){
	
$('.company_img_block').mouseover(function(){
  $(this).children('.company_img_desc').css('color','#f1ad1d');
  $(this).children('.company_img_desc').animate({left:40},0);

});
$('.company_img_block').mouseout(function(){
  $(this).children('.company_img_desc').css('color','#fff');
  $(this).children('.company_img_desc').animate({left:10},0);
});

$('.company_btn1').mouseenter(function(){
$('.company_blog').removeClass('active');
$('.company_blog1').addClass('active');
});
$('.company_btn2').mouseenter(function(){
$('.company_blog').removeClass('active');
$('.company_blog2').addClass('active');

});$('.company_btn3').mouseenter(function(){
$('.company_blog').removeClass('active');	
$('.company_blog3').addClass('active');

});$('.company_btn4').mouseenter(function(){
$('.company_blog').removeClass('active');
$('.company_blog4').addClass('active');

});

var a = 50;
$('.team').click(function(){
	hideTeam();
	setTimeout(function() { $('#team_all').hide(); }, a*13);
	var b ='#'+$(this).attr('class').substr(14, 7);
	setTimeout(function() { $(b).show(); }, a*13);
	
	
})
$('.close').click(function(){
	$(this).parent().hide();
	showTeam();
	
})
function hideTeam(){
	
	$('.team01').delay( 0 ).animate({opacity: '0'});
	$('.team09').delay( a*2 ).animate({opacity: '0'});
	$('.team05').delay( a*3 ).animate({opacity: '0'});
	$('.team03').delay( a*4 ).animate({opacity: '0'});
	$('.team07').delay( a*5 ).animate({opacity: '0'});
	$('.team06').delay( a*6 ).animate({opacity: '0'});
	$('.team08').delay( a*7 ).animate({opacity: '0'});
	$('.team11').delay( a*8 ).animate({opacity: '0'});
	$('.team02').delay( a*9 ).animate({opacity: '0'});
	$('.team12').delay( a*10 ).animate({opacity: '0'});
	$('.team04').delay( a*11 ).animate({opacity: '0'});
	$('.team10').delay( a*12 ).animate({opacity: '0'});
	

}
function showTeam(){
	$('.team01').delay( 0 ).animate({opacity: '1'});
	$('.team09').delay( a*2 ).animate({opacity: '1'});
	$('.team05').delay( a*3 ).animate({opacity: '1'});
	$('.team03').delay( a*4 ).animate({opacity: '1'});
	$('.team07').delay( a*5 ).animate({opacity: '1'});
	$('.team06').delay( a*6 ).animate({opacity: '1'});
	$('.team08').delay( a*7 ).animate({opacity: '1'});
	$('.team11').delay( a*8 ).animate({opacity: '1'});
	$('.team02').delay( a*9 ).animate({opacity: '1'});
	$('.team12').delay( a*10 ).animate({opacity: '1'});
	$('.team04').delay( a*11 ).animate({opacity: '1'});
	$('.team10').delay( a*12 ).animate({opacity: '1'});
	$('.team_all').show();

}




});

$(document).ready(function(){

 $(".regular").slick({
 		autoplay :true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
      });



});