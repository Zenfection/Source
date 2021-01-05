(function () {
    console.log("Đã chạy đổi favicon");
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/23-23-40-07-ctufish.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
(function () {
    var script = document.querySelector("script[rel*='js']") || document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.5.1.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
