AOS.init();


init = [];
x = setInterval(function() {
    init.push(AOS.init());
    if (init.length >= 2) {
         clearInterval(x);
    }
}, 1000);