
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

  var count3 = 0; //increments on mouseenter
  var count4 = 0; //increments on mouseleave
  $("#para3").hover(function(){
    var element = document.getElementById("para3");
    element.innerHTML = ("You hovered over me " + ++count3 + " times and left me " + count4 + " times.");
  },
    function(){
      var element = document.getElementById("para3");
      element.innerHTML = ("You hovered over me " + count3 + " times and left me " + ++count4 + " times.");
    })

  //focus event
  var count5 = 0; //counts the number of time you enter an input field
  $("#input1").focus(function(){
    var element = document.getElementById("para4");
    element.innerHTML = ("You clicked in the input field " + ++count5 + " times.");
    
  })

  //Multievent test
  var count6 = 0;
  $("#para5").on("click mouseenter", function(){
    var element = document.getElementById("para5");
    element.innerHTML = "You clicked/entered this paragraph " + ++count6 + " times.";
  })

//Other events:
//dblclick, mouseenter, mouseleave, mousedown, mouseup, hover

//form events: focus, blur, change

//jQuery Effects
  /*
  $("h4").hide()
  $("h4").fadeIn(2000).addClass("blue");
  $("#titan").hide(500); //can also be .hide() or .hide("slow")
  $("#titan").show(3000);
  $("#titan").slideUp(1000);
  $("#titan").slideDown(1000);
  $("#titan").fadeOut(1500);
  $("#titan").fadeIn(1500);
  $("#titan").toggle(700); //toggle makes it disappar when it is already there and makes it appear when it is not there
  $("#titan").toggle(700);
  
  $("#titan").on("click", function(){
    $("#titan").stop();
  })

  $("#header4_1").hide(500).delay(1000).show(300);
  */

  //jQuery animate
  //.animate( properties [,duration] [,easing] [,complete])
  //.animate( properties, options )

$("#go").click(function(){
  $("#block")
  .animate({ width: "90%"}, 1000)
  .animate({ fontSize: "40px"}, 1000)
  .animate({ borderLeftWidth: "30px"}, 1000)
  /*
    .animate({
    opasity: .5,
    marginLeft: "+=50",
    height: "400px"
  }, 3000, "linear", function(){
    $(this).after("<div> Animation complete.</div>");
  });
  */
});

  //Get and Set with http, text, val, and attr
  $("#part5_btn").click(function(){
    console.log($("#test").text);
    //console.log($("#test").html)
    console.log($("#fcc").attr("href"));
  })

  $("#setContent").click(function(){
    //$("#test").text("freeCodeCamp is cool!");
    //$("#test").html("freeCodeCamp is <b>cool!</b>");
    $("#test").text(function(i, origText){
      return "Old text: " + origText + " New text: freeCodeCamp is cool! (index: " + i + ")"
    })
  })

   $("#inputName_btn").click(function(){
    $("#name").val("Bobby Goat");
  })

  
  
  });