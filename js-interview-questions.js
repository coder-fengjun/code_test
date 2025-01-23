// 20道JavaScript高频面试题及详细解答

// 1. 闭包是什么？请举例说明
function closureExample() {
    const count = {
        value: 0,
        increment() {
            this.value++;
            console.log(this.value);
        }
    };
    return count;
}
/* 
闭包解析：
- 闭包是函数和其周围状态（词法环境）的引用的组合
- 闭包可以让内部函数访问外部函数的作用域
- 常用于数据私有化和创建函数工厂
*/

// 2. 实现防抖函数
function debounce(fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}
/* 
防抖函数解析：
- 在事件被触发n秒后再执行回调
- 如果在这n秒内事件又被触发，则重新计时
- 适用于搜索框输入、窗口调整等场景
*/

// 3. 实现节流函数
function throttle(fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}
/* 
节流函数解析：
- 规定时间内只执行一次函数
- 适用于滚动事件、按钮点击等场景
*/

// 4. Promise的基本使用和手写Promise
class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        if (this.state === 'rejected') {
            onRejected(this.reason);
        }
        if (this.state === 'pending') {
            this.onResolvedCallbacks.push(() => onFulfilled(this.value));
            this.onRejectedCallbacks.push(() => onRejected(this.reason));
        }
    }
}

// 5. 实现深拷贝
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (hash.has(obj)) return hash.get(obj);

    const cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

// 6. 实现数组扁平化
function flatten(arr) {
    return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
}

// 7. 实现instanceof
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    const prototype = right.prototype;

    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

// 8. 实现new操作符
function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);
    return result instanceof Object ? result : obj;
}

// 9. 实现call方法
Function.prototype.myCall = function(context = window, ...args) {
    const fn = Symbol('fn');
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
};

// 10. 实现apply方法
Function.prototype.myApply = function(context = window, args = []) {
    const fn = Symbol('fn');
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
};

// 11. 实现bind方法
Function.prototype.myBind = function(context, ...args1) {
    const fn = this;
    return function(...args2) {
        return fn.apply(context, [...args1, ...args2]);
    };
};

// 12. 实现EventEmitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event, ...args) {
        const callbacks = this.events[event];
        if (callbacks) {
            callbacks.forEach(callback => callback.apply(this, args));
        }
    }

    off(event, callback) {
        const callbacks = this.events[event];
        if (callbacks) {
            this.events[event] = callbacks.filter(cb => cb !== callback);
        }
    }

    once(event, callback) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

// 13. 实现Promise.all
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new TypeError('promises must be an array'));
        }
        const results = [];
        let count = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => {
                    results[index] = value;
                    count++;
                    if (count === promises.length) resolve(results);
                },
                reason => reject(reason)
            );
        });
    });
}

// 14. 实现Promise.race
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new TypeError('promises must be an array'));
        }
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve, reject);
        });
    });
}

// 15. 实现数组去重
function unique(arr) {
    return [...new Set(arr)];
}

// 16. 实现对象扁平化
function flattenObject(obj, prefix = '') {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// 17. 实现函数柯里化
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...args2) {
            return curried.apply(this, args.concat(args2));
        };
    };
}

// 18. 实现观察者模式
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log('Observer received:', data);
    }
}

// 19. 实现单例模式
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// 20. 实现简单的路由
class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        window.addEventListener('load', this.refresh.bind(this));
        window.addEventListener('hashchange', this.refresh.bind(this));
    }

    route(path, callback) {
        this.routes[path] = callback;
    }

    refresh() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    }
}

// 使用示例
/*
const router = new Router();
router.route('/', () => console.log('首页'));
router.route('/about', () => console.log('关于页面'));
*/