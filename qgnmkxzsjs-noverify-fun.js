if (!localStorage.getItem('index')) {
    localStorage.setItem('index', 0);
}
// 创建显示屏
var display = document.createElement('DIV');
display.id = 'display';
// display.style.textIndent = '2em';
display.style.padding = '2em';
display.style.width = '60%';
display.style.minHeight = '200px';
display.style.outline = '2px solid red';
display.style.textIndent = '2em';
display.style.position = 'fixed';
display.style.top = '50%';
display.style.left = '20%';
display.style.zIndex = 9999;
display.style.color = 'yellow';
display.style.backgroundColor = 'rgba(0,0,0,0.5)';
display.innerHTML = '<h3 style="display:block">日志显示：</h3><span>初始化中......</span><br>';
document.body.appendChild(display);
(function() {
    // 
    document.querySelector('.w1200').firstChild.style.backgroundColor = 'rgba(0,0,0,0.3)';
    // 
    document.querySelector('.knowledge').style.backgroundColor = 'rgba(0,0,0,0.3)';
    if (!display) {
        var display = document.querySelector('#display');
    }
    display.innerHTML = '<h3 style="display:block">日志显示：</h3><span>初始化中......</span><br>';
    // 保存函数自身引用
    var myself = arguments.callee;
    console.info('第' + localStorage.getItem('index') + "刷。 \n");
    display.innerHTML = display.innerHTML + '第' + localStorage.getItem('index') + '刷<br>';
    // 获取题目内容
    let examItems = document.querySelectorAll('.examItem');
    if (!examItems) {
        // 内容没有加载完成，稍后重试！
        setTimeout(() => {
            myself();
        }, 500);
    } else {
        var i = 0;
        var dttimer = setInterval(() => {
            // 聚焦到当前题目
            if (examItems[i - 1]) {
                examItems[i - 1].scrollIntoView();
            }
            examItems[i].lastChild.style.outline = '1px solid #F00';
            console.info('当前正在做' + (i + 1) + "道题！\n");
            display.innerHTML = display.innerHTML + '<span>' + '当前正在做' + (i + 1) + '道题！' + '</span><br>';
            // 开始猜题
            if (examItems[i].firstElementChild.firstElementChild.innerHTML == '单选题') {
                let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                    num = Math.floor(Math.random() * inputs.length);
                inputs[num].focus();
                inputs[num].click();
            } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '多选题') {
                let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                    num1 = Math.floor(Math.random() * inputs.length),
                    num2 = Math.floor(Math.random() * inputs.length),
                    num3 = Math.floor(Math.random() * inputs.length);
                inputs[num1].focus();
                inputs[num1].click();
                inputs[num2].click();
                inputs[num3].click();
            } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '判断题') {
                let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                    num = Math.floor(Math.random() * inputs.length);
                inputs[num].focus();
                inputs[num].click();
            } else {
                alert('遇到了未知的题型,暂时无法解决，请手动刷新重新开始答题！');
                throw Error('遇到了未知的题型,暂时无法解决，请手动刷新重新开始答题！');
            }
            if (i > 0) {
                examItems[i - 1].lastChild.style.outline = 'none';
            }
            i++;
            if (!examItems[i]) {
                // 结束答题任务
                window.clearInterval(dttimer);
                // 答题结束，准备提交
                let index = parseInt(localStorage.getItem('index')) + 1;
                localStorage.setItem('index', index);
                console.info("0.5秒后提交\n");
                display.innerHTML = display.innerHTML + '<span>' + '答题完成，0.5秒后提交！' + '</span><br>';
                setTimeout(function() {
                    // 保存提交操作函数
                    var submitFunction = arguments.callee;
                    // 提交
                    document.querySelector('.tijiao').firstElementChild.click();
                    // 3秒后检查提交结果
                    setTimeout(function() {
                        // 保存返回答题页面操作函数
                        var backFunction = arguments.callee;
                        if (window.location.href.indexOf('score') > 0) {
                            console.info("本次答题完成\n");
                            console.info("现在返回答题页面，准备下一轮答题\n\n");
                            display.innerHTML = display.innerHTML + '<span>' + '本次答题完成，现在返回答题页面，准备下一轮答题！' + '</span><br>';
                            document.querySelectorAll('BUTTON')[0].firstElementChild.click();
                            setTimeout(() => {
                                // 检查是否已经返回答题页面
                                if (window.location.href.indexOf('score') < 0) {
                                    if (document.readyState != 'complete') {
                                        document.onload = () => {
                                            myself();
                                        }
                                    } else {
                                        myself();
                                    }
                                } else {
                                    backFunction();
                                }
                            }, 2000);
                        } else {
                            submitFunction();
                        }
                    }, 3000);
                }, 500);
            }
        }, 1000);
    }
})();
