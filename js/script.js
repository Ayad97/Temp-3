var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$(function () {
    'use strict';  
        $(window).load(function(){
            $('body').css("overflow","auto");

            $('.load-overlay .sk-folding-cube').fadeOut(3000,
            function(){
                $(this).parent().fadeOut(1000,
                function(){
                    $('this').remove();
                })
            })
        });
    
        $('html').niceScroll({
            cursorcolor:'crimson',
            cursorwidth:4,
            cursorborder:'1px solid crimson'
        });
        $('#id01').niceScroll({
            cursorcolor:'crimson',
            cursorwidth:4,
            cursorborder:'1px solid crimson'
        });
        $('#id02').niceScroll({
            cursorcolor:'crimson',
            cursorwidth:4,
            cursorborder:'1px solid crimson'
        });

        $('nav li a , .p-learn ,.angle-dw').click(function(e){
            e.preventDefault();
           
  
            $('html , body').animate({
              scrollTop : $($(this).data('scroll')).offset().top
            },1000);
          });
      
        // $('.carousel').carousel({
        //     interval: 3000
        //   });
        $('.gr-checked').click(function(){
            $('.color-option').fadeToggle();
        });

        $('.option-box ul li').click(function(){
            $("link[href*='color']").attr("href", $(this).attr("data-value"));
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() >= 700){

            $('#scroll-top').show();
            
            }
            else{
                $('#scroll-top').hide()
            }
        });
        $('#scroll-top').click(function(){
            $('html , body').animate({
                scrollTop:0
            },600);
        });
});

//...... #about and #about collisible  .......................

$(".shaked").click(function(){
    $(".shaked").animate({ 
        marginLeft: "-=10px"
    },500).animate({ 
        marginLeft: "+=10px"
    },500)
}); 

$('#about').hover(function()
{
    $(".pos-1").addClass("pos-lf"),
    $(".pos-2").addClass("pos-rgh")
    
});
// ----------------------------------------
$('#features').hover(function()
{
    $(".pos-3").addClass("pos-lf"),
    $(".pos-4").addClass("pos-rgh"),
    $(".pos-4-tp").addClass("pos-tp"),
    $(".pos-4-bt").addClass("pos-bt")

});
$('#skills').hover(function()
{
    $(".pos-5").addClass("pos-lf"),
    $(".pos-6").addClass("pos-rgh")
});
$('#contacts').hover(function()
{
    $(".pos-7").addClass("pos-lf"),
    $(".pos-8").addClass("pos-tp")
});