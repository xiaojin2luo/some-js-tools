// auto verify
// 自动打码
class AutoDaMa {
    // 构造函数
    constructor(imgTab) {
        this.imgTab = imgTab;
        // 写入识别字典
        if (!localStorage.getItem('dict')) {
            let dict = [{
                key: '1',
                value: '-------+----------++++++-------+++++++++-----+++++++++++----++++++++++------+++++++++------+--+++++-----------+++++----------+++++-----++--++++++-----++-+++++++----++++++++++-----+--+++++++-----+---+++++++--------++++++---------+++++++-----+++++++++++--+++++++++++++--+++++++++++++++++++++++++++++---++++++++++++---------+--------'
            }, {
                key: '2',
                value: '--++++++-------++++++++++++----+++++++++++----+++---++++++-----------+++++-----------++++-----------++++-----------++++----------++++-+--------+++++-+------++++++-------++++++++------+++++++------++++++++-----++++++++-------++++++++-------+++++++++++++--+++++++++++++---------++++++---'
            }, {
                key: '3',
                value: '----++++++--------++++++++++-----+++++++++++----------++++++-----------++++------------+++------------+++-----------++++----+++++++++++----++++++++++-----+++++++++----------++++++-----------++++------------+++++++-------+++++++++++++++++++--+++++++++++++----+++++++++---'
            }, {
                key: '4',
                value: '--+-------------++++++--------+++++++--------+++++++--------++-++++--------+--++++---+-------++++---+++++--++++----+++++--++++-----++++--++++-----------++++---------++++++----+----+++++++++-++++++++++++++++++++-++++++++--++++-++++-----------++++-----------++++------------+++----------'
            }, {
                key: '5',
                value: '----++++++++-------+++++++++++----+++++++++++----++++----++++++-++++-------+++++++++++----+++++++++++++----++++++++++++-----------+++++-----------++++------------+++------------+++------------+++-+---------++++-++++-----+++++-++++++++++++++--++++++++++++------+++++++---'
            }, {
                key: '6',
                value: '----+++++++++-----++++++++++++--+++++++++++++--++++-------++-++++-----------++++--++-------++++++++++++-+++++++++++++++++++++++-+++++++++++------+++++++++-------++++++++-------++++++++-------++++-+++++----++++---++++++++++++---+++++++++++------++++++++-++--------------+-------------++-------------++'
            }, {
                key: '7',
                value: '------------++---+-------------++++++++-------+++++++++++++--++++++++++++++--------+++++++----------+++++----------++++----------+++++---------+++++----------++++----------+++++---------+++++---------+++++----------+++++---------+++++---------+++++----------+++++--------++++++--------++++++---------'
            }, {
                key: '8',
                value: '---+++++++-------+++++++++++---++++++++++++++-++++-----+++++-++++------++++-++++------++++-+++++-----++++--+++++++++++++--++++++++++++--++++++++++++--+++++----+++++-++++------++++-++++-------++++++++------++++++++++-----+++++-++++++++++++++--+++++++++++------++++++++---'
            }, {
                key: '9',
                value: '----+++-----------++++++++++----++++++++++++--++++++++++++++-++++++++++++++-+++++-----++++-++++-----+++++-++++------++++-++++++---+++++-++++++++++++++-++++++++++++++--+++++++++++++----+++++++++++-+--+----++++++-+++-----+++++++++++++++++++++-+++++++++++++--++++++++++++-----++++++++-----------++------'
            }, {
                key: '+',
                value: '+--------------+--------------+++------------++------++++---++-------+++---+++------+++---+++------+++---+++------+++---+++++--+++++---++-++++++++++++++-++++++++++++++--++++++++++++------+++++-----------++++-----------+++------------++++-----------+++------------++++-------------+----'
            }, {
                key: '-',
                value: '+--------------+--------------++-------------++-------------+--------------+----------------------------+-------------++++----------++++++++++----+++++++++++---++++-+++++++--++++---++++++-++++----------++++-----------+++------------++++++++-------++++++++---------++++++'
            }, {
                key: '*',
                value: '+--------------+--------------+---------------+-++----------++++++---------+++++++---+-++-++++++++++++++++++++++++++++++++-+++++++++++-+---++++++++++-+---+++++++++------++++++++------+++++++++--+-+++++++++++--+++++++++++++--+++++++++++++--++++++++++++++-+++++++++++++++--++++---+++++----+-----+++++--------------++-'
            }];
            localStorage.setItem('dict', JSON.stringify(dict));
        }
    }

