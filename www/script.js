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
  this.text = this.text.replace('@', '@helio.exchange');
 });
}, 500);



$(document).ready(() => {
    $('body').removeClass('loading');
});