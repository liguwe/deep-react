type U = {
    id: number,
    name: string
};

function fn<T extends U>(u: T): T {
    return {
        ...u,
        id: 1,
        name: 'xx'
    }
}


/*************************************************
 * // ::::如何防范
 * 1、阻止不明外域的访问
 *      同源检测
 * 2、Samesite Cookie
 *      提交时要求附加本域才能获取的信息，
 *      Samesite=Strict|Lax，
 *
 *          Strict：举个实际的例子就是，假如淘宝网站用来识别用户登录与否的 Cookie 被设置成了 Samesite=Strict，
 *          那么用户从百度搜索页面甚至天猫页面的链接点击进入淘宝后，淘宝都不会是登录状态，
 *          因为淘宝的服务器不会接受到那个 Cookie，其它网站发起的对淘宝的任意请求都不会带上那个 Cookie
 *
 *          Lax ：如果SamesiteCookie被设置为Lax，那么其他网站通过页面跳转过来的时候可以使用Cookie，
 *          可以保障外域连接打开页面时用户的登录状态。但相应的，其安全性也比较低。
 *
 *      致命缺陷：不支持子域，就要求每个子域都需要重新登录
 *
 * 3、CSRF Token
 *      双重Cookie验证
 *          在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如csrfcookie=v8g9e4ksfhw）。
 *          在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw）。
 *          后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。
 *          不适合多子域名场景
 *      要求所有的用户请求都携带一个CSRF攻击者无法获取到的Token/cookie，可以存在local starage
 *  4、前端提示
 *      当前用户打开其他用户填写的链接时，需告知风险（知乎跳转外链，等等都会告知风险）。
 ************************************************/

