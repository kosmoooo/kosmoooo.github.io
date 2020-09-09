function ShowCountDown() {
    var now = new Date();
    var yearx = now.getFullYear();
    var hourx = now.getHours();

    var monthx = now.getMonth();
    var datex = now.getDate();
    var day0 = now.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[day0];


    console.log(yearx)
    var year = document.getElementById("year");
    year.innerHTML = yearx;
    var date = document.getElementById("date");
    date.innerHTML = monthx + 1 + "月" + datex + "日" + "<br>" + week;

}
window.ShowCountDown();
$(document).ready(function() {
    $(".navgiator> ul > li").hover(function() {
        $(".subnav").hide();
        $(this).find(".subnav").show();
        $(this).addClass("hovered_li")
    }, function() {

        $(this).removeClass("hovered_li")
        $(".subnav").hide();
    });
    jQuery(document).ready(function($) {
        $(".my-slider").unslider({
            speed: 200,
            delay: 15000,
            autoplay: true
        });
    });
    $(".tab li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabcontentWrap .tabcontent").eq(index).show().siblings().hide();
    });
    $(".tab2 li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".twoClom .tabcontent2").eq(index).show().siblings().hide();
    });
    $(".tab3 li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabcontentWrap3 .tabcontent").eq(index).show().siblings().hide();
    });
    $(".tab4 li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabcontentWrap4 .tabcontent").eq(index).show().siblings().hide();
    });
    $(document).ready(function() {
        jQuery(".scroll_topic").jcarousel({
            scroll: 1,
            wrap: 'circular',
        });
        jQuery(".imgs_scroll_box").jcarousel({
            scroll: 1,
            wrap: 'circular',
        });
        $('.topic-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.topic-next')
            .jcarouselControl({
                target: '+=1'
            });
    });

    (function($) {
        $(function() {
            var jcarousel = $('.scroll_topic');

            jcarousel
                .on('jcarousel:reload jcarousel:create', function() {
                    var carousel = $(this),
                        width = carousel.innerWidth();

                    if (width >= 1024) {
                        width = width / 2;
                    } else if (width >= 768) {
                        width = width / 1;
                    }

                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });

            $('.jcarousel-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });

            $('.jcarousel-control-next')
                .jcarouselControl({
                    target: '+=1'
                });

            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .on('click', function(e) {
                    e.preventDefault();
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function(page) {
                        return '<a href="#' + page + '">' + page + '</a>';
                    }
                });
        });
    })(jQuery);

    $(".link_W_Sub").click(function() {
        event.stopPropagation();
        if ($(this).find(".link_hidden_box").is(':hidden')) {
            $(".link_W_Sub").removeClass("expended");
            $(".link_W_Sub").find(".link_hidden_box").hide();

            $(this).find(".link_hidden_box").show();
            $(this).addClass("expended");
        } else {

            $(this).find(".link_hidden_box").hide();
            $(this).removeClass("expended");
        }
        var bottom_link_h = $(this).find(".link_hidden_box").height() + 1;
        $(this).find(".link_hidden_box").css("top", "-" + bottom_link_h + "px")
    })
    $(".link_hidden_box").click(function() {
        event.stopPropagation();
    });
    $(document).click(function() {
        $(".link_W_Sub").removeClass("expended");
        $(".link_hidden_box").hide();

    });
    $(".font_size_select a").click(function() {
        var font_txt = $(this).text();
        $(this).addClass("selected").siblings().removeClass("selected");
        console.log(font_txt);
        if (font_txt == "大") {
            $(".txt_box p").css("font-size", "18px");
            $(".txt_box p").css("line-height", "36px")

        } else if (font_txt == "中") {
            $(".txt_box p").css("font-size", "16px");
            $(".txt_box p").css("line-height", "32px")
        } else if (font_txt == "小") {
            $(".txt_box p").css("font-size", "14px");
            $(".txt_box p").css("line-height", "28px")
        } else {
            $(".txt_box p").css("font-size", "16px");
            $(".txt_box p").css("line-height", "32px")
        }



    })
})


function preview(oper) {
    if (oper < 10) {
        bdhtml = window.document.body.innerHTML; //获取当前页的html代码
        sprnstr = "<!--startprint" + oper + "-->"; //设置打印开始区域
        eprnstr = "<!--endprint" + oper + "-->"; //设置打印结束区域
        prnhtml = bdhtml.substring(bdhtml.indexOf(sprnstr) + 18); //从开始代码向后取html
        prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr)); //从结束代码向前取html
        window.document.body.innerHTML = prnhtml;
        window.print();
        window.document.body.innerHTML = bdhtml;
        location.reload()
    } else {
        window.print();
        location.reload()
    }
}