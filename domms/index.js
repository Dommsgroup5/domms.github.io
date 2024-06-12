$(document).ready(function() {
    $('#calculateButton').click(function() {
        let totalPrice = 0;

        const bannerQuantity = parseInt($('#bannerQuantity').val());
        if (!isNaN(bannerQuantity) && bannerQuantity > 0) {
            totalPrice += bannerQuantity * 25;
        }

        const menuQuantity = parseInt($('#menuQuantity').val());
        if (!isNaN(menuQuantity) && menuQuantity > 0) {
            totalPrice += menuQuantity * 20;
        }

        const galleryQuantity = parseInt($('#galleryQuantity').val());
        if (!isNaN(galleryQuantity) && galleryQuantity > 0) {
            totalPrice += galleryQuantity;
        }

        const linksQuantity = parseInt($('#linksQuantity').val());
        if (!isNaN(linksQuantity) && linksQuantity > 0) {
            totalPrice += linksQuantity * 15;
        }

        const formsQuantity = parseInt($('#formsQuantity').val());
        if (!isNaN(formsQuantity) && formsQuantity > 0) {
            totalPrice += formsQuantity * 20;
        }

        $('#totalPrice').text(totalPrice.toFixed(2));
    });
});
