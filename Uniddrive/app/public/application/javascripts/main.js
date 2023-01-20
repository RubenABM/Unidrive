function showAlert(id)
{
  $(id).css('display', 'block');
  setTimeout(function(){$(id).css('opacity', '100%');},100);

  setTimeout(function(){
    $(id).css('opacity', '0%');
    setTimeout(function(){$(id).css('display', 'none');},100);
  },2000);
}