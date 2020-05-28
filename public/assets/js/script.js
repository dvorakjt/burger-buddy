$(document).ready(() => {
    $(".back").on("click", function (event) {
        location.replace("/");
    });

    $(".devour").on("click", function (event) {
        const id = $(this).attr("data-id");

        $.ajax("/api/burgers/", {
            type: "PUT",
            data: {
                devoured: true,
                id: id
            }
        }).then(
            function () {
                console.log("ate the burg");
                // Refresh the page to display changes
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (event) {
        console.log("yo");
        const id = $(this).attr("data-id");
        console.log(id);
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
                // Refresh the page to display changes
            }
        );
    });

    $("#newBurgerForm").on("submit", function (event) {
        console.log("hello");
        const newBurg = {
            name: $("#name").val().trim(),
            adjective: $("#adjective").val().trim(),
            bun: $("#bun").val().trim(),
            cheese: $("#cheese").val().trim(),
            condiments: $("#condiments").val().trim(),
            toppings: $("#toppings").val().trim(),
            devoured: false
        }
        // send the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                location.replace("/");
            }
        );
    });
})