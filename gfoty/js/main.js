var interval = 10000;

$(document).on('ready', function() {
    NewTongue1();
    NewTongue2();
    NewTongue3();
    NewTongue4();
    NewTongue5();
    window.setInterval(NewTongue1, interval);
    window.setInterval(NewTongue2, interval);
    window.setInterval(NewTongue3, interval);
    window.setInterval(NewTongue4, interval);
    window.setInterval(NewTongue5, interval);

})

function NewTongue1(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}

function NewTongue2(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}

function NewTongue3(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}

function NewTongue3(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}

function NewTongue4(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}

function NewTongue5(){
    var randPosX = Math.floor((Math.random()*$('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}
