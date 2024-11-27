$(function () {
  // your code here

  $(".accordion-header").on("click", function (e) {
    if ($(e.target).next(".accordion-content").is(":hidden") === false) return;
    $(".accordion-content").slideUp();

    $(e.target).next(".accordion-content").slideDown();
  });

  $(".todos")
    .children("button")
    .on("click", function () {
      $.ajax({
        url: "https://dummyjson.com/todos",
      }).then((res) => {
        const { todos } = res;
        const container = $(".todos").find("ul");
        $.each(todos, function (i, todo) {
          container.append(`<li>${todo.todo}</li>`);
        });
      });
    });
});
