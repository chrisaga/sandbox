$(function () {
  $.get("/users", function (users) {
    users.forEach(function (user) {
      var line = `${user.first_name} ${user.last_name}`;
      $("<li></li>").text(line).appendTo("ul#users");
    });
  });
});