    // 二值化函数
    toHex(oringinImageData, newImageData) {
        // console.log(imageData);
        let length = oringinImageData.length,
            pixGrey = 0,
            pixGreyAvg = 0;

        for (let i = 0; i < length; i += 4) {
            pixGrey += oringinImageData[i] * 0.3 + oringinImageData[i + 1] * 0.59 + oringinImageData[i + 2] * 0.11;
        }
        pixGreyAvg = pixGrey / (length / 4);
        for (let j = 0; j < length; j = j + 4) {
            pixGrey = oringinImageData[j] * 0.333 + oringinImageData[j + 1] * 0.333 + oringinImageData[j + 2] * 0.333;
            pixGrey = pixGrey > pixGreyAvg ? 255 : 0;
            newImageData[j] = pixGrey;
            newImageData[j + 1] = pixGrey;
            newImageData[j + 2] = pixGrey;
            newImageData[j + 3] = 255;
        }
        return newImageData;
    }

    // 二值化结果转二维数组
    hex2Xy(imageData, width, height) {
        // console.log(imageData);
        let xyArray = new Array(height);
        // 行循环
        for (let y = 0; y < height; y++) {
            // 列循环
            xyArray[y] = new Array(width);
            for (let x = 0, dataWidth = 4 * width, widthIndex = 0; widthIndex < dataWidth; x++, widthIndex += 4) {
                let r = imageData[y * dataWidth + widthIndex],
                    g = imageData[y * dataWidth + widthIndex + 1],
                    b = imageData[y * dataWidth + widthIndex + 2];
                xyArray[y][x] = (r + g + b) > 500 ? 0 : 1;
            }
        }
        return xyArray;
    }

    // 二维数组转二值化
    xy2Hex(data, canvasContext) {
        let height = data.length,
            width = data[0].length,
            imageData = canvasContext.createImageData(width, height),
            newData = imageData.data,
            pixGrey = 0;
        for (i = 0; i < height; i++) {
            for (j = 0, dataWidth = 4 * width, dataIndex = 0; dataIndex < dataWidth; j++, dataIndex += 4) {
                pixGrey = data[i][j] == 1 ? 0 : 255;
                newData[i * dataWidth + dataIndex] = pixGrey;
                newData[i * dataWidth + dataIndex + 1] = pixGrey;
                newData[i * dataWidth + dataIndex + 2] = pixGrey;
                newData[i * dataWidth + dataIndex + 3] = 255;
            }
        }
        imageData.data = newData;
        return imageData;
    }

    // 腐蚀
    corrode(xyArray) {
        for (let y = 1, length = xyArray.length - 1; y < length; y++) {
            for (let x = 1, width = xyArray[0].length - 1; x < width; x++) {
                if (xyArray[y][x] == 1 && xyArray[y][x + 1] + xyArray[y + 1][x] + xyArray[y - 1][x] + xyArray[y][x - 1] == 0) {
                    xyArray[y][x] = 0;
                }
            }
        }
        return xyArray;
    }

    // 膨胀
    expand(xyArray) {
        for (let y = 1, length = xyArray.length - 1; y < length; y++) {
            for (let x = 1, width = xyArray[0].length - 1; x < width; x++) {
                if (xyArray[y][x] == 0 && xyArray[y][x + 1] + xyArray[y + 1][x] + xyArray[y - 1][x] + xyArray[y][x - 1] == 4) {
                    xyArray[y][x] = 1;
                }
            }
        }
        return xyArray;
    }

    // 纵向切割前后白边
    // 横向切割上下白边
    splitY(xyArray) {
        let sumY = 0,
            spliceIndex = [],
            spliceCount = 0;
        // 数组 【行】【列】
        // x 列 0-79 横坐标
        // y 行  0-33 纵坐标
        for (let y = 0, height = xyArray.length; y < height; y++) {
            let sumY = 0;
            for (let x = 0, width = xyArray[0].length; x < width; x++) {
                sumY += xyArray[y][x];
            }
            if (sumY == 0) spliceIndex.push(y);
            // console.log(sumY);
        }
        // console.log(spliceIndex);
        for (let index = 0; index < spliceIndex.length; index++) {
            xyArray.splice(spliceIndex[index] - spliceCount, 1);
            spliceCount++;
        }
        return xyArray;
    }

