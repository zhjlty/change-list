/**
 * Created by zhj on 2015/9/1.
 */
$(document).ready(function(){
    $(".list1").bind("click",function(){                      /*绑定元素做改变*/
        $(".list1").css("background-position","0px -26px")
        $(".list2").css("background-position","-30px -26px")
        $(".box-pic").children().removeClass("list-0-1").addClass("list-1-0")
    })
    $(".list2").bind("click",function(){
        $(".list1").css("background-position","0px 0px")
        $(".list2").css("background-position","-30px 0px")
        $(".box-pic").children().removeClass("list-1-0").addClass("list-0-1")
    })
    });