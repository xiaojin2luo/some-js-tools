(function() {
    // 将原来的网页装在一个容器里，卡死了就只需要刷新这个容器就行，达到永远不刷新页面的效果
    document.body.innerHTML = '';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    var iframe = document.createElement('IFRAME');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    document.body.appendChild(iframe);
    iframe.src = window.location.href;
    // 创建显示屏
    var display = document.createElement('DIV');
    display.id = 'display';
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

    function doExamTest() {
        return new Promise(function(resolve, reject) {
            // 获取题目内容
            var examItems = iframe.contentDocument.querySelectorAll('.examItem');
            // 设置30s超时
            var timer = setTimeout(() => {
                reject('做题超时');
            }, 30000);
            // 定义当前题目序号
            var i = 0;
            // 显示刷题记录
            display.innerHTML = display.innerHTML + '第' + localStorage.getItem('index') + '刷<br>';
            var dttimer = setInterval(function() {
                // 聚焦到当前题目的上一题，这一当前题目正处于视野正中间
                if (examItems[i - 1]) {
                    examItems[i - 1].scrollIntoView();
                }
                // 用红线画出当前题目的轮廓
                examItems[i].lastChild.style.outline = '1px solid #F00';
                // console.info('当前正在做' + (i + 1) + "道题！\n");
                display.innerHTML = display.innerHTML + '<span>' + '当前正在做' + (i + 1) + '道题！' + '</span><br>';
                // 开始猜题
                if (examItems[i].firstElementChild.firstElementChild.innerHTML == '单选题') {
                    let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                        num = Math.floor(Math.random() * inputs.length);
                    // 全部选择C
                    // num = 2;
                    inputs[num].focus();
                    inputs[num].click();
                } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '多选题') {
                    let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                        num1 = Math.floor(Math.random() * inputs.length),
                        num2 = Math.floor(Math.random() * inputs.length),
                        num3 = Math.floor(Math.random() * inputs.length);
                    // // 全部选择A,B
                    // num2 = 1,
                    // num1 = 0;
                    inputs[num1].focus();
                    inputs[num1].click();
                    inputs[num2].click();
                    inputs[num3].click();
                } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '判断题') {
                    let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                        num = Math.floor(Math.random() * inputs.length);
                    // 全部选错
                    // num = 1;
                    inputs[num].focus();
                    inputs[num].click();
                } else {
                    alert('遇到了未知的题型,暂时无法解决，请手动刷新重新开始答题！');
                    throw Error('遇到了未知的题型,暂时无法解决，请手动刷新重新开始答题！');
                }
                // 取消红框
                if (i > 0) {
                    examItems[i - 1].lastChild.style.outline = 'none';
                }
                i++;
                // 完了，提交
                if (examItems[i] === undefined) {
                    // 结束答题任务
                    window.clearInterval(dttimer);
                    // console.log('timer', typeof timer);
                    window.clearTimeout(timer);
                    // 答题结束，准备提交
                    localStorage.setItem('index', parseInt(localStorage.getItem('index')) + 1);
                    display.innerHTML = display.innerHTML + '<span>' + '答题完成，0.5秒后提交！' + '</span><br>';
                    // console.info("答题完成，0.5秒后提交\n");
                    resolve('OK');
                }
                // 继续答下一题
            }, 1000);
        })
    }

    function isExamLoad() {
        return new Promise(function(resolve, reject) {
            var outTimer = setTimeout(() => {
                reject('overTime');
            }, 15000)
            var timer = setInterval(() => {
                var examItems = iframe.contentDocument.querySelectorAll('.examItem');
                if (examItems.length > 0) {
                    window.clearInterval(timer);
                    window.clearTimeout(outTimer);
                    resolve('OK');
                }
            }, 500);
        });
    }

    function isSubmitEnd() {
        return new Promise(function(resolve, reject) {
            var outTimer = setTimeout(() => {
                reject('timeOver');
            }, 15000);
            var timer = setInterval(() => {
                if (iframe.contentDocument.querySelectorAll('button').length > 1) {
                    window.clearInterval(timer);
                    window.clearTimeout(outTimer);
                    resolve('OK');
                }
            }, 500);
        });
    }

    iframe.onload = function() {
        if (!localStorage.getItem('index')) {
            localStorage.setItem('index', 0);
        };
        isExamLoad().then(() => {
            return doExamTest();
        }).then(() => {
            iframe.contentDocument.querySelector('.tijiao').firstElementChild.click();
            return isSubmitEnd();
        }).then((state) => {
            console.log(state);
            // console.log('一轮答题完成！');
            display.innerHTML = '<h3 style="display:block">日志显示：</h3><span>初始化中......</span><br>';
            // 更新计数器
            localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1);
            // 返回答题界面
            setTimeout(() => {
                iframe.src = window.location.href;
            }, 2000);
        }).catch((err) => {
            console.error(err);
            display.innerHTML = '<h3 style="display:block">日志显示：</h3><span>初始化中......</span><br>';
            // 更新计数器
            localStorage.setItem('count', parseInt(localStorage.getItem('count')) + 1);
            // 返回答题界面
            iframe.src = window.location.href;
        });
    }
})();
