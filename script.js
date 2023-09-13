$(document).ready(function(){
    $('.adv').click(function(){
        console.log("pressed");
        $.ajax({
            dataType: "json",
            url: "https://icanhazdadjoke.com/",
            success: function(results){
                $('.advice').text(results["joke"]);
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
    })
})


$(document).ready(function(){
    $('.rand').click(function(){
        console.log("pressed");
        $.ajax({
            dataType: "json",
            url: "https://api.adviceslip.com/advice",
            success: function(results){
                console.log("success");
                $('.random').text(results["slip"]["advice"]);
            },
            error: function(xhr,status,error){
                console.log(error);
            }
        })
    })
})