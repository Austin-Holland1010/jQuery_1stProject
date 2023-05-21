
/*
//Intro to jQuery
//$(selector).action()
$(document).ready(function(){   //When document is loaded then run the rest of the code

  $("button").click(function(){
    $("#cereal").hide();
    $(".unicycle").hide();
    //$("p").hide();
  })
})
*/

//jQuery Events
$(function(){  //This replaced the $(document).ready(function()
  var count1 = 1;
  $("#para1").click(function(){
    var element = document.getElementById("para1");
    element.innerHTML = ("You clicked the a paragraph " + count1 + " times");
    console.log("You clicked the a paragraph " + count1 + " times");
    count1++;
  })

  var count2 = 1;
  $("#para2").mouseenter(function(){
    var element = document.getElementById("para2");
    element.innerHTML = ("You moved over me " + count2 + " times");
    count2++;
  })
});

//Other events:
//dblclick, mouseenter, mouseleave, mousedown, mouseup, hover
