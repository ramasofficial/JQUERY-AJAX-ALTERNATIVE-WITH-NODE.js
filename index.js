$(function () {
    var socket = io();

    $(document).on('click', '#send_socket', function (event) {
        console.log('emit');
        var text = $('#input-id').val();
        console.log(text);
        socket.emit('get_request', { user_id: text, });
    });

    socket.on('response', function(response){
        //var str = response.json;
        //str.replace("[", "");
        //str.replace("]", "");
        var obj2 = $.parseJSON(response.json);
        $.each( obj2, function( key, obj ) {
            $('#node_response').append('<li>ID: <strong>'+obj.id+'</strong>, Vardas: <strong>'+obj.name+'</strong>, pareigos: <strong>'+obj.position+'</strong>.</li>');
        });
    });
});