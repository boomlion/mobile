$(function () {


  //在本地的local中添加数据，并且判断等一系列的操作，然后把一些数据
  //发送给后台。
  // 封装方法，获取渲染等


  //先把arr提取出来，这样出门就可以知道所有的arr然后进行渲染后续操作也可以进行。
  var list = [];

  rander();

  //清空历史记录
  $('#local').on('click', '.clear', function () {
    mui.confirm('确定要清除所有吗', '安妮温馨提示', ['取消', '确认'], function (e) {
      if (e.index == 1) {
        localStorage.removeItem('search_list');
        rander();
      }

    })

  });

  //最后一个就是点击删除，，单个删除
  $('#local').on('click', '.btn_delete', function () {
    var index = $(this).data('id');


    mui.confirm('确定要清除这条消息吗', '安妮温馨提示', ['取消', '确认'], function (e) {
      if (e.index == 1) {
        var arr = getHistory();
        arr.splice(index, 1);
        //到这一步只改了数组
        setItem();
        rander();
      }

    })

  });


  //点击设置参数先点击别想太多
  $('.mui-search').click(function () {

    var str = $('.search input').val().trim();
    if (str.length === 0) {
      return;
    }
    //可以添加判断条件，坑

  
    var num = list.indexOf($('.search input').val());
    console.log(num);
    if (num !== -1) {
      list.splice(num, 1);
      
    }
    list.unshift(str);
    
    if (num > 10) {
      list.pop();
      
    }

    $('.search input').val('');

    setItem();
    //无非就是设置localStorage

    //只要直接设置就行，内容会自动顶替
    rander();

//搜索进行的位置 可以跳转
location.href="search-list.html?key="+str;
  })

  function setItem() {

    arr_list = JSON.stringify(list);
    localStorage.setItem('search_list', arr_list);
  }

  function getHistory() {
    var arr = localStorage.getItem('search_list');
    arr = JSON.parse(arr) || [];
    list = arr;
    return arr;
  }
  //点击事件之后往数组 中添加，然后设置local
  function rander() {
    var arr = getHistory();
    $('#local').html(template('tmp', { obj: arr }));


  }



})