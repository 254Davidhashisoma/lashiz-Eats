$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (f, s, c, t, n, total) => {
            return { f, s, c, t, n, total };
        };

        let price, totalPrice;
        switch (flavour) {
            case flavour = "chickenhawaiian":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "meatdeluxe":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "spicyboerewors":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "beefpepperoni":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "bbqsteak":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chickenmushroom":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "vegfeast":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chickenmacon":
                switch (size) {
                    case size = "regular":
                        price = 600;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        };
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "veggiesalad":
                totalPrice = totalPrice + 80;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 180;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 180;
                break;
        };
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);
        $('#list').text("");
        $('#list').append("<br>" + "Flavour : " + newOrder.f + "<br>" + "Size : "
            + newOrder.s + "<br>" + "Crust : "
            + newOrder.c + "<br>" + "Toppings : "
            + newOrder.t + "<br>" + "Number of pizza's : "
            + newOrder.n + "<br>" + "Total Price : "
            + newOrder.total + "<br><br>").css('font-family', 'PT Serif').css('font-size', '20px');
    });
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
        alert('Your Delivery is on the Way. Thank you for choosing Pizzaara.')

    });
    $('.delivernot').click(function () {
        alert('Thank You for placing your order with Pizzaara, give us fifteen minutes for it to be ready.')
    });
    $(document).ready(function () {
        $
    });
    $('.click-me').click(function () {
        alert('Thankyou for your subscription')
    })


    $(function () {
        $.scrollify.move('#sum-order');
    });
});