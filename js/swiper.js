/**
 * Created by lenovo on 2016/8/11.
 */
window.onload = function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        mousewheelControl: true,
        //滚动条
        scrollbar: '.swiper-scrollbar',

        //animate
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('#example').tooltip();

};

