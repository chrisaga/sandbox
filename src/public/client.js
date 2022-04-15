$(function () {
  $.get("/users", function (users) {
    users.forEach(function (user) {
      var line = `<td>${user.first_name}</td><td>${user.last_name}</td><td>${user.position}</td>`;
      $("<tr></tr>").html(line).appendTo("table#users");
    });
  });
});
