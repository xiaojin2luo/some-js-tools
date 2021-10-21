localStorage.setItem('index', 0);
(function() {
    // 保存函数自身引用
    var myself = arguments.callee;
    console.info('第' + localStorage.getItem('index') + "刷。 \n");
    // 获取题目内容
    let examItems = document.querySelectorAll('.examItem');
    if (!examItems) {
        // 内容没有加载完成，稍后重试！
        setTimeout(() => {
            myself();
        }, 500);
    } else {
        // 开始答题
        for (let i = 0; i < examItems.length; i++) {
            console.info('当前正在做' + i + "道题！\n");
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
                console.error('unkown exam type in ' + i);
            }
        }
        // 答题结束，准备提交
        let index = parseInt(localStorage.getItem('index')) + 1;
        localStorage.setItem('index', index);
        console.info("3秒后提交\n");

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
                    document.querySelectorAll('BUTTON')[0].firstElementChild.click();
                    // 滚动屏幕
                    let flag = 1,
                        height = document.body.scrollHeight,
                        stepLngth = 100,
                        steps = 0,
                        allSteps = Math.round(height / stepLngth) / 2;
                    let timer = setInterval(() => {
                        window.scrollBy(0, flag * stepLngth);
                        steps++;
                        if (steps >= allSteps) {
                            steps = 0;
                            flag = -1 * flag;
                        };
                    }, 50);
                    setTimeout(() => {
                        // 检查是否已经返回答题页面
                        if (window.location.href.indexOf('score') < 0) {
                            window.clearInterval(timer);
                            myself();
                        } else {
                            backFunction();
                        }
                    }, 10000);
                } else {
                    submitFunction();
                }
            }, 3000);
        }, 3000);
    }
})();
