//when selection detail is clicked
//change style to remain
//store variable

//when add to cart is clicked
//increment cart counter
//save cart counter to local storage
//save object with data to local storage
//update cart number at top

//save attributes to an item
//cart should display array of items

// OBJECT CONSTRUCTORS
function item(color, size, qty, price, image) {
   this.color = color;
   this.size = size;
   this.qty = qty;
   this.price = price;
   this.image = image;
}

// GLOBAL VARIABLES
var color = "Night Moon";
var size = "Small";
var qty = 1;
var price = "$35.99"
var image = "images/dogharness.jpg";
var localCartQty = 0;
var cartArray = [];


//on page load
$(document).ready(function() {
    //update cart count
    displayCart();

    //change cart display if cart items added
    if (parseInt(localStorage.getItem("cartQty")) > 0) {
        //toggle to hide default table row showing empty cart
        $("#empty-cart").toggle();

        //get array from local storage
        var array = JSON.parse(localStorage.getItem("cartArray"));

        //create content that should be added for each Item in array
        for (var i = 0; i < array.length; i++){
            //get current array item
            var currentItem = array[i];
            var content1 = '<tr class = "cart-row"> <!-- image --> <td class = "table-content"> <div class = "cart-image-frame"><img src="';
            //get image
            var content2 = currentItem.image;
            var content3 = '" ></div> </td> <!-- desc --> <td class = "table-content"> <p class = "cart-item-title">Dog Harness</p> <p class = "cart-item-deet">Color: ';
            //get color
            var content4 = currentItem.color;
            var content5 = ' <br>Size: ';
            //get size
            var content6 = currentItem.size;
            var content7 = '</p> </td> <!-- quantity --> <td class = "table-content"> <div class = "quant-wrapper"> <button class = "select-quant-dark add-qty"><a>+</a></button> <button class = "select-quant-light"><a class="qty">';
            //get quantity
            var content8 = currentItem.qty;
            var content9 = '</a></button> <button class = "select-quant-dark sub-qty"><a>-</a></button> </div> </td> <!-- price --> <td class = "table-content"><p class = "cart-price">';
            //get price
            var content10 = currentItem.price;
            var content11 = '</p></td> </tr> <tr> <td colspan ="4" class = "cart-row-controls"> <button class = "cart-control" id="edit"><a>EDIT</a></button> <button class = "cart-control" id = "remove"><a>REMOVE</a></button> </td> </tr>';
            //concatenate content together
            var newText = content1.concat(content2,content3,content4,content5,content6,content7,content8,content9,content10,content11);
            //append content to table
            $("#cart-table tr:last").after(newText);
        }
    }
});

//delete item in shopping cart
$(document).on("click", "#remove", function() {
    //get above tr above containing item
    var item = $(this).parent().parent().prev();
    //get index of that tr
    var index = $("tr").index(item);
    //debug console
    console.log("Tr Index number:");
    console.log(index);
    //calculate placement index for array
    index = index/2;
    index = index - 1;
    //debug console
    console.log("Array Index number:");
    console.log(index);
    //removes tr above containing item
    item.remove();
    //removes this tr containing controls
    $(this).parent().remove();
    //get and decrement from local storage cart quantity
    localCartQty = localStorage.getItem("cartQty");
    localCartQty--;
    // updates cart quantity
    localStorage.setItem("cartQty", localCartQty);
    //update display cart
    displayCart();
    //remove from cartArray
    //get array from local storage
    var array = JSON.parse(localStorage.getItem("cartArray"));
    //remove 1 item from array
    array.splice(index, 1);
    //save array to local storage
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    //show empty cart image again
    if (localCartQty < 1) {
        //show default table row
        $("#empty-cart").toggle();
    }
});


// SELECTING COLOR
$(document).on("click", "#strawberry", function() {
  //change image
  $("#detail-image").attr("src", "images/dogharness-strawberry.jpg");
  //change text
  $(".select-color").text("1. Select Color: Strawberry");
  //store selection locally
  color = "Strawberry";
  image = "images/dogharness-strawberry.jpg";
});

$(document).on("click", "#blackberry", function() {
  $("#detail-image").attr("src", "images/dogharness-blackberry.jpg");
  $(".select-color").text("1. Select Color: Blackberry");
  color = "Blackberry";
  image = "images/dogharness-blackberry.jpg";
});

$(document).on("click", "#crazyberry", function() {
  $("#detail-image").attr("src", "images/dogharness-crazyberry.jpg");
  $(".select-color").text("1. Select Color: Crazyberry");
  color = "Crazyberry";
  image = "images/dogharness-crazyberry.jpg";
});

$(document).on("click", "#camo", function() {
  $("#detail-image").attr("src", "images/dogharness-camo.jpg");
  $(".select-color").text("1. Select Color: Camo");
  color = "Camo";
  image = "images/dogharness-camo.jpg";
});

