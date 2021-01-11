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
