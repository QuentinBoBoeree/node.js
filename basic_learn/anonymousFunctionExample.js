/**
 * Created by user on 2017/6/13.
 * 匿名函数
 */
function execute(someFunction, word) {
    someFunction(word);
}

execute(function (word) {
    console.log(word);
}, "hello");
