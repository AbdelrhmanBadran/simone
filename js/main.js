


$(document).ready(()=>{
    $('.loading').fadeOut(1000)
})

$('.links a').click(function (){

    let href = $(this).attr('href')
    let postion = $(href).offset().top

    $('html , body').animate({scrollTop : postion } , 3000 );


})







$(window , document ).scroll(()=>{
    let postionAbout = $('#about').offset().top
    // console.log(postionAbout);
    let scrollPostion = $(window).scrollTop();
    
    if (scrollPostion > postionAbout - 50) {
        $('.nav').css({
            'backgroundColor' : '#000',
            'transition'  : '0.5s all'
    })
    }else{
        $('.nav').css({'backgroundColor' : 'transparent'});

    }
}
)
