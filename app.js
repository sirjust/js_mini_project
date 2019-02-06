$(document).ready(function(){

    $('#get-pokemon-button').on('click', function(){
        $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status){
            console.log(data);

            var string = "";

            string += "<table class='table'>";

            $.each(data.results, function(index, item){
                string += "<tr><td><a href='"+item.url+"'>"+item.name+"</td><td><button class='btn btn-primary hide-button'>Hide</button></td></tr>";
            });

            string += "</table>";

            $('#poke-list').html(string);

            // to get the hide button to work we need to use the status parameter, 
            // which is the callback

            if(status) {
                $('.hide-button').on('click', function(){
                    // this is asynchronous
                    $(this).parent().parent().hide();
                });
            }
        });

    });

});