var scoll = $(window).scrollTop();
var doc_height = $(document).height();
var doc_width = $(document).width();
var window_height = $(window).height();
var window_width = $(window).width();
var foot_height = $(".footer").height();
$(".icon_back_top").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
})

//alert(window_width);
$(window).scroll(function() {
    var scoll = $(window).scrollTop();
    var doc_height = $(document).height();
    var window_height = $(window).height();
    var foot_height = $(".footer").height();
    //console.log(scoll + ":" + window_height + ":" + doc_height);
    //$(".fixed_Btn").animate({ top: scoll + window_height / 2 }, 10);
    $(".linlin_box").css("top", scoll + window_height / 2 - 320);
    $(".fixed_Btn").css("top", scoll + window_height / 2);
    $(".flow_btn").css("top", scoll + 240);
    $(".flow_btn2").css("top", "auto");

    if (scoll + window_height <= doc_height - foot_height) {
        //$(".navigator").addClass("fixed");

    } else {
        //$(".navigator").removeClass("fixed");
    }
    $(".backimg").css("top", scoll + "px");
    $(".backimg").css("filter", "blur(" + scoll * 0.1 + "px)");
    $(".backimg2").css("top", scoll * 1.5 + "px");
    $(".backimg2").css("filter", "blur(" + scoll * 0.1 + "px)");
    $(".background_white").animate({ "background": "rgba(255,255,255,1)" });
    $(".top_left_conr").css("top", scoll + "px");
    //console.log(doc_height - foot_height - window_height + "," + scoll + ",窗口高度" + window_height)
    if (scoll > 100) {
        $(".backimg").fadeOut();
        $(".backimg2").fadeOut();
        $(".corrner").fadeOut();
        $(".flow_btn2").fadeIn()

    } else {
        $(".backimg").fadeIn();
        $(".backimg2").fadeIn();
        $(".corrner").fadeIn();
        $(".flow_btn2").fadeOut()
    }
    if (scoll > 80) {
        $(".v_fixed_box").addClass("positionA");
        //$(".v_fixed_box").css("top", scoll - 80 + "px");
        $(".v_fixed_box").animate({ "top": scoll - 80 }, 0);

    } else {

        $(".v_fixed_box").removeClass("positionA");
        $(".v_fixed_box").css("top", "0px");
    }

    if (scoll > 242) {
        //$(".staticNav").fadeOut();
        $(".fixedNav").fadeIn();



    } else {
        //$(".staticNav").fadeIn();
        $(".fixedNav").fadeOut();
    }
    if (scoll >= 80) {
        $(".navigator_position").fadeIn();
    } else {
        $(".navigator_position").fadeOut();
    }
    //找政策
    // if ($(document).scrollTop() >= $(document).height() - $(window).height() - foot_height + 50) {
    //     console.error("滚动条已经到达页脚为" + $(document).scrollTop());
    // }
    var boxheight = $(".v_fixed_box").height();
    var filehight = $(".file").height();


    //console.warn(st + "盒子高度:" + boxheight + " 内容高度:" + filehight + " 滚动条:" + scoll + " 窗口高度:" + window_height + " 文档高度:" + doc_height + " 页脚高度:" + foot_height)
    if ($(document).scrollTop() >= $(document).height() - $(window).height() - foot_height) {
        $(".v_fixed_box").css("top", filehight - boxheight + 50 + "px");
    } else {}

});

