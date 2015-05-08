var formerPic = "";
var currentPic = "";
var score = 0;

/*
$("#pic1").mouseover(function () {
    if (window.document.pic1.src.indexOf("images/0.jpg") != -1) {
        window.document.pic1.src = 'images/00.jpg';
    }
});

$("#pic1").mouseout(function () {
    if (window.document.pic1.src.indexOf("images/00.jpg") != -1) {
        window.document.pic1.src = 'images/0.jpg';
    }
});
*/
var bindEvent = function () {
    $("#pic1").bind('mouseover',function(){
        mover1();
    });
    $("#pic1").bind('mouseout',function(){
        mout1();
    });
    $("#pic1").bind('mouseup',function(){
        swap1();
    });
    $("#pic2").bind('mouseover',function(){
        mover2();
    });
    $("#pic2").bind('mouseout',function(){
        mout2();
    });
    $("#pic2").bind('mouseup',function(){
        swap2();
    });
    $("#pic3").bind('mouseover',function(){
        mover3();
    });
    $("#pic3").bind('mouseout',function(){
        mout3();
    });
    $("#pic3").bind('mouseup',function(){
        swap3();
    });
    $("#pic4").bind('mouseover',function(){
        mover4();
    });
    $("#pic4").bind('mouseout',function(){
        mout4();
    });
    $("#pic4").bind('mouseup',function(){
        swap4();
    });
    $("#pic5").bind('mouseover',function(){
        mover5();
    });
    $("#pic5").bind('mouseout',function(){
        mout5();
    });
    $("#pic5").bind('mouseup',function(){
        swap5();
    });
    $("#pic6").bind('mouseover',function(){
        mover6();
    });
    $("#pic6").bind('mouseout',function(){
        mout6();
    });
    $("#pic6").bind('mouseup',function(){
        swap6();
    });
    $("#pic7").bind('mouseover',function(){
        mover7();
    });
    $("#pic7").bind('mouseout',function(){
        mout7();
    });
    $("#pic7").bind('mouseup',function(){
        swap7();
    });
    $("#pic8").bind('mouseover',function(){
        mover8();
    });
    $("#pic8").bind('mouseout',function(){
        mout8();
    });
    $("#pic8").bind('mouseup',function(){
        swap8();
    });
    $("#pic9").bind('mouseover',function(){
        mover9();
    });
    $("#pic9").bind('mouseout',function(){
        mout9();
    });
    $("#pic9").bind('mouseup',function(){
        swap9();
    });
    $("#pic10").bind('mouseover',function(){
        mover10();
    });
    $("#pic10").bind('mouseout',function(){
        mout10();
    });
    $("#pic10").bind('mouseup',function(){
        swap10();
    });
    $("#pic11").bind('mouseover',function(){
        mover11();
    });
    $("#pic11").bind('mouseout',function(){
        mout11();
    });
    $("#pic11").bind('mouseup',function(){
        swap11();
    });
    $("#pic12").bind('mouseover',function(){
        mover12();
    });
    $("#pic12").bind('mouseout',function(){
        mout12();
    });
    $("#pic12").bind('mouseup',function(){
        swap12();
    });
    $("#pic13").bind('mouseover',function(){
        mover13();
    });
    $("#pic13").bind('mouseout',function(){
        mout13();
    });
    $("#pic13").bind('mouseup',function(){
        swap13();
    });
    $("#pic14").bind('mouseover',function(){
        mover14();
    });
    $("#pic14").bind('mouseout',function(){
        mout14();
    });
    $("#pic14").bind('mouseup',function(){
        swap14();
    });
    $("#pic15").bind('mouseover',function(){
        mover15();
    });
    $("#pic15").bind('mouseout',function(){
        mout15();
    });
    $("#pic15").bind('mouseup',function(){
        swap15();
    });
    $("#pic16").bind('mouseover',function(){
        mover16();
    });
    $("#pic16").bind('mouseout',function(){
        mout16();
    });
    $("#pic16").bind('mouseup',function(){
        swap16();
    });
    $("#pic17").bind('mouseover',function(){
        mover17();
    });
    $("#pic17").bind('mouseout',function(){
        mout17();
    });
    $("#pic17").bind('mouseup',function(){
        swap17();
    });
    $("#pic18").bind('mouseover',function(){
        mover18();
    });
    $("#pic18").bind('mouseout',function(){
        mout18();
    });
    $("#pic18").bind('mouseup',function(){
        swap18();
    });
    $("#pic19").bind('mouseover',function(){
        mover19();
    });
    $("#pic19").bind('mouseout',function(){
        mout19();
    });
    $("#pic19").bind('mouseup',function(){
        swap19();
    });
    $("#pic20").bind('mouseover',function(){
        mover20();
    });
    $("#pic20").bind('mouseout',function(){
        mout20();
    });
    $("#pic20").bind('mouseup',function(){
        swap20();
    });
}

