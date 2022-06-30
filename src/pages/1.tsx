/**
 * 为什么React hooks
 * 1、类组件难于拆分、复用；嵌套地狱
 * 2、难以理解的 class，避免this指向，各种生命周期、各种数据状态处理
 * 3、v = f(data) /  view = render(data)
 *
 *
 * 使用react hooks注意点
 * 1、不要在循环，条件或嵌套函数中调用Hook，必须始终在 React函数的顶层使用Hook
 * 2、使用useState时候，使用push，pop，splice等直接更改数组对象的坑
 * 3、useState设置状态的时候，只有第一次生效，后期需要更新状态，必须通过useEffect
 * 4、不用滥用userCallback或者useContext等
 *
 * */



