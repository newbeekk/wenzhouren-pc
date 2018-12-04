$(function () {
    $("#head").load('header.html');
    $("#foot").load('footer.html')
});


//获取地址栏参数  whichIndex的值

function GetQueryString(whichIndex) {
    var reg = new RegExp("(^|&)" + whichIndex + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var whichIndex = GetQueryString('whichIndex');
$($('.sup_nav>li')[whichIndex]).addClass('active').siblings().removeClass('active');
if(whichIndex){
    $('.crumb_nav .changeTxet').text($($('.sup_nav>li')[whichIndex]).text());
}
$($('.sup_body_wrapper>div')[whichIndex]).show().siblings().hide();



$(".sup_nav").on('click', 'li', function () {
    let $liIndex = $(this).index();
    let $liText = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $('.crumb_nav .changeTxet').text($liText);
    $($('.sup_body_wrapper>div')[$liIndex]).show().siblings().hide();
});




//组织机构中的hover属性
$('.tag h3 b').hover(function(e){
    $(this).parent().siblings('div.job_intro').stop().fadeIn()
},function(){
    $(this).parent().siblings('div.job_intro').stop().fadeOut()
});
$('.job_intro').hover(function(e){
    console.log(e)
    e.preventDefault()
})