$(document).ready(function() {


    $("form#fav").submit(function() {
        var result = [];
        var resultNew = [];

        result.push(($("#input1").val()));
        result.push(($("#input2").val()));
        result.push(($("#input3").val()));
       
        resultNew.push(result[1]);
        resultNew.push(result[2]);
        resultNew.push(result[0]);
 
            for (var i =0; i < resultNew.length; i++) {
                console.log(resultNew[i]);
                $("ul#user").prepend("<li>" + resultNew[i] + "</li>");
            }
        event.preventDefault();
    });
});