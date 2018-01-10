$(document).on('ready', function() {
    window.setInterval(NewTongue, 3000);
})

function NewTongue(){
    var randPosX = Math.floor((Math.random()*($(window).width()/2)));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}