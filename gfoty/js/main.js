$(document).on('ready', function() {
	NewTongue();
    window.setInterval(NewTongue, 5000);
})

function NewTongue(){
    var randPosX = Math.floor((Math.random()*($(window).width()/2)));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}