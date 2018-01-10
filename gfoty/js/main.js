var interval = 6000;
var randPosX;

$(document).on('ready', function () {
    $('#tongueimg').hide();
    NewTongue();
    window.setInterval(NewTongue, interval);
})

function NewTongue() {
    $('#freshfromthecloningvats').remove();
    randPosX = Math.floor((Math.random() * $('#tonguezone').width()));
    $('#tongueimg')
        .clone()
        .attr("id","freshfromthecloningvats")
        .show()
        .css('left', randPosX)
        .css('top', -100)
        .appendTo("#tonguezone")
        .solitaireVictory();
        
        
}