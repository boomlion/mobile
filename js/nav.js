$(function () {
  // 这个只是假设直接第一个的情况下，容易出现bug

  var index;

  $('.it_main .aside').on('click', 'a', function () {
    $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    // 点击进行传参
    index = $(this).data('id');
    rander1(index);
  })
  // 以及渲染
  rander();
  function rander() {
    $.ajax({
      url: '/category/queryTopCategory',
      type: 'get',
      success: function (info) {
        $('.aside ul').html(template('tmp', info))
        index=info.rows[0].id;
        rander1(index);
      }
    })
  }







  // 二级渲染要有一个参数进行接收，因为有不同的页
  function rander1(index) {
    $.ajax({
      url: '/category/querySecondCategory',
      type: 'get',
      data: {
        id: index
      },
      success: function (info) {
        $('#ul').html(template('tmp1', info));
      }
    })
  }

})