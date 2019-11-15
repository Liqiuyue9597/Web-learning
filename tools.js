//获取对象属性
function getStyle(obj, name) {
    if(window.getComputedStyle){ //判断是否有这个属性，有则不是IE8浏览器
        //正常浏览器
        return getComputedStyle(obj, null)[name];
    }else{
        //IE8浏览器
        return obj.currentStyle[name];
    } 
}
    /*封装成move函数
        obj：移动对象
        attr:动画的效果
        target：动画移动的目标位置
    */
   //move(obj, attr, speed, target) 加上回调函数让函数move可以连续变化
function move(obj, attr, speed, target, callback){
    
    clearInterval(obj.timer);

    //判断盒子移动的方向，进而去修改速度的正负
    var current = parseInt(getStyle(obj,attr));
    if(current > target){
        speed = -speed;
    }
    obj.timer = setInterval(function(){
        //parseInt将字符串转换为数字
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed; 
        obj.style[attr] = newValue + "px";

        //让动画精准停在设定的目标位置处
        if((newValue > target && speed > 0) || (newValue < target && speed < 0)){
            newValue = target;
        }
        if(newValue === target){
                clearInterval(obj.timer);
                //在函数move（动画）快要结束时使用回调函数，让其他继续变化
                //callback && 作用是如果不传入callback函数也可以运行，先判断是否定义，undefined就不执行callback()
                callback && callback();
        }
    }, 10);    
}     

function addClass(obj, cn) {

    //检查obj中是否含有cn，没有才添加 
    if(!hasClass(obj, cn)){
        obj.className += " " + cn;
    }     
}

//添加class时不能无限制添加，添加一个即可，如果存在就不添加
//定义一个函数，用来向一个检查元素中是否含有指定的class属性
function hasClass(obj, cn){
    //判断obj中是否含有指定的class属性值
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");//\字符在字符串中会被当成转义字符，所以需要两个\\
    return reg.test(obj.className);
}

//删除一个元素中指定的class属性
function removeClass(obj, cn){
   //创建正则表达式
   var reg = new RegExp("\\b" + cn + "\\b");
   obj.className = obj.className.replace(reg, "");
}

//切换一个类：如果元素中具有该类就删除，没有就添加
function toggleClass(obj, cn){
   if(hasClass(obj, cn)){
       removeClass(obj, cn);
   }else{
       addClass(obj, cn);
   }
}
            