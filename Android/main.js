(function () {
    console.log("Đã chạy đổi favicon");
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/23-23-40-07-ctufish.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
(function () {
    console.log("Đã chèn css");
    var link = document.querySelector("link[rel*='css']") || document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://zenfection.github.io/Source/Android/style.css';
    document.getElementsByTagName('head')[1].appendChild(link);
})();