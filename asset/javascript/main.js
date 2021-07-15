
var header = document.getElementById('header');
var itemsHeader = document.querySelectorAll('#header .nav-lists a');
var iconSearch = document.getElementById('search-icon');

//Scroll header hiện đậm:
window.addEventListener('scroll', function() {

    for(var i = 0 ; i < itemsHeader.length ; i++) {
        var item = itemsHeader[i];

        if(window.pageYOffset > 140) {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 0 10px rgba(0,0,0,0.6)';
            header.style.animation = 'show-header 0.5s ease';
            iconSearch.style.color = '#000';
            item.style.color = '#000';
            menuMobile.style.color = '#000';
        }else {
            header.style.backgroundColor = null;
            header.style.boxShadow = null;
            header.style.animation = null;
            iconSearch.style.color = null;
            item.style.color = null;
            menuMobile.style.color = null;
        }
    }
})

//Hiệu ứng power:
var power90 = document.getElementById('p90');
var power85 = document.getElementById('p85');
var power75 = document.getElementById('p75');

window.addEventListener ('scroll', function() {
    if(window.pageYOffset >700) {
        power90.style.animation = 'pow-incre90 linear 1.5s';
        power85.style.animation = 'pow-incre85 linear 1.5s';
        power75.style.animation = 'pow-incre75 linear 1.5s';
    }else {
        power90.style.animation = null;
        power85.style.animation = null;
        power75.style.animation = null;
    }
})

//Ẩn hiện ô tìm kiếm:
var boxSearch = document.getElementById('box-search');
iconSearch.onclick = function() {
    var boxSearchWidth = boxSearch.clientWidth;
    console.log(boxSearchWidth)
    var isHidden = boxSearch.style.display == boxSearchWidth;
    if(isHidden) {
        boxSearch.style.display = 'inline-block';
    }else {
        boxSearch.style.display = null;
    }
};

//Đóng mở menu:
var menuMobile = document.getElementById('menu-mobile');
var headerHeight = header.clientHeight;

menuMobile.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;

    for(var i = 0 ; i < itemsHeader.length ; i++) {
        var item = itemsHeader[i];

        if (isClosed) {
            header.style.height = 'auto';
            header.style.backgroundColor = '#fff';
            menuMobile.style.color = '#000';
            item.style.color = '#000';
        }else {
            header.style.height = null;
            menuMobile.style.color = null;
            item.style.color = null;
        }
    }
}

//Tự động đóng khi chọn menu:

for(var i = 0 ; i < itemsHeader.length ; i++) {
    var item = itemsHeader[i];
    item.onclick = function () {
        header.style.height = null;
    }
}

