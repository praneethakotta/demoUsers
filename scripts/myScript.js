$(document).ready(function(){
    $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
    $(".signUp").click(function(){
        $("form").hide();
        $(".toggleDiv").show();
        $(".success").css("margin-top","-281px");
    });
    $(".logo").click(function(){
        $("form").show();
        $(".success").css("margin-top","281px");
        $(".success").hide();
        
    });
});