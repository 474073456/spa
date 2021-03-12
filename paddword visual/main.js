$(function(){
    //get elem:input value,eye
    let $value=$('input'),
        $eye = $('i');
  
    //get value
    $eye.mouseenter(()=>{
      $eye.attr("class","fa fa-eye");
      $value.attr("type","text");
    })
  
    $eye.mouseleave(()=>{
      $eye.attr("class","fa fa-eye-slash");
      $value.attr("type","password");
    })
  })