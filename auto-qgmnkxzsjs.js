localStorage.setItem('index', 0);
(function() {
    // 记住答题数目
    // 记住自己
    const myself = arguments.callee;
    console.info('第' + localStorage.getItem('index') + "刷ing\n");
    let examItems = document.querySelectorAll('.examItem');
    for (let i = 0; i < examItems.length; i++) {
        console.info('当前正在做' + i + "道题！\n");
        // 单选题
        if (examItems[i].firstElementChild.firstElementChild.innerHTML == '单选题') {
            let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                num = Math.floor(Math.random() * inputs.length);
            inputs[num].click();
        } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '多选题') {
            // 多选题
            let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                num1 = Math.floor(Math.random() * inputs.length),
                num2 = Math.floor(Math.random() * inputs.length),
                num3 = Math.floor(Math.random() * inputs.length);
            inputs[num1].click();
            inputs[num2].click();
            inputs[num3].click();
        } else if (examItems[i].firstElementChild.firstElementChild.innerHTML == '判断题') {
            let inputs = examItems[i].lastElementChild.querySelectorAll('INPUT'),
                num = Math.floor(Math.random() * inputs.length);
            inputs[num].click();
        } else {
            console.error('unkown exam type in ' + i);
        }
    }

    // 更新计数器
    let index = parseInt(localStorage.getItem('index'))+1;
    localStorage.setItem('index', index);
    console.info("7.5秒后提交\n");
    setTimeout(() => {
        // 提交
        document.querySelector('.tijiao').firstElementChild.click();
        // 点击返回答题页面
        console.info("本次答题完成\n");
        console.info("3秒后返回答题页面\n\n");
        setTimeout(() => {
            document.querySelectorAll('BUTTON')[0].firstElementChild.click();
            setTimeout(() => {
                // 再次刷题
                myself();
            }, 3000);
        }, 5000);
    }, 7500);
})();
