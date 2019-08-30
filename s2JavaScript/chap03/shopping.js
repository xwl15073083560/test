/**
 * Created by zongjuan.wang on 2016/6/1.
 */

/*关闭窗口*/
function close_plan(){
    window.close();
}
function collection(){
    var flag=confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if(flag==true){
        alert("移入收藏成功!");
    }
}
function del(){
    var flag=confirm("您确定要删除商品吗?");
    if(flag==true){
        alert("删除成功!");
    }
}
function minus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)-1;
    if(count<1){
        alert("不能再减了，再减就没有啦！");
    }
    else{
        document.getElementsByName("amount")[num].value=count;
        var totals=parseFloat(prices*count);
        document.getElementById("price"+num).innerHTML="¥" +totals;
        total();
    }
}
function plus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)+1;
    document.getElementsByName("amount")[num].value=count;
    var totals=parseFloat(prices*count);
    document.getElementById("price"+num).innerHTML="¥" +totals;
    total();
}
function total(){
    var prices=document.getElementsByName("price");
    var count=document.getElementsByName("amount");
    var sum=0;
    for(var i=0; i<prices.length;i++){
       sum+=prices[i].value*count[i].value;
    }
    document.getElementById("totalPrice").innerHTML="¥" +sum;
}
function accounts(){
    var node=document.getElementById("cartList");
    var str1=node.firstElementChild.lastElementChild.previousElementSibling.innerHTML;
    var str2=node.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.innerHTML;
    var str3=node.lastElementChild.firstElementChild.innerHTML;
    document.getElementById("1").innerHTML="您本次购买的商品信息如下："+"白岩松：白说："+str1+"<br/>"+"岛上书店："+str2+"<br/>"+"商品总计："+str3;
}
total();