window.addEventListener('load', function () {
    var box = document.querySelector('.box');
    var bul = document.querySelector('.box-ul');
    var pul = document.querySelector('.pot-ul');
    var potli = pul.querySelectorAll('.pot-li');

    var num = 0;
    var timer = null;
    timer = setInterval(function () {
        num++;
        var translatex = -num * box.offsetWidth;
        bul.style.transition = 'all .5s';
        bul.style.transform = 'translateX(' + translatex + 'px)';

    }, 3000);

    // 监听过渡完成的事件transitionend,谁做过渡给谁加
    bul.addEventListener('transitionend', function () {
        if (num >= 3) {
            num = 0;
            bul.style.transition = "none";
            translatex = - num * box.offsetWidth;
            bul.style.transform = 'translateX(' + translatex + 'px)';
        }
        else if (num < 0) {
            num = 2;
            bul.style.transition = "none";
            translatex = - num * box.offsetWidth;
            bul.style.transform = 'translateX(' + translatex + 'px)';
        }
        pul.querySelector('.current').classList.remove('current');
        potli[num].classList.add('current');
    })

    var startx = 0;
    var movex = 0;
    var flag = false;
    bul.addEventListener('touchstart', function (e) {
        startx = e.targetTouches[0].pageX;
        clearInterval(timer);
    })

    bul.addEventListener('touchmove', function (e) {
        flag = true;
        movex = e.targetTouches[0].pageX - startx;
        translatex = -box.offsetWidth * num + movex;
        bul.style.transition = "none";
        bul.style.transform = 'translateX(' + translatex + 'px)';
    })
    bul.addEventListener('touchend', function (e) {
        if (flag) {
            flag = false;
            if (Math.abs(movex) >= 50) {
                if (movex > 0) {
                    num--;
                }
                if (movex < 0) {
                    num++;
                }
                var translatex = -num * box.offsetWidth;
                bul.style.transition = "all .5s";
                bul.style.transform = 'translateX(' + translatex + 'px)';
            }
            else {
                var translatex = 0;
                bul.style.transition = "none";
                bul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        clearInterval(timer);
        timer = setInterval(function () {
            num++;
            var translatex = -num * box.offsetWidth;
            bul.style.transition = 'all .5s';
            bul.style.transform = 'translateX(' + translatex + 'px)';

        }, 3000);
    })
})