$(document).ready(function() {

    console.warn(scoll + window_height / 2 - 320);
    //意见征集条数控制 默认 最后两条隐藏
    $('.opiner_list li:gt(1)').hide();
    $(".fixed_Btn").css("top", scoll + window_height / 2);

    //限制要闻字符
    // $(".news_List_mod_sp li a").each(function() {
    //     var maxwidth = 54;
    //     if ($(this).text().length > maxwidth) {
    //         $(this).text($(this).text().substring(0, maxwidth));
    //         $(this).html($(this).html() + '...');
    //     }
    // });
    //重要会议限制字符


    // $(".news_List_W_timebar li a").each(function() {
    //     var maxwidth = 52;
    //     if ($(this).text().length > maxwidth) {
    //         $(this).text($(this).text().substring(0, maxwidth));
    //         $(this).html($(this).html() + '...');
    //     }
    // });
    //限制手机图片视频
    $(".artical_title h3").each(function() {
        var maxwidth = 34;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + '...');
        }
    });

    //限制重要会议字符
    // $(".news_List_W_timebar li a").each(function() {
    //     var maxwidth = 54;
    //     if ($(this).text().length > maxwidth) {
    //         $(this).text($(this).text().substring(0, maxwidth));
    //         $(this).html($(this).html() + '...');
    //     }
    // });

    $(".fixedNav span").click(function() {
        $(".fixedNav_content").fadeIn();

    });
    $(".closeNav").click(function() {
        $(".fixedNav_content").fadeOut();

    });
    $(".link_box").click(function() {
        $(this).find(".long_name_list").toggle();

    });
    //搜索按钮效果
    $(".search_w_static_nav").hover(function() {
        $(".scope_icon").animate({ "height": "40px" }, 200)

    }, function() {
        $(".scope_icon").animate({ "height": "64px" })

    })
    $(".search_w_static_nav").click(function() {
        $(".search_Bar").show();
    })
    $(".close_Search_bar").click(function() {
        $(".search_Bar").hide();

    });
    //省长简历
    $(".shengzhang_info_list li a").hover(function() {
        $(this).find("div").stop().animate({ "background-position": "20px" });
        $(this).find("span").stop().animate({ "margin-left": "96px" })

    }, function() {
        $(this).find("div").stop().animate({ "background-position": "5px" })
        $(this).find("span").stop().animate({ "margin-left": "76px" })

    });
    //专题
    $(".topic_List li a span").each(function() {

        var toopic_h = $(this).height();
        $(this).css("margin-top", "-" + toopic_h / 2 + "px");
    });
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
        var bottom_link_h = $(this).find(".link_hidden_box").height();
        $(this).find(".link_hidden_box").css("top", "-" + bottom_link_h + "px")
    })
    $(".link_hidden_box").click(function() {
        event.stopPropagation();
    });
    //省政府机构
    $(".cell_w_con").click(function() {
        var index = $(".cell_w_con").index(this);
        var i_t = index + 1;
        $(".agency_Content_Detial").hide();
        $("#agency" + i_t).show();
        $(".cell_w_con").removeClass("active");
        $(this).addClass("active");
    });
    $(".news_List_W_timebar li span").last().addClass("last")

});
$('.img-a-size-box img').jqthumb({
    width: '100%',
    height: '100%',
    position: { top: '50%', left: '50%' }
});

jQuery(document).ready(function($) {
    $(".my-slider").unslider({
        speed: 200,
        delay: 15000,
        autoplay: true
    });
});
jQuery(document).ready(function($) {
    $(".data_slider").unslider({
        speed: 200,
        delay: 15000,
        autoplay: true,
        arrows: false
    });
});
jQuery(document).ready(function() {
    jQuery("#recomm_A").jcarousel({
        vertical: true,
        scroll: 1
    });
});

