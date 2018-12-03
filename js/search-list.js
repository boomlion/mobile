$(function(){

  //$('.search input').val('');//输入框的值


  var str=location.search;
  str=decodeURI(str);
  //slice就是截取字符串贼好用 ，但是包头不包尾  
 str=str.slice(1);

  console.log(str);

  
})