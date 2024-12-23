void function(win){
    'use strict'
    var Touch = {
        version: '0.2',
        detectGuesture: detectGuesture
    }

    var fakeMouseEvents = [];
    var DELAY = 300;
    setTimeout(function(i){
        console.warn('no buggy fake mouse event?', fakeMouseEvents[i]);
        fakeMouseEvents[i] = null;
    }, DELAY, i);

    //检测手势基类
    var noop = function(){};
    function GestureDetector(settings){
        this.settings = Object.create(this.defaultSettings);
        this.overrideSettings(settings);
    };

    Object.defineProperties(GestureDetector.prototype,
        {
            ontouchstart: {value: noop},
            ontouchend: {value: noop},
            ontouchmove: {value: noop},
            ontouchcancel: {value: noop},
            overrideSettings: {value: function(settings){
                for(key in settings){
                    this.settings[key] = settings[key];
                }
            }}
        }
    );

    //封装为外部接口
    win.Zhi = Touch;
}(window);
