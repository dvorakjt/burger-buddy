$(document).ready(() => {
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
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})