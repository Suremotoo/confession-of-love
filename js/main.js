    /**
     * Author laulimxiao
     */

    var offsetX = $("#loveHeart").width() / 2;
    var offsetY = $("#loveHeart").height() / 2 - 55;
    // 设置时间
    var together = new Date();
    together.setFullYear(2016, 9, 21);
    together.setHours(20);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    $('#startDate').text('*' + formatDate(together) + ','); // 相识时间
    $('#untilDate').text('*' + formatDate(new Date()) + '.'); // 今日


    if (!document.createElement('canvas').getContext) {
        var msg = document.createElement("div");
        msg.id = "errorMsg";
        msg.innerHTML = "您的浏览器不支持 HTML5!<br/>推荐使用 Chrome 14+/IE 9+/Firefox 7+/Safari 4+ 等高版本的主流浏览器";
        document.body.appendChild(msg);
        $("#code").css("display", "none")
        $("#copyright").css("position", "absolute");
        $("#copyright").css("bottom", "10px");
        document.execCommand("stop");
    } else {

        // 画心
        setTimeout(function() {
            startHeartAnimation();
        }, 110000);

        // 计算相爱时间
        timeElapse(together);
        setInterval(function() {
            timeElapse(together);
        }, 500);

        // 调整代码位置以及 表爱打印
        adjustCodePosition();
        $("#code").typewriter();

        //打字完后停止打字音效
        setInterval(musicPaused(),90000);

        // 图片轮播
        photoAnimation();
    }

