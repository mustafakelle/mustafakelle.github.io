var	$window = $(window);
$window.on('load', function() {
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
});