var unBindEvents = function () {
    $("#pic1").unbind('mouseover');
    $("#pic1").unbind('mouseout');
    $("#pic1").unbind('mouseup');
    $("#pic2").unbind('mouseover');
    $("#pic2").unbind('mouseout');
    $("#pic2").unbind('mouseup');
    $("#pic3").unbind('mouseover');
    $("#pic3").unbind('mouseout');
    $("#pic3").unbind('mouseup');
    $("#pic4").unbind('mouseover');
    $("#pic4").unbind('mouseout');
    $("#pic4").unbind('mouseup');
    $("#pic5").unbind('mouseover');
    $("#pic5").unbind('mouseout');
    $("#pic5").unbind('mouseup');
    $("#pic6").unbind('mouseover');
    $("#pic6").unbind('mouseout');
    $("#pic6").unbind('mouseup');
    $("#pic7").unbind('mouseover');
    $("#pic7").unbind('mouseout');
    $("#pic7").unbind('mouseup');
    $("#pic8").unbind('mouseover');
    $("#pic8").unbind('mouseout');
    $("#pic8").unbind('mouseup');
    $("#pic9").unbind('mouseover');
    $("#pic9").unbind('mouseout');
    $("#pic9").unbind('mouseup');
    $("#pic10").unbind('mouseover');
    $("#pic10").unbind('mouseout');
    $("#pic10").unbind('mouseup');
    $("#pic11").unbind('mouseover');
    $("#pic11").unbind('mouseout');
    $("#pic11").unbind('mouseup');
    $("#pic12").unbind('mouseover');
    $("#pic12").unbind('mouseout');
    $("#pic12").unbind('mouseup');
    $("#pic13").unbind('mouseover');
    $("#pic13").unbind('mouseout');
    $("#pic13").unbind('mouseup');
    $("#pic14").unbind('mouseover');
    $("#pic14").unbind('mouseout');
    $("#pic14").unbind('mouseup');
    $("#pic15").unbind('mouseover');
    $("#pic15").unbind('mouseout');
    $("#pic15").unbind('mouseup');
    $("#pic16").unbind('mouseover');
    $("#pic16").unbind('mouseout');
    $("#pic16").unbind('mouseup');
    $("#pic17").unbind('mouseover');
    $("#pic17").unbind('mouseout');
    $("#pic17").unbind('mouseup');
    $("#pic18").unbind('mouseover');
    $("#pic18").unbind('mouseout');
    $("#pic18").unbind('mouseup');
    $("#pic19").unbind('mouseover');
    $("#pic19").unbind('mouseout');
    $("#pic19").unbind('mouseup');
    $("#pic20").unbind('mouseover');
    $("#pic20").unbind('mouseout');
    $("#pic20").unbind('mouseup');
}

//clear the whole game section
function Clear() {
    formerPic = "";
    currentPic = "";
    //clear score section
    score = 0;
    $('#score').html(score);
    //clear picture section
    window.document.pic1.src = 'images/0.jpg';
    window.document.pic2.src = 'images/0.jpg';
    window.document.pic3.src = 'images/0.jpg';
    window.document.pic4.src = 'images/0.jpg';
    window.document.pic5.src = 'images/0.jpg';
    window.document.pic6.src = 'images/0.jpg';
    window.document.pic7.src = 'images/0.jpg';
    window.document.pic8.src = 'images/0.jpg';
    window.document.pic9.src = 'images/0.jpg';
    window.document.pic10.src = 'images/0.jpg';
    window.document.pic11.src = 'images/0.jpg';
    window.document.pic12.src = 'images/0.jpg';
    window.document.pic13.src = 'images/0.jpg';
    window.document.pic14.src = 'images/0.jpg';
    window.document.pic15.src = 'images/0.jpg';
    window.document.pic16.src = 'images/0.jpg';
    window.document.pic17.src = 'images/0.jpg';
    window.document.pic18.src = 'images/0.jpg';
    window.document.pic19.src = 'images/0.jpg';
    window.document.pic20.src = 'images/0.jpg';
}

