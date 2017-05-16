function login() {
  var username = $('#inputUsername').val();
  var password = $('#inputPassword').val();


  // LeanCloud - 登录
  // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
  AV.User.logIn(username, password).then(function (loginedUser) {
      alert(JSON.stringify("登录成功"));
  }, function (error) {
    alert(JSON.stringify(error));
  });
};

$(function() {
  $(".login1").on('submit', function(e) {
    e.preventDefault();
    login();
  });
});