    // 转置XY坐标
    Xy2Yx(xyArray) {
        // 高 纵坐标 0-33
        let height = xyArray.length,
            // 宽 横坐标 0-79
            width = xyArray[0].length,
            tmpArray = new Array(width);
        for (let x = 0; x < width; x++) {
            tmpArray[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                tmpArray[x][y] = xyArray[y][x];
            }
        }
        return tmpArray;
    }

    // 重新计算图像大小并生成数据
    reComputImageSize(xyArray, canvasContext) {
        let height = xyArray.length,
            width = xyArray[0].length;
        // 二维数组二值化
        hexData = this.xy2Hex(xyArray, canvasContext);
        // 重新计算图像大小
        newImageData = canvasContext.createImageData(width, height);
        for (let index = 0; index < newImageData.data.length; index++) {
            newImageData.data[index] = hexData.data[index];
        }
        return newImageData;
    }

    // 切割字符 16 14 16
    spliceChar(xyArray) {
        xyArray = this.Xy2Yx(xyArray);
        let chars = [],
            char = [];
        // 第一个字
        for (let i = 0; i <= 14; i++) {
            char.push(xyArray[i]);
        };
        chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
        char = [];
        // 第二个字
        for (let i = 14; i <= 28; i++) {
            char.push(xyArray[i]);
        };
        chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
        char = [];
        // 第三个字
        for (let i = 28; i <= 42; i++) {
            char.push(xyArray[i]);
        };
        chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
        return chars;
    }

    // 计算列上点的数目
    computePointsInRow(xyArray) {
        let point = 0,
            points = [];
        // 数组 【行】【列】
        // x 列 0-79 横坐标
        // y 行  0-33 纵坐标
        for (let y = 0, height = xyArray.length; y < height; y++) {
            point = 0;
            for (let x = 0, width = xyArray[0].length; x < width; x++) {
                point += xyArray[y][x];
            }
            points.push(point);
        }
        return points;
    }

    // 更具字符串比较相似度
    compareSimlerByStr(charStr, dictStr) {
        let length = charStr.length > dictStr.length ? dictStr.length : charStr.length,
            simler = 0;
        for (let i = 0; i < length; i++) {
            if (charStr[i] == dictStr[i]) simler++;
        }
        return simler / length;
    }

    // 二维数组转化为特征值字符串
    xyArray2Str(xyArray) {
        let str = '';
        for (let y = 0; y < xyArray.length; y++) {
            for (let x = 0; x < xyArray[0].length; x++) {
                if (xyArray[y][x] != 0) {
                    str += '+';
                } else {
                    str += '-';
                }
            }
        }
        return str;
    }

    // 识别字符
    identifyChar(str) {
        let dict = localStorage.getItem('dict');
        if (!dict) {
            console.error('dict not exist!');
            return false;
        }
        dict = JSON.parse(dict);
        let similer = [],
            charIndex = 0,
            maxSimiler = 0;
        // 循环比较，得到相似度数组
        for (const key in dict) {
            // console.log(compareSimlerByStr(str, dict[key]['value']));
            // 记住相似度
            similer.push(this.compareSimlerByStr(str, dict[key]['value']));
        }
        // 取得相似度最大值及其索引
        for (let i = 0; i < similer.length; i++) {
            if (similer[i] > maxSimiler) {
                maxSimiler = similer[i];
                charIndex = i;
            }
        }
        // 返回识别结果
        // console.info(dict[charIndex]['key']);
        return dict[charIndex]['key'];
    }

    // 打印二值到控制台
    print2log(xyArray) {
        console.log('打印图形:\n');
        let str = '';
        for (let y = 0; y < xyArray.length; y++) {
            for (let x = 0; x < xyArray[0].length; x++) {
                if (xyArray[y][x] != 0) {
                    str += '+';
                } else {
                    str += '-';
                }
            }
            str += "\n";
        }
        console.log(str);
    }

