var interval = 6000;
var randPosX;

$(document).on('ready', function () {
    NewTongue();
    window.setInterval(NewTongue, interval);
})

function NewTongue() {
    randPosX = Math.floor((Math.random() * $('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .css('left', randPosX)
        .appendTo("#tonguezone")
        .solitaireVictory();
}