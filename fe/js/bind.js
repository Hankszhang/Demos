Function.prototype.bind = Function.prototype.bind || function(ctx) {
    if (typeof this !== "function") {
        throw new Error("被绑定的对象必须是函数！");
    }

    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);

    // 中转用的空函数
    var fNOP = function () {};

    var realBind = function () {
        that.apply(
            // bind返回的新函数被当作构造函数使用时，this指向实例，that指向绑定函数
            this instanceof that ? this : ctx,
            args.concat(Array.prototype.slice.call(arguments))
        );
    };

    // 修改返回函数的prototype，实现对原绑定函数属性的继承（原型链为：实例 -> realBind -> this）

    // 如果直接将realBind.prototype = this.prototype，会导致realBind.prototype与this.prototype
    // 指向同一个引用，修改realBind.prototype会导致this.prototype也被修改，带来副作用。
    // 因此这里使用一个空函数作为中转来避免这个副作用。
    fNOP.prototype = this.prototype;
    realBind.prototype = new fNOP();

    return realBind;
}