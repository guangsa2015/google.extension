// 页面加载完成后执行拦截
window.addEventListener('load', blockAds);
// 监听页面动态加载内容（如滚动加载的广告）
window.addEventListener('scroll', () => {
  // 防抖处理，避免频繁执行
  //setTimeout(blockAds, 500);
});
// 合并选择器，批量移除广告元素
let timeoutId=0;
function blockAds() {
  //顶部菜单
  //let  top_left=document.getElementById("s-top-left");
  //top_left.style.display="none";
  
  //去掉右侧的AI助手
  

  
  //a.有广告的情况 [搜车、玩具]
  const content_right_div= document.getElementById("content_right");
  if(content_right_div){
	  const ad_divs = content_right_div.getElementsByClassName("cr-content _1eqtk61");
	  if(ad_divs && ad_divs.length>0){
			content_right_div.removeChild(ad_divs[0].parentNode);
	  }
  }
  //去掉登陆
  const login_divs=content_right_div.getElementsByClassName("hint_right_middle");
  if(login_divs&&login_divs[0]){
	  //content_right_div.removeChild(ad_divs[0].parentNode);
	  login_divs[0].style.display="none";
  }
	
  //b.无广告的情况
  const conar_div=document.getElementById("con-ar");
  if(conar_div){
	   let conar_divs=conar_div.getElementsByClassName("result-op cr-content");
	   for(let i=0; conar_divs!=null && i<conar_divs.length; i++){ 
		  conar_div.removeChild(conar_divs[i]);//一直从0开始删除
	   }
  }
  //移除内容广告
  const content_left = document.getElementById("content_left");
  let ads_contents = content_left.querySelectorAll("div.gp2k11k");
  if(ads_contents && ads_contents.length>0){
	  //console.log("广告数量 ："+ads_contents.length);
	  content_left.removeChild(ads_contents[0].parentNode);
  }
  //去掉广告联系电话
  const ad_online=document.getElementById("con-right-bottom");
  if(ad_online){
	  ad_online.style.display="none";
  }
  
  //动态刷新子广告
  let ads_content_childs = content_left.querySelectorAll("div.se_st_footer");
  if(ads_content_childs && ads_content_childs.length>0){
	   for(let i=0; i<ads_content_childs.length; i++){ 
		  content_left.removeChild(ads_content_childs[i].parentNode);//一直从0开始删除
	   }
	   console.log("子广告数量 ："+ads_content_childs.length);
  }
  
  //定时清除
  clearTimeout(timeoutId);
  timeoutId=setTimeout(blockAds, 1000);
}