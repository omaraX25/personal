

/* timer of slider */

$('.carousel').carousel({
    interval: 3000
  })

/*color option */

$(".gear-check").click(function(){
$(".color-option").fadeToggle();

});
var colorLi = $(".color-option ul li")
colorLi
.eq(0).css("backgroundColor","#28a745").end()
.eq(1).css("backgroundColor","black").end()
.eq(2).css("backgroundColor","#fdba04 ").end()
.eq(3).css("backgroundColor","red").end()
.eq(4).css("backgroundColor","#049dff");

colorLi.click(function()

{

$("link[href*='color']").attr("href",$(this).attr("data-value"));


});


/*loddong bar */

$(window).load(function()
{

$("body").css("overflow","auto");


$(".loading-overlay h1").fadeOut(2000,
  function()
  {

       $(this).parent().fadeOut(2000);

  });
 });