$(document).on("click", "#night-moon", function() {
  $("#detail-image").attr("src", "images/dogharness.jpg");
  $(".select-color").text("1. Select Color: Night Moon");
  color = "Night Moon";
  image = "images/dogharness.jpg";
});

$(document).on("click", "#fire-orange", function() {
  $("#detail-image").attr("src", "images/dogharness-fireorange.jpg");
  $(".select-color").text("1. Select Color: Fire Orange");
  color = "Fire Orange";
  image = "images/dogharness-fireorange.jpg";
});

// SELECTING SIZE
$(document).on("click", "#tiny", function() {
  //change text
  $(".select-size-label").text("2. Select Size: Tiny");
  //change image
  $("#detail-image").attr("src", "images/tinyharness.jpg");
  //add css to selected button and remove from others
  $("#tiny").addClass("selected-button");
  $("#small").removeClass("selected-button");
  $("#medium").removeClass("selected-button");
  $("#large").removeClass("selected-button");
  //store selection locally
  size = "Tiny";
  //change text of price
  $(".detail-price").text("$30.99");
  price = "$30.99";
  image = "images/tinyharness.jpg";
});

$(document).on("click", "#small", function() {
  $(".select-size-label").text("2. Select Size: Small");
  $("#detail-image").attr("src", "images/dogharness.jpg");
  $("#tiny").removeClass("selected-button");
  $("#small").addClass("selected-button");
  $("#medium").removeClass("selected-button");
  $("#large").removeClass("selected-button");
  size = "Small";
  $(".detail-price").text("$35.99");
  price = "$35.99";
  image = "images/dogharness.jpg";
});

$(document).on("click", "#medium", function() {
  $(".select-size-label").text("2. Select Size: Medium");
  $("#detail-image").attr("src", "images/mediumharness.jpg");
  $("#tiny").removeClass("selected-button");
  $("#small").removeClass("selected-button");
  $("#medium").addClass("selected-button");
  $("#large").removeClass("selected-button");
  size = "Medium";
  $(".detail-price").text("$40.99");
  price = "$40.99";
  image = "images/mediumharness.jpg";
});

$(document).on("click", "#large", function() {
  $(".select-size-label").text("2. Select Size: Large");
  $("#detail-image").attr("src", "images/largeharness.jpg");
  $("#tiny").removeClass("selected-button");
  $("#small").removeClass("selected-button");
  $("#medium").removeClass("selected-button");
  $("#large").addClass("selected-button");
  size = "Large";
  $(".detail-price").text("$45.99");
  price = "$45.99";
  image = "images/largeharness.jpg";
});

// SELECTING QUANTITY
$(document).on("click", ".add-qty", function() {
    //increment
    qty++;
    //change text
    $(".qty").text(qty);
});

$(document).on("click", ".sub-qty", function() {
    //decrement
    qty--;
    //make sure doesn't go below 1
    if (qty < 1) {
        qty = 1;
    }
    //change text
    $(".qty").text(qty);
});

// UPDATE CART
function displayCart(){
    //check if cart empty
    if (localStorage.getItem("cartQty") === null) {
        //then save local storage as 0
        localStorage.setItem("cartQty", 0);
    }
    //declare strings
    var part1 = "Cart (";
        var part3 = ")";
    //concatenate strings and get local storage count
    var newText = part1.concat(localStorage.getItem("cartQty"), part3);
    //display cart text
    $(".top-bar-cart-txt").text(newText);
};

// ADD TO CART
$(document).on("click", ".add-cart", function() {
    //change text to show status change
    $(".add-cart").text("ADDED TO CART!");
    //check if anything has been added to cart before
    if (localStorage.getItem("cartArray") === null) {
        //create new item with selected details
        var currentItem = new item(color, size, qty, price, image);
        //add item to cart array
        cartArray.push(currentItem);
        //save array to local storage
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        //debug console
        console.log("Added Item:");
        console.log(JSON.parse(localStorage.getItem("cartArray")));

        //update local cart items total with page qty
        localCartQty = localCartQty + qty;
        //save updated cart items
        localStorage.setItem("cartQty", localCartQty);
        //debug console
        console.log("Number of cart items:");
        console.log(JSON.parse(localStorage.getItem("cartQty")));
        //update display cart
        displayCart();
    } else {
        //create new item with selected details
        var currentItem = new item(color, size, qty, price, image);
        //add item to cart array
        cartArray = JSON.parse(localStorage.getItem("cartArray"));
        cartArray.push(currentItem);
        //save array to local storage
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        //debug console
        console.log("Added Item:");
        console.log(JSON.parse(localStorage.getItem("cartArray")));

        //get current cart number
        var current = parseInt(localStorage.getItem("cartQty"));
        //add to cart items counter
        localCartQty = current + qty;
        // updates cart quantity
        localStorage.setItem("cartQty", localCartQty);
        //debug console
        console.log("Number of cart items:");
        console.log(JSON.parse(localStorage.getItem("cartQty")));
        //update display cart
        displayCart();
    }
});