function mycarousel_initCallback(carousel) {
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

jQuery(document).ready(function() {
    jQuery('#air_Quality_A').jcarousel({
        vertical: true,
        auto: 2,
        scroll: 1,
        wrap: 'circular',
        initCallback: mycarousel_initCallback
    });
    $('#air_Quality_A').jcarousel({
        vertical: true,
        animation: 'slow',
        wrap: 'circular'
    }).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });
    $('.controller_Up')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.controller_Down')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
    //

});
//顶部专题
jQuery(document).ready(function() {
        $('.main_Topic').jcarousel({
            scroll: 1,
            auto: 1,
            animation: 'slow',
            wrap: 'circular'
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.page_topic')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    })
    //推荐应用收起后
jQuery(document).ready(function() {
    $('.recomm_frame_V_Sm').jcarousel({
        vertical: true,
        animation: 'slow',
        wrap: 'circular'
    });
    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
});
$(document).ready(function() {
    $("#showcase").awShowcase({
        content_width: 440,
        content_height: 242,
        fit_to_parent: false,
        auto: false,
        interval: 3000,
        continuous: true,
        loading: true,
        tooltip_width: 200,
        tooltip_icon_width: 32,
        tooltip_icon_height: 32,
        tooltip_offsetx: 18,
        tooltip_offsety: 0,
        arrows: true,
        buttons: true,
        btn_numbers: true,
        keybord_keys: true,
        mousetrace: false,
        pauseonover: true,
        stoponclick: false,
        transition: "hslide",
        transition_delay: 0,
        transition_speed: 500,
        show_caption: "onload",
        thumbnails: false,
        thumbnails_position: "outside-last",
        thumbnails_direction: "vertical",
        thumbnails_slidex: 1,
        dynamic_height: false,
        speed_change: true,
        viewline: false,
        custom_function: null
    });
    //专题
    $("#showcase2").awShowcase({
        content_width: 560,
        content_height: 242,
        fit_to_parent: false,
        auto: true,
        interval: 3000,
        continuous: true,
        loading: true,
        tooltip_width: 200,
        tooltip_icon_width: 32,
        tooltip_icon_height: 32,
        tooltip_offsetx: 18,
        tooltip_offsety: 0,
        arrows: false,
        buttons: true,
        btn_numbers: false,
        keybord_keys: true,
        mousetrace: false,
        pauseonover: true,
        stoponclick: false,
        transition: "hslide",
        transition_delay: 0,
        transition_speed: 500,
        show_caption: "onload",
        thumbnails: false,
        thumbnails_position: "outside-last",
        thumbnails_direction: "vertical",
        thumbnails_slidex: 1,
        dynamic_height: false,
        speed_change: true,
        viewline: false,
        custom_function: null
    });
});

$(document).ready(function() {
    $(".topic_box ul li").last().css("margin-right", "0px");
    $(".air_Details").find(".color_vis em").each(function() {
        if ($(this).text() == "优") {
            $(this).addClass("excellent");
        } else if ($(this).text() == "良") {
            $(this).addClass("good");
        } else if ($(this).text() == "差") {
            $(this).addClass("bad");
        }

    })

    //默认状态
    // var h = $(".left_s").height();
    // var h2 = $(".right_n").height();
    // //console.log(h + ":" + h2);
    // $(".left_s").css("height", h2 + 50);

    //关闭省长
    $(".close_shengzhang").click(function() {
        var h2 = $(".right_n").height();
        //$("#shengzhangzhici_Box").hide();
        $("#shengzhangzhici_Box").animate({ "top": "-200px" });
        $(".right_n").animate({ "padding-top": "0px" });
        $(".left_s").animate({ "height": h2 + 50 });

    });

    //var maxwidth = 200;
    var maxwidth2 = 110;
    var text_length = $(".effect_Box p").text().length;
    var text_txt = $(".effect_Box p").text();
    //console.log(text_txt);
    //console.log(text_length);
    if (text_length > maxwidth2) {
        $(".effect_Box p").text(text_txt.substring(0, maxwidth2))
        $(".effect_Box p").html($(".effect_Box p").html() + '...')
            //console.log(text_txt.substring(0, maxwidth2));
            //$(this).text($(this).text().substring(0, maxwidth));
            //$(this).html($(this).html() + '...');
    }

    //展开收起
    $(".fixed_Btn").click(function() {
        $(".linlin_box").hide(); //关闭林林

        //console.log(p1);
        // var h3 = $(".right_n").height();
        // //console.log(h3);
        // $(".left_s").css("height", h3 + 50);
        //$(".collapsed_show").css("height", "0");
        $(".collapsed_show").css("overflow", "hidden");
        //意见征集条数控制 收起后 最后两条隐藏
        $('.opiner_list li:gt(1)').hide();
        if ($("#content_Height").hasClass("side_Collapse")) {
            $("#content_Height").removeClass("side_Collapse");
            $('.unslider-wrap .img-a-size-box img').jqthumb({
                width: '100%',
                height: '100%',
                position: { top: '50%', left: '50%' }
            });
            if ($("#page_Wrap").width() < 1280) {
                $(".fixed_Btn").css("left", "514px");
            } else {
                $(".fixed_Btn").css("left", "543px");
            }

            var img_path = "../images/cosmos_fixedarrow@2x.png"
            $(this).find("img").attr("src", img_path);
            // $("#shengzhangzhici_Box").removeClass("shengzhang_Long");
            // var h3 = $(".right_n").height();
            // //console.log(h3);
            // $(".left_s").css("height", h3 + 50);
            //专题
            $(".topic_List li a span").each(function() {

                var toopic_h = $(this).height();
                $(this).css("margin-top", "-" + toopic_h / 2 + "px");
            });
            var maxwidth2 = 110;
            if (text_length > maxwidth2) {
                $(".effect_Box p").text(text_txt.substring(0, maxwidth2))
                $(".effect_Box p").html($(".effect_Box p").html() + '...')
                    //$(this).text($(this).text().substring(0, maxwidth));
                    //$(this).html($(this).html() + '...');
            }


        } else {
            $("#content_Height").addClass("side_Collapse");
            $('.side_Collapse .unslider-wrap .img-a-size-box img').jqthumb({
                width: '100%',
                height: '100%',
                position: { top: '50%', left: '50%' }
            });
            $(".fixed_Btn").css("left", "205px");
            $(".collapsed_show").css("height", "auto");
            $(".collapsed_show").css("overflow", "visible");
            //意见征集条数控制 展开 最后两条显示
            $('.opiner_list li:gt(1)').show();
            var img_path = "../images/cosmos_fixedarrow_zhankai@2x.png"
            $(this).find("img").attr("src", img_path);
            $("#shengzhangzhici_Box").addClass("shengzhang_Long");
            // var h3 = $(".right_n").height();
            // //console.log(h3);
            // $(".left_s").css("height", h3 + 50);
            //专题
            $(".topic_List li a span").each(function() {

                var toopic_h = $(this).height();
                $(this).css("margin-top", "-" + toopic_h / 2 + "px");
            });
            var maxwidth2 = 150;
            if (text_length > maxwidth2) {
                $(".effect_Box p").text(text_txt.substring(0, maxwidth2))
                $(".effect_Box p").html($(".effect_Box p").html() + '...')
                    //$(this).text($(this).text().substring(0, maxwidth));
                    //$(this).html($(this).html() + '...');
            }
        }
    });

    //站群

    $(document).click(function() {
        $(".site_nav").animate({ "height": "0px" });
        $(".icon_site").removeClass("close_ready");
        $(".link_W_Sub").removeClass("expended");
        $(".link_hidden_box").hide();

    });
    $(".icon_site").click(function() {
        event.stopPropagation();
        if ($(this).hasClass("close_ready")) {
            $(".site_nav").animate({ "height": "0px" });
            $(this).removeClass("close_ready");


        } else {
            var site_cont_height = $(".site_nav_box").height();
            //console.log(site_cont_height);
            $(".site_nav").animate({ "height": site_cont_height + 40 });
            $(this).addClass("close_ready");
        }
        $(".site_nav").click(function() {
            event.stopPropagation();
        });

    });
    //wap端站群设置
    $(".siteGroup").click(function() {
        if ($(this).hasClass("close_ready_wap")) {
            $(".site_nav_wap").fadeOut();
            $(this).removeClass("close_ready_wap");


        } else {
            var site_cont_height = $(".site_nav_box_wap").height();
            //console.log(site_cont_height);
            $(".site_nav_wap").fadeIn();
            $(this).addClass("close_ready_wap");
        }

    });
    $(".fixed_Btn").one("mouseover", function() {
        var left_w = $(".left_s").width();
        var right_w = $(".right_n").width();
        var doc_width = $("#page_Wrap").width();
        //console.log(doc_width);
        var gap_width = doc_width - (left_w + right_w);
        //console.log(left_w, right_w, doc_width, gap_width);
        $(".linlin_box").animate({ left: -gap_width + 26 }, 100);
        $(".linlin_box").css("top", scoll + window_height / 2 - 320);

    });
    $(".ok_btn").click(function() {
        $(".linlin_box").animate({ left: "-1500px" }, 100)

    })

    //tab切换
    $(".service_mod .mod_Tabs_Center li").hover(function() { ////标题悬停
        var index = $(this).index(); //获得当前点击标题的下标
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active"); //给当前选项添加选中，其他移除选中
        $(".content_Tab .content_Box").eq(index).show().siblings().hide(); //对应下标的内容框显示，其他隐藏
    });
    $(".main_News .mod_Tabs_Default li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".news_box_1 .news_List_mod_sp").eq(index).show().siblings().hide();
    });
    $("#tab3.mod_Tabs_Default li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".news_box_2 .news_List_mod").eq(index).show().siblings().hide();
    });
    $("#tab4.mod_Tabs_Default li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".links_box_1 .links_list_mod").eq(index).show().siblings().hide();
    });
    //督查 在线访谈
    $("#tab6.mod_Tabs_Default li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".links_box_5 .switch_tag").eq(index).show().siblings().hide();
    });
    $(".tab_Mod_C li").hover(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".news_box_3 .links_List_Small").eq(index).show().siblings().hide();
    });
    //图片视频pc
    $("#tab5.mod_Tabs_Default li").hover(function() {
        var index = $(this).index();
        console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".pic_box_1 .pic_list_mod").eq(index).css({ "height": "auto", "margin-top": "15px" }).siblings().css({ "height": "0", "margin-top": "0px" });
    });
    //图片视频wap
    $("#tab5.mod_Tabs_Default li").hover(function() { ////标题悬停
        var index = $(this).index(); //获得当前点击标题的下标
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active"); //给当前选项添加选中，其他移除选中
        $(".news_box_2 .pic_vedio_cont").eq(index).show().siblings().hide(); //对应下标的内容框显示，其他隐藏
    });


    //1114更新
    $(".icon_List li").hover(function() {
        $(this).addClass("hover")
    }, function() {
        $(this).removeClass("hover")

    })

    //悬停类
    $(".news_List_mod ul li").hover(function() {

        $(this).addClass("link_hover");
        // $(this).animate({ backgroundPositionX: "1900px" })

    }, function() {

        $(".news_List_mod ul li").removeClass("link_hover")
            // $(".news_List_mod ul li").css({ backgroundPositionX: "-100px" })
    });
    $(".block_links li").hover(function() {

        $(this).addClass("link_hover");
    }, function() {

        $(".block_links li").removeClass("link_hover")
    });

    $(".pic_list_mod li").hover(function() {

        $(this).addClass("link_hover");
    }, function() {

        $(".pic_list_mod li").removeClass("link_hover")
    });


    $(".leader_List_Pic dl dd").hover(function() {

        $(this).addClass("link_hover");
    }, function() {

        $(".leader_List_Pic dl dd").removeClass("link_hover")
    });


    $(".bottom_Links_Group .ducha_Link").hover(function() {

        $(this).addClass("link_hover");
    }, function() {

        $(".bottom_Links_Group .ducha_Link").removeClass("link_hover")
    });

    $(".topic_List li").hover(function() {

        $(this).addClass("link_hover");
    }, function() {

        $(".topic_List li").removeClass("link_hover")
    });
    //字号大小
    $(".icon_fp").click(function() {
        cssfontSize = $(".article_text_content").css('font-size');
        var fontSize = parseFloat(cssfontSize);
        //console.log(fontSize)
        $(".article_text_content").css("font-size", fontSize + 1 + "px")
        csslineHeight = $(".article_text_content").css('line-height');
        var lineHeight = parseFloat(csslineHeight);
        $(".article_text_content").css("line-height", lineHeight + 2 + "px")
    });
    $(".icon_fm").click(function() {
            cssfontSize = $(".article_text_content").css('font-size');
            var fontSize = parseFloat(cssfontSize);
            //console.log(fontSize)
            csslineHeight = $(".article_text_content").css('line-height');
            var lineHeight = parseFloat(csslineHeight);
            if (fontSize == 12) {
                $(".article_text_content").css("font-size", "12px");
                $(".article_text_content").css("line-height", "22px")
                    //alert("你视力很好，在下佩服")

                $(".tips_warn").show().delay(2000).fadeOut();

            } else {
                $(".article_text_content").css("font-size", fontSize - 1 + "px")

                $(".article_text_content").css("line-height", lineHeight - 2 + "px")
            }
        })
        //分享
    $(".icon_s").click(function() {
        $(".bshare-custom").toggle();

    })

    var zhi_num = $(".zhi_list ul li").length;
    //console.log(zhi_num);
    if (zhi_num > 2) {
        $(".zhi_list ul").addClass("colum3_zhi");
    }

    $(".avaster_box").each(function() {
        var actor = $(this).text()
            //console.log(actor)
        if (actor !== "主持人") {
            $(this).parents("li").addClass("custom_box");
        }
    });


    $(".user_Box").find(".login_Btn").hover(function() {
        $(".tips01").show();

    }, function() {
        $(".tips01").hide();

    })

    var h1_text = $(".article_tit_big h1").text();
    $(".co_sideber li a span").each(function() {
            var co_text = $(this).text();
            if (h1_text == co_text) {
                $(this).parents("li").addClass("current");
            }

        })
        //wap
    var h1_text_wap = $(".content_box_inner h1").text();
    $(".qote_block a").each(function() {
        var co_text_wap = $(this).text();
        if (h1_text_wap == co_text_wap) {
            $(this).addClass("current");
        }

    })
    $(".icon_en").click(function() {
        var width_globle = $(this).parents("span").find("em").width();
        if (width_globle == 0) {
            $(this).parents("span").find("em").css("width", "auto");
            $(".usercenter_In_Page").hide();
        } else {
            $(this).parents("span").find("em").css("width", "0");
            $(".usercenter_In_Page").show();
        }

    })
    $("#tab_Policy li").click(function() {
        var index = $(this).index();
        //console.log(index)
        $(this).addClass("active").siblings().removeClass("active");
        $(".filiter_Content .ovflow_h").eq(index).show().siblings().hide();

        var this_txt = $(".filiter_Content .ovflow_h").eq(index).find(".on").text();
        if (this_txt == "") { $(".mod_title_in_center em").text("政策"); } else {
            $(".mod_title_in_center em").text(this_txt);
        }

    });
    $(".filiter_Content .block_links li a").click(function() {
        var this_txt = $(this).text();
        $(this).parents(".block_links").find("li").removeClass("on")
        $(this).parents("li").addClass("on")

        $(".mod_title_in_center em").text(this_txt);
    })
    $(".policy_cag a").click(function() {
            var this_txt = $(this).text();
            $(this).parents(".policy_cag").find("a").removeClass("on")
            $(this).addClass("on")

            $(".mod_title_in_center em").text(this_txt);
        })
        // 取消打印插件 $(".icon_p").click(function() {
        //     $("#content_Height").printArea();

    // });

})
str = "%u6B22%u8FCE%u6765%u5230%u5409%u6797%u7701%u4EBA%u6C11%u653F%u5E9C%u95E8%u6237%u7F51%u7AD9";
str = unescape(str.replace(/\u/gi, "u"));
console.log(str + "。update by cosmos at 03/04 2020 what are you looking for ? copycat!");