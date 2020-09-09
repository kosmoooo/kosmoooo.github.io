// 全局变量
var programVal = {
  searchClearFlag: null, //clear清除标准(搜索)
  speicallyFooterFlag: false //是否显示下方fixed定位的footer
};

$(function() {
	programVal.speicallyFooterFlag = initPageHasSpeciallFooter();
	bindwindowScroll();
	bindRegionChangeClick();
	whenMouseLeaveRegionBox();
	bindDatePlugins();
	initBindSearchTime();
	initBindSearchOrder();
	initBindSearchType();
	initArea();
	bindMessageShow();
	bindSuperSearch();
	bindFormSearchSubmit();
	getSearchWord();
	
	set_simpl_param(1, 10, 0);
	search_all_type_data(1,10);
});

function bindFormSearchSubmit(){
	//name="search"
	//$("#form_search").bind("keydown",function(e){
	$("[name='search']").bind("keydown",function(e){
	
		// 兼容FF和IE和Opera
		var theEvent = e || window.event;
		var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
		if (code == 13) {
		　　//回车执行查询
			var _this = $(this).siblings("input[type='button']");
		　	searchWordNew(1,10,_this);
		}
	});
}

function bindSuperSearch(){
	
	$(".gjjs").click(function() {
		//$("#gjjs_conter").toggle();
		if( $("#gjjs_conter").css("display")=='none' ) { 
			$("#gjjs_conter").css("display","block");
		}else{
			$("#gjjs_conter").css("display","none");
		}
	});
	$("#sup_submit").click(function() {
		
		var stype=$("#sup_stype").val();
		
		set_sup_param(1, 10);
		search_all_type_sup_data(1, 10);
		
		$("#search"+stype).parent("li").click();
		$(".gjjs_conter").hide();
	});
	
	$("#sup_reset").click(function() {
		$("#gjjs_form")[0].reset();
	});
}

/**
 *
 * @desc 绑定输入框显示
 * 
 */
function bindMessageShow(){
	$(".search_sr").on("change", function(){
		//searchInputWordData();
	});
	$(".search_sr").on("blur", function(){
		messageShow(false);
	});
	$("body").on("click", function(){
		messageShow(false);
	});
	
}

function messageShow(isShow){
	if(isShow){
		$(".message").css("display","block");
	}else{
		$(".message").css("display","none");
	}
}

/**
 *
 * @desc 初始化查询条件
 * 
 */
function resetSearchParam(){
	initArea();//初始化区域信息
	$('.date_picker').val("");
	
	$('.main_index_order a').removeClass();
	$('.main_index_order a').addClass("link_nor");
	$('.main_index_order a').eq(0).attr("class","link_sel mr-3");
	
	$('.main_index_timerange a').removeClass();
	$('.main_index_timerange a').addClass("link_nor");
	$('.main_index_timerange a').eq(0).attr("class","link_sel");
	
	$('.nav_right ul li').removeClass();
	$('.nav_right ul li').eq(0).attr("class","nav_right_sel");
	
	messageShow(false);
	
}

function setSearchWordToInput(inputValue){
	
	$("input[name='search']").each(function(){
		$(this).val(inputValue);
	});
	
}

function getSearchWordFromInput(_this){
	var inputValue = $(_this).siblings("input[name='search']").val();
	setSearchWordToInput(inputValue);
}

function searchWordNew(page, size,_this){
	debugger;
	getSearchWordFromInput(_this);
	searchWord(page, size);
}

function searchWord(page, size){
	
	/*var searchWord = $("#searchword").val().trim();
	if(searchWord=="居住"){
		window.open("jz.html","_blank");
	}*/
	
	set_simpl_param(page, size, 0);
	search_all_type_data(page, size);
	$(".message").css("display","none");	
}

function onclickMessageTitle(_this){
	var selectVal = $(_this).html();
	var selectVal = httpUtils.removeHtmlTag(selectVal);
	$("#searchword").val(selectVal);
	$(".message").css("display","none");	
}

/**
 *
 * @desc 此方法用于对搜索出来的信息click事件处理
 * @subFun 此方法在handleSerachInputOnChange中调用
 */
