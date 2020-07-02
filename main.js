//side bar/////////////////////////////////////////////////////////

$('.btn').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});

$('.btn').click(function(){
  $('.contents-wrapper').toggleClass("show");
});

$('.feat-btn').click(function(){
  $('nav ul .feat-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function(){
  $('nav ul .serv-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});

//side bar end/////////////////////////////////////////////////////////


//scroll/////////////////////////////////////////////////////////
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});


  const scroll = new SmoothScroll('.sidebar a[href*="#"]', {
	speed: 500
});

//scroll end///////////////////////////////////////////////////////////

//drip///////////////////////////////////////////////////////////

//drip end///////////////////////////////////////////////////////////



// mugs ///////////////////////////////////////////////////////////////////
$('.mugs-contents>div').hide();
$('.mugs-contents>div').first().slideDown();
$('.mugs-tabs-bottons span').click(function(){
  var thisclass=$(this).attr('class');
$('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
$('.mugs-contents>div').each(function(){
  if($(this).hasClass(thisclass)){
    $(this).fadeIn(800);
  }
  else{
    $(this).hide();
  }
});
});

// mugs end///////////////////////////////////////////////////////////////////