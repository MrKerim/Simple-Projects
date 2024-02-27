document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById("MyImage");
    setTimeout(function() {
        elem.src = "test.jpg";
        elem.style.height = "200px";
        elem.style.width = "200px";

        
        
    }, 3000);


        
});