function Reset() {
    if (window.document.pic1.src.indexOf(formerPic) != -1 || window.document.pic1.src.indexOf(currentPic) != -1) {
        window.document.pic1.src = 'images/0.jpg';
    }
    if (window.document.pic2.src.indexOf(formerPic) != -1 || window.document.pic2.src.indexOf(currentPic) != -1) {
        window.document.pic2.src = 'images/0.jpg';
    }
    if (window.document.pic3.src.indexOf(formerPic) != -1 || window.document.pic3.src.indexOf(currentPic) != -1) {
        window.document.pic3.src = 'images/0.jpg';
    }
    if (window.document.pic4.src.indexOf(formerPic) != -1 || window.document.pic4.src.indexOf(currentPic) != -1) {
        window.document.pic4.src = 'images/0.jpg';
    }
    if (window.document.pic5.src.indexOf(formerPic) != -1 || window.document.pic5.src.indexOf(currentPic) != -1) {
        window.document.pic5.src = 'images/0.jpg';
    }
    if (window.document.pic6.src.indexOf(formerPic) != -1 || window.document.pic6.src.indexOf(currentPic) != -1) {
        window.document.pic6.src = 'images/0.jpg';
    }
    if (window.document.pic7.src.indexOf(formerPic) != -1 || window.document.pic7.src.indexOf(currentPic) != -1) {
        window.document.pic7.src = 'images/0.jpg';
    }
    if (window.document.pic8.src.indexOf(formerPic) != -1 || window.document.pic8.src.indexOf(currentPic) != -1) {
        window.document.pic8.src = 'images/0.jpg';
    }
    if (window.document.pic9.src.indexOf(formerPic) != -1 || window.document.pic9.src.indexOf(currentPic) != -1) {
        window.document.pic9.src = 'images/0.jpg';
    }
    if (window.document.pic10.src.indexOf(formerPic) != -1 || window.document.pic10.src.indexOf(currentPic) != -1) {
        window.document.pic10.src = 'images/0.jpg';
    }
    if (window.document.pic11.src.indexOf(formerPic) != -1 || window.document.pic11.src.indexOf(currentPic) != -1) {
        window.document.pic11.src = 'images/0.jpg';
    }
    if (window.document.pic12.src.indexOf(formerPic) != -1 || window.document.pic12.src.indexOf(currentPic) != -1) {
        window.document.pic12.src = 'images/0.jpg';
    }
    if (window.document.pic13.src.indexOf(formerPic) != -1 || window.document.pic13.src.indexOf(currentPic) != -1) {
        window.document.pic13.src = 'images/0.jpg';
    }
    if (window.document.pic14.src.indexOf(formerPic) != -1 || window.document.pic14.src.indexOf(currentPic) != -1) {
        window.document.pic14.src = 'images/0.jpg';
    }
    if (window.document.pic15.src.indexOf(formerPic) != -1 || window.document.pic15.src.indexOf(currentPic) != -1) {
        window.document.pic15.src = 'images/0.jpg';
    }
    if (window.document.pic16.src.indexOf(formerPic) != -1 || window.document.pic16.src.indexOf(currentPic) != -1) {
        window.document.pic16.src = 'images/0.jpg';
    }
    if (window.document.pic17.src.indexOf(formerPic) != -1 || window.document.pic17.src.indexOf(currentPic) != -1) {
        window.document.pic17.src = 'images/0.jpg';
    }
    if (window.document.pic18.src.indexOf(formerPic) != -1 || window.document.pic18.src.indexOf(currentPic) != -1) {
        window.document.pic18.src = 'images/0.jpg';
    }
    if (window.document.pic19.src.indexOf(formerPic) != -1 || window.document.pic19.src.indexOf(currentPic) != -1) {
        window.document.pic19.src = 'images/0.jpg';
    }
    if (window.document.pic20.src.indexOf(formerPic) != -1 || window.document.pic20.src.indexOf(currentPic) != -1) {
        window.document.pic20.src = 'images/0.jpg';
    }
    formerPic = "";
    currentPic = "";
};

