/**
 * Created by Administrator on 2019/2/18.
 */
$(document).ready(function () {
    $("li").mouseover(function () {
        $(this).css({"background": "orange"});//��ǰli������ɫΪ��ɫ
        $(this).children("div").show();//��ʾ��Ӧ�Ķ����˵�
         }).mouseout(function(){
         $(this).css({"background":"#c81623"});//��ǰli�����ָ�ԭ����ɫ
        $(this).children("div").hide();//���ض�Ӧ�Ķ����˵�
    });
});