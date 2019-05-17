$('form.helio-subscribe').submit(function (e) {
    e.preventDefault();
    let form = $(this);
    $.ajax({
        url: 'https://hooks.zapier.com/hooks/catch/3301335/cf3e5r/',
        type: 'post',
        data: {email: $(form.find('input[type=email]')[0]).val()},
        success: function () {
            form.html(
                '<div class="alert-success alert-dismissible fade show" role="alert">\n' +
                '<strong>Success!</strong> You will receive a confirmation shortly.' +
                '</div>'
            );
        }
    });
});


window.setTimeout(function() {
 $('a[href^="mailto:"]').each(function() {
  this.href += 'helio.exchange';
 });
}, 500);



$(document).ready(() => {
    $('body').removeClass('loading');
});


let videoN = document.getElementById("video-narrow");
let btnN = document.getElementById("control-narrow");

let videoW = document.getElementById("video-wide");
let btnW = document.getElementById("control-wide");

function narrowMute() {
    if(!videoW || !videoN || !btnW || !btnN) {
        return;
    }

    videoW.muted = true;
    if (videoN.muted) {
        videoN.muted = false;
        btnN.innerHTML = '<i class="fas fa-volume-mute"></i> Mute';
    } else {
        videoN.muted = true;
        btnN.innerHTML = '<i class="fas fa-volume-up"></i> Unmute';
    }
}


function wideMute() {
    if(!videoW || !videoN || !btnW || !btnN) {
        return;
    }

    videoN.muted = true;
    if (videoW.muted) {
        videoW.muted = false;
        btnW.innerHTML = '<i class="fas fa-volume-mute"></i> Mute';
    } else {
        videoW.muted = true;
        btnW.innerHTML = '<i class="fas fa-volume-up"></i> Unmute';
    }
}
