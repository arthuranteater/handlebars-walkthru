console.log('connected')


//jquery
$(() => {

    $(".delete").on("click", function (e) {
        console.log('clicked delete')
        e.preventDefault()
        const id = $(this).parents().attr("id")

        // Send the DELETE request.
        $.ajax("/api/kids/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted id ", id)
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#addkid").on("submit", function (e) {

        // Make sure to preventDefault on a submit event.
        e.preventDefault()
        console.log('clicked')


        var newKid = {
            kid_name: $("#addkid [name=kid_name]").val().trim(),
            alias: $("#addkid [name=alias]").val().trim(),
            age: $("#addkid [name=age]").val().trim(),
            yob: $("#addkid [name=yob]").val().trim(),
            img: $("#addkid [name=img]").val().trim()
        }

        // Send the POST request.
        $.ajax("/api/kids", {
            type: "POST",
            data: newKid
        }).then((response) => {
            console.log(`added ${response}`)
            // Reload the page to get the updated list
            location.reload()
        })
    })

    $(".edit").on("click", function (e) {
        console.log('clicked to edit')
        e.preventDefault()

        const state = $(this).attr('data-state')
        const id = $(this).parent().attr('id')

        console.log('before if data-state=', state)

        if (state === 'false') {

            console.log('data-state=', state)

            $(this).attr('data-state', 'true')
            $(this).attr('class', 'btn btn-success edit')
            $(this).html("Save")

            $('.input' + id).each(function () {
                $(this).prop("disabled", false)
            })
        } else {

            console.log('data-state=', state)

            $(this).attr('data-state', 'false')
            $(this).attr('class', 'btn btn-primary edit')
            $(this).html("Edit")


            const inputs = []

            $('.input' + id).each(function (index) {
                $(this).prop("disabled", true)
                inputs.push($(this).val())
            })

            var updatedKid = {
                alias: inputs[0],
                age: inputs[1],
                yob: inputs[2]
            }

            $.ajax("/api/kids/" + id, {
                type: "PUT",
                data: updatedKid
            }).then(
                function () {
                    console.log("updated id ", id)
                    // Reload the page to get the updated list
                    location.reload();
                }
            )

        }

    })

})

