$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-rthakker549/master/rohan.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.topStrengths, function(key, value){
      $("#topStrengths").append("<li>" + value.top2 + "</li>");
    });
  });
});