function sleep(sleepTime) {
    for (var start = Date.now(); Date.now() - start <= sleepTime;);
}

function addRecord() {
    score++;
    $('#score').html(score);
    formerPic = "";
    currentPic = "";
}

window.swap1 = function () {
    if (window.document.pic1.src.indexOf("images/00.jpg") != -1) {
        window.document.pic1.src = 'images/1.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic1.src;
    } else if (formerPic == window.document.pic1.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic1.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap2 = function () {
    if (window.document.pic2.src.indexOf("images/00.jpg") != -1) {
        window.document.pic2.src = 'images/2.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic2.src;
    } else if (formerPic == window.document.pic2.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic2.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap3 = function () {
    if (window.document.pic3.src.indexOf("images/00.jpg") != -1) {
        window.document.pic3.src = 'images/3.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic3.src;
    } else if (formerPic == window.document.pic3.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic3.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap4 = function () {
    if (window.document.pic4.src.indexOf("images/00.jpg") != -1) {
        window.document.pic4.src = 'images/4.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic4.src;
    } else if (formerPic == window.document.pic4.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic4.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap5 = function () {
    if (window.document.pic5.src.indexOf("images/00.jpg") != -1) {
        window.document.pic5.src = 'images/5.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic5.src;
    } else if (formerPic == window.document.pic5.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic5.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap6 = function () {
    if (window.document.pic6.src.indexOf("images/00.jpg") != -1) {
        window.document.pic6.src = 'images/6.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic6.src;
    } else if (formerPic == window.document.pic6.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic6.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap7 = function () {
    if (window.document.pic7.src.indexOf("images/00.jpg") != -1) {
        window.document.pic7.src = 'images/7.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic7.src;
    } else if (formerPic == window.document.pic7.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic7.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap8 = function () {
    if (window.document.pic8.src.indexOf("images/00.jpg") != -1) {
        window.document.pic8.src = 'images/8.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic8.src;
    } else if (formerPic == window.document.pic8.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic8.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap9 = function () {
    if (window.document.pic9.src.indexOf("images/00.jpg") != -1) {
        window.document.pic9.src = 'images/9.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic9.src;
    } else if (formerPic == window.document.pic9.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic9.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap10 = function () {
    if (window.document.pic10.src.indexOf("images/00.jpg") != -1) {
        window.document.pic10.src = 'images/10.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic10.src;
    } else if (formerPic == window.document.pic10.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic10.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap11 = function () {
    if (window.document.pic11.src.indexOf("images/00.jpg") != -1) {
        window.document.pic11.src = 'images/1.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic11.src;
    } else if (formerPic == window.document.pic11.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic11.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap12 = function () {
    if (window.document.pic12.src.indexOf("images/00.jpg") != -1) {
        window.document.pic12.src = 'images/2.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic12.src;
    } else if (formerPic == window.document.pic12.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic12.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap13 = function () {
    if (window.document.pic13.src.indexOf("images/00.jpg") != -1) {
        window.document.pic13.src = 'images/3.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic13.src;
    } else if (formerPic == window.document.pic13.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic13.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap14 = function () {
    if (window.document.pic14.src.indexOf("images/00.jpg") != -1) {
        window.document.pic14.src = 'images/4.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic14.src;
    } else if (formerPic == window.document.pic14.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic14.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap15 = function () {
    if (window.document.pic15.src.indexOf("images/00.jpg") != -1) {
        window.document.pic15.src = 'images/5.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic15.src;
    } else if (formerPic == window.document.pic15.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic15.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap16 = function () {
    if (window.document.pic16.src.indexOf("images/00.jpg") != -1) {
        window.document.pic16.src = 'images/6.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic16.src;
    } else if (formerPic == window.document.pic16.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic16.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap17 = function () {
    if (window.document.pic17.src.indexOf("images/00.jpg") != -1) {
        window.document.pic17.src = 'images/7.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic17.src;
    } else if (formerPic == window.document.pic17.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic17.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap18 = function () {
    if (window.document.pic18.src.indexOf("images/00.jpg") != -1) {
        window.document.pic18.src = 'images/8.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic18.src;
    } else if (formerPic == window.document.pic18.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic18.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap19 = function () {
    if (window.document.pic19.src.indexOf("images/00.jpg") != -1) {
        window.document.pic19.src = 'images/9.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic19.src;
    } else if (formerPic == window.document.pic19.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic19.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.swap20 = function () {
    if (window.document.pic20.src.indexOf("images/00.jpg") != -1) {
        window.document.pic20.src = 'images/10.jpg';
    }

    if (formerPic == "") {
        formerPic = window.document.pic20.src;
    } else if (formerPic == window.document.pic20.src) {
        window.document.scorepic.src = 'images/dui.jpg';
        addRecord();
    } else {
        currentPic = window.document.pic20.src;
        window.document.scorepic.src = 'images/cuo.jpg';
        window.setTimeout(Reset, 1000);
    }
}

window.mover1 = function () {
    if (window.document.pic1.src.indexOf("images/0.jpg") != -1) {
        window.document.pic1.src = 'images/00.jpg';
    }
}

window.mover2 = function () {
    if (window.document.pic2.src.indexOf("images/0.jpg") != -1) {
        window.document.pic2.src = 'images/00.jpg';
    }
}

window.mover3 = function () {
    if (window.document.pic3.src.indexOf("images/0.jpg") != -1) {
        window.document.pic3.src = 'images/00.jpg';
    }
}

window.mover4 = function () {
    if (window.document.pic4.src.indexOf("images/0.jpg") != -1) {
        window.document.pic4.src = 'images/00.jpg';
    }
}

window.mover5 = function () {
    if (window.document.pic5.src.indexOf("images/0.jpg") != -1) {
        window.document.pic5.src = 'images/00.jpg';
    }
}

window.mover6 = function () {
    if (window.document.pic6.src.indexOf("images/0.jpg") != -1) {
        window.document.pic6.src = 'images/00.jpg';
    }
}

window.mover7 = function () {
    if (window.document.pic7.src.indexOf("images/0.jpg") != -1) {
        window.document.pic7.src = 'images/00.jpg';
    }
}

window.mover8 = function () {
    if (window.document.pic8.src.indexOf("images/0.jpg") != -1) {
        window.document.pic8.src = 'images/00.jpg';
    }
}

window.mover9 = function () {
    if (window.document.pic9.src.indexOf("images/0.jpg") != -1) {
        window.document.pic9.src = 'images/00.jpg';
    }
}

window.mover10 = function () {
    if (window.document.pic10.src.indexOf("images/0.jpg") != -1) {
        window.document.pic10.src = 'images/00.jpg';
    }
}

window.mover11 = function () {
    if (window.document.pic11.src.indexOf("images/0.jpg") != -1) {
        window.document.pic11.src = 'images/00.jpg';
    }
}

window.mover12 = function () {
    if (window.document.pic12.src.indexOf("images/0.jpg") != -1) {
        window.document.pic12.src = 'images/00.jpg';
    }
}

window.mover13 = function () {
    if (window.document.pic13.src.indexOf("images/0.jpg") != -1) {
        window.document.pic13.src = 'images/00.jpg';
    }
}

window.mover14 = function () {
    if (window.document.pic14.src.indexOf("images/0.jpg") != -1) {
        window.document.pic14.src = 'images/00.jpg';
    }
}

window.mover15 = function () {
    if (window.document.pic15.src.indexOf("images/0.jpg") != -1) {
        window.document.pic15.src = 'images/00.jpg';
    }
}

window.mover16 = function () {
    if (window.document.pic16.src.indexOf("images/0.jpg") != -1) {
        window.document.pic16.src = 'images/00.jpg';
    }
}

window.mover17 = function () {
    if (window.document.pic17.src.indexOf("images/0.jpg") != -1) {
        window.document.pic17.src = 'images/00.jpg';
    }
}

window.mover18 = function () {
    if (window.document.pic18.src.indexOf("images/0.jpg") != -1) {
        window.document.pic18.src = 'images/00.jpg';
    }
}

window.mover19 = function () {
    if (window.document.pic19.src.indexOf("images/0.jpg") != -1) {
        window.document.pic19.src = 'images/00.jpg';
    }
}

window.mover20 = function () {
    if (window.document.pic20.src.indexOf("images/0.jpg") != -1) {
        window.document.pic20.src = 'images/00.jpg';
    }
}

window.mout1 = function () {
    if (window.document.pic1.src.indexOf("images/00.jpg") != -1) {
        window.document.pic1.src = 'images/0.jpg';
    }
}

window.mout2 = function () {
    if (window.document.pic2.src.indexOf("images/00.jpg") != -1) {
        window.document.pic2.src = 'images/0.jpg';
    }
}

window.mout3 = function () {
    if (window.document.pic3.src.indexOf("images/00.jpg") != -1) {
        window.document.pic3.src = 'images/0.jpg';
    }
}

window.mout4 = function () {
    if (window.document.pic4.src.indexOf("images/00.jpg") != -1) {
        window.document.pic4.src = 'images/0.jpg';
    }
}

window.mout5 = function () {
    if (window.document.pic5.src.indexOf("images/00.jpg") != -1) {
        window.document.pic5.src = 'images/0.jpg';
    }
}

window.mout6 = function () {
    if (window.document.pic6.src.indexOf("images/00.jpg") != -1) {
        window.document.pic6.src = 'images/0.jpg';
    }
}

window.mout7 = function () {
    if (window.document.pic7.src.indexOf("images/00.jpg") != -1) {
        window.document.pic7.src = 'images/0.jpg';
    }
}

window.mout8 = function () {
    if (window.document.pic8.src.indexOf("images/00.jpg") != -1) {
        window.document.pic8.src = 'images/0.jpg';
    }
}

window.mout9 = function () {
    if (window.document.pic9.src.indexOf("images/00.jpg") != -1) {
        window.document.pic9.src = 'images/0.jpg';
    }
}

window.mout10 = function () {
    if (window.document.pic10.src.indexOf("images/00.jpg") != -1) {
        window.document.pic10.src = 'images/0.jpg';
    }
}

window.mout11 = function () {
    if (window.document.pic11.src.indexOf("images/00.jpg") != -1) {
        window.document.pic11.src = 'images/0.jpg';
    }
}

window.mout12 = function () {
    if (window.document.pic12.src.indexOf("images/00.jpg") != -1) {
        window.document.pic12.src = 'images/0.jpg';
    }
}

window.mout13 = function () {
    if (window.document.pic13.src.indexOf("images/00.jpg") != -1) {
        window.document.pic13.src = 'images/0.jpg';
    }
}

window.mout14 = function () {
    if (window.document.pic14.src.indexOf("images/00.jpg") != -1) {
        window.document.pic14.src = 'images/0.jpg';
    }
}

window.mout15 = function () {
    if (window.document.pic15.src.indexOf("images/00.jpg") != -1) {
        window.document.pic15.src = 'images/0.jpg';
    }
}

window.mout16 = function () {
    if (window.document.pic16.src.indexOf("images/00.jpg") != -1) {
        window.document.pic16.src = 'images/0.jpg';
    }
}

window.mout17 = function () {
    if (window.document.pic17.src.indexOf("images/00.jpg") != -1) {
        window.document.pic17.src = 'images/0.jpg';
    }
}

window.mout18 = function () {
    if (window.document.pic18.src.indexOf("images/00.jpg") != -1) {
        window.document.pic18.src = 'images/0.jpg';
    }
}

window.mout19 = function () {
    if (window.document.pic19.src.indexOf("images/00.jpg") != -1) {
        window.document.pic19.src = 'images/0.jpg';
    }
}

window.mout20 = function () {
    if (window.document.pic20.src.indexOf("images/00.jpg") != -1) {
        window.document.pic20.src = 'images/0.jpg';
    }
}
