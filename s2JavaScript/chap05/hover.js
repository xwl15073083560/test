/**
 * Created by Administrator on 2019/2/18.
 */
$(document).ready(function () {
    $("li").mouseover(function () {
        $(this).css({"background": "orange"});//当前li背景颜色为橙色
        $(this).children("div").show();//显示对应的二级菜单
         }).mouseout(function(){
         $(this).css({"background":"#c81623"});//当前li背景恢复原来颜色
        $(this).children("div").hide();//隐藏对应的二级菜单
    });
});