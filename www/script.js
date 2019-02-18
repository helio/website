$('.nl-subscribe').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/3301335/cf3e5r/',
        type:'post',
        data:{email: $(e.target).find('input[type=email]')},
        success:function(){
          $('#nl-subscribe').html(
              '<div class="alert-success alert-dismissible fade show" role="alert">\n' +
              '<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
              '<span aria-hidden="true">×</span>\n' +
              '</button>' +
              '<strong>Success!</strong>' +
              '</div>'
          );
        }
    });
});

$('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
});

window.setTimeout(function() {
 $('a[href^="mailto:"]').each(function() {
  this.href += 'helio.exchange';
 });
}, 500);



$(document).ready(() => {
	$('body').removeClass('loading');
});