function bindSearchMessageItemClick(_self) {
  $('#searchMessage li a').on('click', function() {
    $('#searchInput').val($(this).text());
    $('#searchMessage').hide();
  });
}

/**
 *  @desc 用于显示省市区切换的div
 */
function bindRegionChangeClick() {
  $('#regionChange').on('click', function() {
    $('#regionChangeDataShow').show();
  });
}

/**
 *  @desc 页面加载时为省市级Box添加隐藏效果
 */
function whenMouseLeaveRegionBox() {
  $('#regionChangeDataShow').on('mouseleave', function() {
    $(this).css('display', 'none');
  });
}

/**
 * @desc 绑定时间插件
 */
function bindDatePlugins() {
  $('.date_picker').date_input();
}

/**
 * @desc 此方法处理页面header与尾部的效果
 */
function bindwindowScroll() {
  window.onscroll = function() {
    var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
    handleHeaderPosition();
    handleFooterPosition();
  };
}
/**
 * @desc 头部单独方法
 */
function handleHeaderPosition() {
  var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrolltop > 180) {
    $('#searchBox').addClass('searchBoxInContent');
    $('#main_top').append(document.getElementById('searchBox'));
  } else {
    $('#searchBox').removeClass('searchBoxInContent');
    $('#headerContainer').append(document.getElementById('searchBox'));
  }
  if (scrolltop > 229) {
    $('#mainHeaderContainer').css('width', $('.page_Wrap').width());
    $('#mainHeaderContainer').addClass('mainHeaderContainer');
    $('#main_content').css('paddingTop','130px')
  } else {
    $('#mainHeaderContainer').css('width', $('.page_Wrap').width('auto'));
    $('#mainHeaderContainer').removeClass('mainHeaderContainer');
    $('#main_content').css('paddingTop','20px')
  }
}

/**
 * @desc 页面初始化的时候判断是否显示特殊的footer
 * @return true or false
 */
function initPageHasSpeciallFooter() {
  if (document.body.scrollHeight > 0 && document.body.clientHeight > document.documentElement.clientHeight + 317) {
    $('#footerSpeically').show();
    return true;
  } else {
    return false;
  }
}

/**
 * @desc 绑定时间查询事件
 * @return true or false
 */
function initBindSearchTime(){
	$('.main_index_timerange a').on('click', function() {
		$(this).siblings("a").removeClass();
		$(this).siblings("a").addClass("link_nor");
		$(this).removeClass();
		$(this).addClass('link_sel');
		$("#startDate").val("");
		$("#endDate").val("");
		
		if($(this).attr("ttype")=="5"){
			$("#startDate").removeAttr("disabled"); 
			$("#endDate").removeAttr("disabled"); 
		}else{
			$("#startDate").attr("disabled","disabled"); 
			$("#endDate").attr("disabled","disabled");
			searchOtherData(1, true);
		}
	});
}

/**
 * @desc 绑定排序查询事件
 * @return true or false
 */
function initBindSearchOrder(){
	$('.main_index_order a').on('click', function() {
		$(this).siblings().removeClass();
		$(this).siblings().addClass("link_nor");
		$(this).removeClass();
		$(this).addClass('link_sel mr-3');
		
		searchOtherData(1, true);
	});
}

/**
 * @desc 绑定分类事件
 * @return true or false
 */
function initBindSearchType(){
	$('.nav_right ul li').on('click', function() {
		$(this).siblings().removeClass();
		$(this).addClass('nav_right_sel');
		
		$('.showTab').hide();
		var type = $(this).find("a").attr("stype");
		$('#stype'+type).show();
	});
}

/**
 * @desc 监听滚动条滚动时处理尾部
 */
function handleFooterPosition() {
  if (programVal.speicallyFooterFlag) {
    var scrolltop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolltop + document.documentElement.clientHeight < document.body.scrollHeight - 317) {
      $('#footerSpeically').show();
    } else {
      $('#footerSpeically').hide();
    }
  }
}

function getSearchWord(){
	var searchWord = httpUtils.getUrlParams("q");
	$("#searchword").val(httpUtils.removeHtmlTag(searchWord));
}