    // 添加特征值 字符，特征值
    addStr2Storage(key, value) {
        let dict = JSON.parse(localStorage.getItem('dict'));
        if (dict.length > 50) {
            alert('本地数据库已经过大了！');
            return;
        }
        dict.push({
            key,
            value
        });
        localStorage.setItem('dict', JSON.stringify(dict));
        console.info('添加特征值成功！');
    }

    // 清空本地识别库
    clearStrStorage() {
        localStorage.removeItem('dict');
    }

    // 手动添加特征值,训练用的,需要修改指定的验证码图片才能使用
    addStr() {
        // 验证码图片的 css选择器
        // let verifyCodeImage = this.imgTab;
        // verifyCodeImage = document.querySelector(verifyCodeImage);
        let verifyCodeImage = this.imgTab;
        let charIndex = window.prompt('第几个字符？', 1);
        if (charIndex > 0) {
            let char = window.prompt('字符值？', 0);
            if (char) {
                // 创建canvas并插入文档中 
                let canvas = document.createElement('CANVAS');
                canvas.setAttribute('width', '150');
                canvas.setAttribute('height', '100');
                // document.body.appendChild(canvas);
                let canvasContext = canvas.getContext("2d");
                canvas.style.backgroundColor = "red";
                let width = verifyCodeImage.width,
                    height = verifyCodeImage.height;
                canvasContext.drawImage(verifyCodeImage, 0, 0, width, height)
                let imageData = canvasContext.getImageData(0, 0, width, height),
                    newImageData = canvasContext.createImageData(width, height);
                // 二值化
                imageData = this.toHex(imageData.data, newImageData.data);
                // console.log('hexData', imageData);
                // 二维化
                imageData = this.hex2Xy(imageData, width, height);
                // console.log('xyArray', imageData);
                // 腐蚀
                imageData = this.corrode(imageData);
                // 膨胀
                imageData = this.expand(imageData);
                // 切割上下白边
                imageData = this.splitY(imageData);
                // 切割左右白边
                imageData = this.Xy2Yx(imageData);
                imageData = this.splitY(imageData);
                imageData = this.Xy2Yx(imageData);
                // 切割字符
                let chars = this.spliceChar(imageData);
                // 获取指定字符的特征值
                this.addStr2Storage(char, this.xyArray2Str(chars[charIndex - 1]));
            }
        }
    }

    // 自动打码，需要修改指定的验证码图片才能使用
    autoDaMa() {
        // const Image = document.querySelector(this.imgTab),
        const Image = this.imgTab,
            Canvas = document.createElement('CANVAS');

        let ImageWidth = Image.width,
            ImageHeight = Image.height,
            canvasContext = Canvas.getContext("2d");
        canvasContext.drawImage(Image, 0, 0, ImageWidth, ImageHeight);
        // 获取图像数据
        let ImageData = canvasContext.getImageData(0, 0, ImageWidth, ImageHeight),
            newImageData = canvasContext.createImageData(ImageWidth, ImageHeight);
        // 二值化
        let hexData = this.toHex(ImageData.data, newImageData.data);
        // 二维化
        // let xyArray = hex2Xy(hexData, ImageWidth, ImageHeight);
        let xyArray = this.hex2Xy(hexData, ImageWidth, ImageHeight);
        // 腐蚀
        xyArray = this.corrode(xyArray);
        // 膨胀
        xyArray = this.expand(xyArray);
        // 切割
        xyArray = this.splitY(xyArray);
        // 转置XY坐标
        xyArray = this.Xy2Yx(xyArray);
        // 切割
        xyArray = this.splitY(xyArray);
        // 转置XY坐标
        xyArray = this.Xy2Yx(xyArray);
        let chars = this.spliceChar(xyArray);
        // 开始识别
        let char1 = this.identifyChar(this.xyArray2Str(chars[0])),
            char2 = this.identifyChar(this.xyArray2Str(chars[1])),
            char3 = this.identifyChar(this.xyArray2Str(chars[2]));
        let result = 0;
        switch (char2) {
            case '+':
                result = parseInt(char1) + parseInt(char3);
                break;
            case '-':
                result = parseInt(char1) - parseInt(char3);
                break;
            case '*':
                result = parseInt(char1) * parseInt(char3);
                break;
            default:
                result = 0;
                break;
        }
        console.info('解析结果：', char1 + char2 + char3 + '=' + result);
        return result;
    }
}


// begin work
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
