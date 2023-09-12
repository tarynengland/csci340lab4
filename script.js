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