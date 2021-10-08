localStorage.setItem('index', 0);
(function() {
    class AutoDaMa {
        constructor(imgTab) {
            this.imgTab = imgTab;
            if (!localStorage.getItem('dict')) {
                let dict = [{ "key": "1", "value": "----+++++++-----------+++++++++---------++++++++++---------++++++++++--------------+++++--------------+++++--------------+++++--------------+++++-------------++++++-------------+++++--------------+++++-----+++------+++++-----+++------+++++-----+++------+++++----++++------+++++----++++------+++++-----+++++---++++++-------+++++++++++---------++++++++++++++-----+++++++++++++++-----++++++++++++++-------------+++++-----" }, { "key": "2", "value": "--++++++++++++------+++++++++++++-----++++++++++++++----+++++++++++++++---+++------++++++-+-----------+++++-+-----------+++++-+----------++++++------------++++++-----------++++++-----------+++++++----------++++++++-------++++++++++--+----++++++++++---+--+++++++++++----+-++++++++++------+-+++++++++++++++---+++++++++++++++---+++++++++++++++-------+++++++++++++---------------+++----------------++----------------++" }, { "key": "3", "value": "-----++++++++---------++++++++++----++--+++++++++++++-+++--++++++++++++++-----------++++++-------------+++++-------------+++++-------------+++++-------------+++++------+++++++++++------+++++++++++-------+++++++++++--------++++++++++-------------++++++-------------++++++-------------+++++-++++-------+++++--++++++++++++++++---++++++++++++++-----++++++++++++--------++++++-++----" }, { "key": "4", "value": "-----------+++++++----------++++++++---------+++++++++--------++++++++++-------+++++++++++------++++++++++++-----++++++-++++++----+++++++-++++++----++++++--+++++++++++++++---++++++++++++++----+++++++++++++-----++++++++++++++++++++++++-+++++++++++++++++-+++++++++++++++++------++++++++++++-----------+++++++-----------++++++------------++++++------------++++++-------------++++--" }, { "key": "5", "value": "----+++++++++----------++++++++++-++------++++++++++++++-----++++++++++++++-----+++++----+++++-----+++++------++-----+++++++++---------+++++++++++++------+++++++++++++-------+++++++++++++-------------+++++++-------------++++++---------------+++++--------------+++++--------------++++++++----------++++++++++++------++++++++++++++++++++++++++++++++++++++++++++++-+++++++++++++++-++-----++++++++------" }, { "key": "6", "value": "----------++------------++++++++++++------+++++++++++++------++++++++++++++----+++++++++++++++--+++++++-+-----+++---+++++---------++--++++++++++--------+++++++++++++++----++++++++++++++++---+++++++++++++++++-++++++++--++++++++-+++++++------+++++-+++++++-------++++++++++++-------+++++--+++++-------+++++--++++++-----+++++----+++++++++++++++-----++++++++++++++-----+++++++++++++--------++++++++++----" }, { "key": "7", "value": "--+++++++-----------++++++++++++------++++++++++++++++---+++++++++++++++++---++++++++++++++++----------+++++++++-----------++++++++-----------+++++++-----------++++++++-----------+++++++-----------+++++++------------+++++++-----------+++++++-----------+++++++---++++-----++++++----++++----+++++++----++++---+++++++-----++++---++++++------------+++++++-----------+++++++-----------+++++++------------" }, { "key": "8", "value": "-----++++++++++-------++++++++++++++----++++++++++++++++---+++++++++++++++++-+++++++-----++++++-+++++++----+++++++--++++++-----++++++--+++++++----++++++--+++++++++++++++++--++++++++++++++++--+++++++++++++++++--+++++++++++++++++--+++++++---+++++++--++++++------+++++-+++++++------++++++-++++++-----+++++++-++++++++--++++++++-++++++++++++++++++---++++++++++++++++----+++++++++++++-------++++++++++----" }, { "key": "9", "value": "-----+++++++----------+++++++++++-------+++++++++++++-----+++++++++++++++----++++++-----+++++--++++++------+++++--++++++-------+++++-++++++-------+++++-++++++-------+++++-++++++++----++++++--+++++++++++++++++--++++++++++++++++++---++++++++++++++++------++++++++++++------------++++++-+++--------+++++++--+++++----+++++++--++++++++++++++++---+++++++++++++++------++++++++++++-----------++++++-------------------------++----------------+++---------------+++----------------++--" }, { "key": "+", "value": "+-----------------++----------------++----------------++----------------++----------------++----------------++-------+++------+--------++++-----+-------+++++-----+-------+++++-----+-------++++------+-------++++------+++-----++++------++++++++++++------++++++++++++++++++++++++++++++++++++++++++++++++++++++-------+++++++++++-------+++++-------------++++--------------++++--------------++++--------------++++---------------+++-------" }, { "key": "-", "value": "-------------+++++---------+++++++++---------++++++++++--------++++++++++--------++++++++++--------+++------+-----------------+-----------------+-----------------+----------------++---------------+++++++++--------++++++++++-------+++++++++++-----+++++++++++++----++++++++++++++--+++++++++--------++++++++++-------+++++++++++--------++++++++++--------++++++++++--------++++++++++------------++++++" }, { "key": "*", "value": "----------------+++---------------+++---------------+++++-------------+++++++----+++----++++++++---++++++---++++++--+++++++---++++++++++++++----+++++++++++++-----+-++++++++++------+-+++++++++----------+++++++----------++++++++---------++++++++++-------+++++++++++-----++++++++++++++---+++++++++++++++---++++++++--+++++---+++++++---++++++--+++-++-----+++++---------------++++----" }, { "key": "-", "value": "+-----------------+-----------------+-----------------+--------------------------------+++--------------++++--------------++++--------------+++++-------------+++++-------------+++++++++---------+++++++++++++++---++++-++++++++++---++++-++++++++++--+++++--+++++++++--++--------++++++------------------++++--------------+++++++-----------+++++++-----------+++++++--------------++++" }, { "key": "5", "value": "-++++++-----------++++++++++++++----++++++++++++++----++++++++++++++----+++++--+++++++----++++++------------+++++++-----------+++++++++++-------++++++++++++------+++++++++++++-----+-----++++++++-+++--------++++++-+++---------+++++-+++---------+++++-+++---------+++++-------------+++++----+-------+++++-----+++++++++++++-+++++++++++++++++-++++++++++++++++--+++++++++++++++---++++" }, { "key": "5", "value": "----++++++++++--------+++++++++++++++++++++++++++++++++++++++++++++++++++++-+++++----+++++++--+++++---------+--++++++++++--------++++++++++++------+++++++++++++------+++++++++++++------------++++++-------------++++++-------------+++++-------------+++++-------------+++++-++---------+++++-++++++-----++++++-+++++++++++++++++-+++++++++++++++++---++++++++++++++--------++++++++----" }, { "key": "1", "value": "----++++++++++--------++++++++++--------++++++++++--------++++++++++-------------+++++-----+-------+++++----+++------+++++----++-------+++++----++-------+++++-------------+++++-------------+++++-------------+++++------------++++++------------++++++-----------++++++--------+++-++++++----+---++++++++++----+---++++++++++++++----++++++++++++++-----+++++++++++++--------++++++++++-" }, { "key": "+", "value": "+-------------------------++----------------+++-----++--------++++---+++-------+++++---+++-------++++----++++++----++++----+++++-----++++----+--+++++++++++-------+++++++++++++++++-++++++++++++++++++++++++++++++++++++------+++++++++++-------++++--------------++++--------------++++--------------++++-------+------++++-----+++---------+--++++++------------++++++------------++++++------------++++++--------------++++" }, { "key": "3", "value": "--++++++++---------++++++++++++------+++++++++++++-----++++++++++++++----++----+++++++++-----------+++++++------------++++++--+---------++++++--++++------++++++-+++++++++++++++++-++++++++++++++++---++++++++++++++------++++++++++++---------+++++++++------------+++++++-+++-------+++++++--++++++++++++++++--+++++++++++++++----++++++++++++++----++++++++++++++-----+++++++++++------" }, { "key": "1", "value": "----++++++----------+++++++++++-------+++++++++++-------++++++++++--------+++-++++++------------++++++------+++---++++++------++++--++++++------++++--++++++---+++++++-+++++++--++++--++-++++++---++++-----++++++---++++-----++++++------------++++++------------++++++-----------+++++++---++++----+++++++---+++++++++++++++---++++++++++++++++++++++++++++++++++++----++++++++++++++-----------+++++++----" }, { "key": "3", "value": "----+++++++++----------+++++++++++--------++++++++++++++-----++++++++++++++-------------++++++--------------+++++--------------++++++-------------++++++-------------+++++------+++++++++++++------++++++++++++-------+++++++++++--------++++++++++++------------+++++++--------------+++++--++----------++++++-++++++------++++++-+++++++++++++++++---++++++++++++++++----++++++++++++++-------+++++++++++----" }, { "key": "6", "value": "-----+++++-----------+++++++++--------++++++++++++-----++++++++++++++---+++++++---+++++---+++++---------++--+++++---------+---++++++++++--------++++++++++++------+++++++++++++---++++++++++++++++--++++++----++++++--+++++------+++++---++++-------+++++---+++-------+++++---+++------++++++---++++-----++++++-++++++++++++++++-+++-+++++++++++++-+++-++++++++++++--+++---++++++++-----++" }, { "key": "-", "value": "--------------++++------------++++++-----------+++++++----------++++++++---------+++++++--+++------++++++---+++++++-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---++++-++++++------------+++++-------------+++++-------------+++++-------------++++++-------------+++++++++----------++++++++-----------+++++++-----------+++++++------------++++++" }, { "key": "6", "value": "+++++++-----------++++++++++--------+++++++++++-------+++++++++++-------++----+++++-++-+--+--------++-+++++++++++-------++++++++++++------++++++++++++++----+++++++++++++++----+++++++++++++++---+--------++++++--++++++-----+++++++++++++------++++++++++++-----+++++++++++++-----++++++-++++++++++++++++--------++++++++++--------+++++++++---------+++++++++---------+++++++-----------" }, { "key": "8", "value": "-------++++------------++++++++---------++++++++++++++-----+++++++++++++++---+++++++++++++++++--++++++++-+++++++++-++++++------++++++-++++++------++++++--++++++++--+++++++---+++++++++++++++--+++++++++++++++++--++++++++++++++----++++++++++++++++-+++++++++---+++++++++++++++------+++++++++++++------++++++++++++++-----+++++++++++++++++++++++++-+++++++++++++++++---++++++++++++++++------++++++++++++-----------+++++-+----" }, { "key": "+", "value": "+-----------------++----------------++------+++------+++------++++----++++-----+++++----+++------+++++----+++------++++--------------++++-------++---+-++++-------+++++++++++-------+++++++++++++++++++++++++++++++++++++++++++++++++++++++-----++++++++++++------+++++-------------++++--------------++++--------------++++--------------++++----++--------+++-----++++--------------++++--------------++++---------------+++" }, { "key": "1", "value": "---++++++++---------+++++++++---------++++++++++--------++++++++++----+-------++++++----++------++++++----++------++++++----++------++++++------++++-++++++-------++++-++++++-------++++-++++++-----++++++-++++++----+++-----++++++---++++-----++++++----+++-----++++++------------++++++-------++--++++++--------+++++++++---------++++++++++++++----++++++++++++++-----+++++++++++++-------------+++++----" }, { "key": "4", "value": "-----------+++++-------------+++++++-----------++++++++----------+++++++++---------++++++++++--------+++++++++++------++++++-++++++------++++++--++++-------+++++---+++++++---+++++----+++++++--+++++-----+++++++--++++------+++++++-+++++-----++++++-+-++++++++++++++++-++++++++++++++++++++-----++++++++++++++----------+++++++++----------++++++-++----------+++++---+----------++++++-++-----------++++++++---------------++++--------------+++++--------------+++++------------------+" }, { "key": "*", "value": "-----------------+-----------------++++--------------++++++----+++------++++++---++++++---+++++++-+++++++----+++++++++++++-----++++++++++++-----++++++++++++------+++++++++++-------+++++++++++-------++++++++++---------++++++++++-------+++++++++++-------++++++++++++------++++++++++++----+++++++--++++++--+++++++---++++++--+++-++-----+++++--+++--+-----++++++---+-----------+++----" }, { "key": "1", "value": "---++++++++++--------++++++++++--------++++++++++---------+++++++++-----+------+++++------+------+++++-------------+++++-------------+++++-------------+++++----++-------+++++----++-------+++++----++-------+++++----++-------+++++-----+-------+++++------------++++++----++--++-++++++-----++-++++++++++----+++-+++++++++++++-+++-++++++++++++++--+---++++++++++++-------+-+----++++-----------------+---" }, { "key": "4", "value": "-----------+-----------------++++-+------------++++++++----------+++++++++---------++++++++++--------+++++++++++-------+++++--+++++++----+++++---+++++++---+++++---+++++-++--+++++---+++++--++-+++++----+++++---++++++-----++++++--+++++------+++++----+++++++++++++++----+++++++++++++++++++--+++++++++++++++++--------+++++++++++---------++++++++++---------+++++--+++---------+++++-++++----------+++++++++-----------++++++++-----------------++" }, { "key": "*", "value": "++----------------+++++-------------++++++---++++++++-+++++++-+++++++++--++++++++++++++----+++++++++++++------+++++++++++-------++++++++++------+++++++++++-------++++++++++--------+++++++++++-------+++++++++++-------+++++++++++-------++++++++++++------+++++--+++++----++++++---++++++---+++++----++++++---++--------+++++---++" }, { "key": "2", "value": "----++++++++++--------++++++++++++------+++++++++++++-+++-+++++++++++++++++--++-----+++++++------------+++++-------------+++++-------------+++++-------------+++++------------++++++-----------+++++++---------+++++++++--------+++++++++-------++++++++++------+++++++++++-----+++++++++++-------+++++++++++-------++++++++++++------+++++++++++++++-----+++++++++++++---------+++++++++---------------+++-" }, { "key": "9", "value": "-------++++-------------++++++++--------+++++++++++++-----+++++++++++++++----++++++++++++++++--++++++++-++++++++--++++++-----++++++--++++++------+++++++++++++------++++++++++++++-----+++++++++++++++---+++++++++++++++++++++++++++-++++++++++++++++++-++++++++++++++++++-++--++++++++++++++-+-----+++++++++++++++++----++++++++++++++++---+++++++++++++++++++++++++++--+++++++++++++++-----+++++++++++++-------+--++++++--------------+++++--------" }, { "key": "-", "value": "++----------------++----------------++----------++++++++---------++++++++++--------+++++++++++++-----+++++++++++++++++-------++++++++++++-------+++++++++++-------++++++++++--------++++++++++-----------++++++--------------------------+-----------------+----------------++----------------++---------------+++--------------++++-------------+++++-------------+++++------------++++++-----------+++++++-----------+++++++--------------+---" }, { "key": "7", "value": "++++++-----+------+++++++++++++-----++++++++++++++----++++++++++++++-------+++++++++++-----------+++++++-----------++++++-----------+++++++----------+++++++-----------++++++----+++---+++++++-----+++---+++++++-----+++--+++++++------+++--++++++-----------+++++++----------+++++++-----------++++++--------++++++++++--------++++++++++--------+++++++++---------++++++++--------------+-----------------" }, { "key": "5", "value": "----++++++++----------++++++++++----------++++++++++++++----+++++++++++++++----+++++++++++++++----++++++--++++++-----++++++++-----------+++++++++++-------+++++++++++++------++++++++++++++------------++++++++-------------++++++--------------++++++-------------++++++-------------+++++++-----------+++++++++++++-----+++++++++++++++++++++++++++++++++++++++++++++---++++++++++++++-------+++++++++++-----" }, { "key": "+", "value": "+-----------------+-----------------+----------------------------------+-----------------+-----------------+---------++++----+---------++++----+---------++++--------------++++-----+-------+++++-----+-------+++++-----+++++++++++++-----++++++++++++++++--++++++++++++++++++++++++++++++++++++--------++++++++++-------++++++--+++-------+++++-----+-------+++++---+++-------++++----+++-------++++----+++-------++++----+++-------++++------+" }, { "key": "2", "value": "---+++++++++---------++++++++++++------+++++++++++++-----++++++++++++++----+++-----++++++-------------+++++-------------+++++-------------+++++-------------+++++------------++++++-++--------+++++++-+++++---+++++++++++++++--+++++++++-++++++++++++++++--+-+++++++++++++-------++++++++--------++++++++----------++++++++++++----+-+++++++++++++++-+-+++++++++++++++-+---+++++++++++++-+------------++++--" }, { "key": "2", "value": "---+++++++++---------++++++++++---------+++++++++++++------++++++++++++++-----+++++++++++++++-----++------+++++++-------------++++++--------------++++++------------+++++++-----------++++++++----------+++++++++---------++++++++++--------++++++++--+------+++++++++--------++++++++++--------++++++++++------+++++++++++--------+++++++++++-------++++++++++++++++--++++++++++++++++++-++--+++++++++++++++++----------+++++++++--------------+++++--------------+++++" }, { "key": "*", "value": "+----------------++----------------++++--------------++++++----+++++---++++++---+++++++---++++++-+++++++++--++++++++++++++-----++++++++++++-------++++++++++--------++++++++++---------++++++++---------++++++++---------++++++++++-------+++++++++++-------++++++++++++------+++++-++++++------+++++--+++++---+++++++---++++++--+++++++---++++++--+++--------++++++---+-------------+----" }, { "key": "1", "value": "---+++++++++---------++++++++++--------++++++++++--------++++++++++-----+-----++++++------++----+++++--------------+++++-----+------++++++----++-------++++-----++-------++++-----++-------+++++-----+-------+++++------------+++++------+------+++++-----++------+++++-----++-----+++++-----+++-+++-+++++------++-+++++++++++++-----+++++++++++++++-----++++++++++++-------+++++++++++---" }, { "key": "9", "value": "-------++++------------++++++++++--------++++++++++++------++++++++++++++----++++++++++++++++---++++++++--+++++++--++++++------+++++--++++++-------++++--++++++-------++++--+++++++-----+++++--+++++++++-+++++++---+++++++++++++++++----+++++++++++++++-----++++++++++++++------+++++++++++++-----------+++++++-++++------+++++++--+++++++++++++++++--++++++++++++++++---++++++++++++++---------++++++++-------" }, { "key": "+", "value": "+--------+++------+--------++++-----+-------+++++-----+-------+++++-----+-------++++------+-------++++------+++-+--+++++------+++++++++++++-----+++++++++++++++++++++++++++++++++++++-++++++++++++++++-------+++++++++++-------+++++-------------++++--------------++++--------------++++--------------++++-----------------------++----------------++----------------++-----------------+" }, { "key": "2", "value": "----++++++++++--------++++++++++++------+++++++++++++-----++++++++++++++----+++-----++++++-------------+++++-------------++++++++++--------++++++++++--------++++++++++-------+++++++++++------+++++++---------+++++++++--------+++++++++-------++++++++++-------++++++++++-------+++++++++-------++++++++----------++++++++++++------+++++++++++++++----++++++++++++++------++++++++++++---------------+++-" }, { "key": "9", "value": "-----+++++++-----------++++++++++--------++++++++++++------++++++++++++++----++++++----++++++---+++++-------++++--+++++--------+++++-+++++--------+++++--+++++-------+++++--++++++-----++++++--+++++++++++++++++---++++++++++++++++-----++++++++++++++------+++++++++++++------------+++++--+++---------++++++-+++++-----+++++++---+++++++++++++++-----++++++++++++++------+++++++++++----------+++++++--------" }, { "key": "+", "value": "+---------+-------+--------++++-----+--------++++-----+--------++++-----+-------++++------+-------++++------+-------++++-----++-+++++++++++----+-+++++++++++++++++-+++++++++++++++++-------+++++++++++--------++++++++++-------+++++-+++++-------++++--+++++-------++++---++++-------++++-----++-------++++-------" }, { "key": "4", "value": "--------+++++------------+++++++++--------++++++++++--------++++++++++-------+++++++++++------++++++++++++-----++++++-++++++-----+++++--+++++---+++++++---+++++---++++++----+++++---+++++-----+++++---+++++-----+++++---+++++++++++++++---++++++++++++++++++++++++++++++++++++--++++++++++++++++--------+++++++++---------++++++------------++++++------------++++++-------------+++++---------------+++----" }, { "key": "5", "value": "----+++++++++----------++++++++++++++-----++++++++++++++-----++++++++++++++-----++++++++++++++-----+++++----++++-----+++++++++----------++++++++++++-------+++++++++++++------++++++++++++++------------+++++++--------------++++++--------------++++++-------------++++++-------------++++++++----------+++++++++++++----++++++++++++++++++++++++++--+++++++++++++++++---+++++++++++++++--------+++++++++-----" }, { "key": "-", "value": "+-----------------+-----------------+-----------------+------------------------------+++++-------------+++++-------------++++++------------+++++++++++-------+++++++++++++++---+++++++++++++++--++++++++++++++++--++++++++++++++++--++++++-----++++---++++++----------+++---------------+++++-------------++++++++----------++++++++-----------+++++++---------------+++" }, { "key": "5", "value": "++++++++++--------++++++++++++++----++++++++++++++----++++++++++++++----+++++---++++++----+++++----------++-+++++++++------+++++++++++++-----++++++++++++++-----++++++++++++++-----+------+++++++------------+++++++-++---------++++++-+++--------++++++-+++--------++++++++++-------++++++---+++-----+++++++----++++++++++++++-----++++++++++++------+++++++++++--------++++++++---------" }, { "key": "4", "value": "---------++++++++---------+++++++++--------+++++++++--------++++++++++-------+++++++++++------++++++++++++--+--+++++++-+++++--+++++++++--+++++--++++++++--++++++--+++++++---++++++--+++++-----+++++---+++++++++-+++++---++++++++++++++++--++++++++++++++++--++++++++++++++++++--------++++++++++---------+++++++++---------+++++--+----------+++++-------------+++++-------------+++++----" }]
                localStorage.setItem('dict', JSON.stringify(dict));
            }
        }

        toHex(oringinImageData, newImageData) {
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

        hex2Xy(imageData, width, height) {
            let xyArray = new Array(height);
            for (let y = 0; y < height; y++) {
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

        splitY(xyArray) {
            let sumY = 0,
                spliceIndex = [],
                spliceCount = 0;
            for (let y = 0, height = xyArray.length; y < height; y++) {
                let sumY = 0;
                for (let x = 0, width = xyArray[0].length; x < width; x++) {
                    sumY += xyArray[y][x];
                }
                if (sumY == 0) spliceIndex.push(y);
            }
            for (let index = 0; index < spliceIndex.length; index++) {
                xyArray.splice(spliceIndex[index] - spliceCount, 1);
                spliceCount++;
            }
            return xyArray;
        }

        Xy2Yx(xyArray) {
            let height = xyArray.length,
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

        reComputImageSize(xyArray, canvasContext) {
            let height = xyArray.length,
                width = xyArray[0].length;
            hexData = this.xy2Hex(xyArray, canvasContext);
            newImageData = canvasContext.createImageData(width, height);
            for (let index = 0; index < newImageData.data.length; index++) {
                newImageData.data[index] = hexData.data[index];
            }
            return newImageData;
        }

        spliceChar(xyArray) {
            xyArray = this.Xy2Yx(xyArray);
            let chars = [],
                char = [];
            for (let i = 0; i <= 18; i++) {
                char.push(xyArray[i]);
            };
            chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
            char = [];
            for (let i = 17; i <= 34; i++) {
                char.push(xyArray[i]);
            };
            chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
            char = [];
            for (let i = 31; i <= 48; i++) {
                char.push(xyArray[i]);
            };
            chars.push(this.splitY(this.Xy2Yx(this.splitY(char))));
            return chars;
        }

        computePointsInRow(xyArray) {
            let point = 0,
                points = [];
            for (let y = 0, height = xyArray.length; y < height; y++) {
                point = 0;
                for (let x = 0, width = xyArray[0].length; x < width; x++) {
                    point += xyArray[y][x];
                }
                points.push(point);
            }
            return points;
        }

        compareSimlerByStr(charStr, dictStr) {
            let length = charStr.length > dictStr.length ? dictStr.length : charStr.length,
                simler = 0;
            for (let i = 0; i < length; i++) {
                if (charStr[i] == dictStr[i]) simler++;
            }
            return simler / length;
        }

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
            for (const key in dict) {
                similer.push(this.compareSimlerByStr(str, dict[key]['value']));
            }
            for (let i = 0; i < similer.length; i++) {
                if (similer[i] > maxSimiler) {
                    maxSimiler = similer[i];
                    charIndex = i;
                }
            }
            return dict[charIndex]['key'];
        }

        print2log(xyArray) {
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
        }

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

        clearStrStorage() {
            localStorage.removeItem('dict');
        }

        addStr() {
            let verifyCodeImage = this.imgTab;
            let charIndex = window.prompt('第几个字符？', 1);
            if (charIndex > 0) {
                let char = window.prompt('字符值？', 0);
                if (char) {
                    let canvas = document.createElement('CANVAS');
                    canvas.setAttribute('width', '150');
                    canvas.setAttribute('height', '100');
                    let canvasContext = canvas.getContext("2d");
                    canvas.style.backgroundColor = "red";
                    let width = verifyCodeImage.width,
                        height = verifyCodeImage.height;
                    canvasContext.drawImage(verifyCodeImage, 0, 0, width, height)
                    let imageData = canvasContext.getImageData(0, 0, width, height),
                        newImageData = canvasContext.createImageData(width, height);
                    imageData = this.toHex(imageData.data, newImageData.data);
                    imageData = this.hex2Xy(imageData, width, height);
                    imageData = this.corrode(imageData);
                    imageData = this.expand(imageData);
                    imageData = this.splitY(imageData);
                    imageData = this.Xy2Yx(imageData);
                    imageData = this.splitY(imageData);
                    imageData = this.Xy2Yx(imageData);
                    let chars = this.spliceChar(imageData);
                    this.addStr2Storage(char, this.xyArray2Str(chars[charIndex - 1]));
                }
            }
        }

        autoDaMa() {
            const Image = this.imgTab,
                Canvas = document.createElement('CANVAS');

            let ImageWidth = Image.width,
                ImageHeight = Image.height,
                canvasContext = Canvas.getContext("2d");
            canvasContext.drawImage(Image, 0, 0, ImageWidth, ImageHeight);
            let ImageData = canvasContext.getImageData(0, 0, ImageWidth, ImageHeight),
                newImageData = canvasContext.createImageData(ImageWidth, ImageHeight);
            let hexData = this.toHex(ImageData.data, newImageData.data);
            let xyArray = this.hex2Xy(hexData, ImageWidth, ImageHeight);
            xyArray = this.corrode(xyArray);
            xyArray = this.expand(xyArray);
            xyArray = this.splitY(xyArray);
            xyArray = this.Xy2Yx(xyArray);
            xyArray = this.splitY(xyArray);
            xyArray = this.Xy2Yx(xyArray);
            let chars = this.spliceChar(xyArray);
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

    window.inputValue = function(dom, st) {
        var evt = new InputEvent('input', {
            inputType: 'insertText',
            data: st,
            dataTransfer: null,
            isComposing: false
        });
        dom.value = st;
        dom.dispatchEvent(evt);
    }

    const myself = arguments.callee;
    var imgtab = document.querySelector('.codeImg').children[0].children[0].children[0],
        verifyCodeInput = document.querySelector('.el-input').children[0];
    var atdm = new AutoDaMa(imgtab);
    console.info('第' + localStorage.getItem('index') + "刷ing\n");
    let examItems = document.querySelectorAll('.examItem');
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

    let index = parseInt(localStorage.getItem('index')) + 1;
    localStorage.setItem('index', index);
    console.info("3秒后提交\n");
    setTimeout(function() {
        const submitFunction = arguments.callee;
        verifyCodeInput.focus();
        let verifyCode = atdm.autoDaMa();
        if (verifyCode > 81 || verifyCode < 0 || verifyCode == 'NaN') {
            console.error('本地发现验证码错误，正在刷新验证码！');
            imgtab.click();
            setTimeout(function() {
                submitFunction();
            }, 500);
        } else {
            window.inputValue(verifyCodeInput, verifyCode);
            document.querySelector('.tijiao').firstElementChild.focus();
            setTimeout(function() {
                document.querySelector('.tijiao').firstElementChild.click();
                setTimeout(function() {
                    if (window.location.href.indexOf('score') > 0) {
                        console.info("本次答题完成\n");
                        console.info("3秒后返回答题页面\n\n");
                        document.querySelectorAll('BUTTON')[0].firstElementChild.click();

                        let flag = 1,
                            height = document.body.scrollHeight,
                            stepLngth = 100,
                            steps = 0,
                            allSteps = Math.round(height / stepLngth) / 2;
                        let timer = setInterval(() => {
                            window.scrollBy(0, flag * stepLngth);
                            // flag++;
                            steps++;
                            if (steps >= allSteps) {
                                steps = 0;
                                flag = -1 * flag;
                            };
                        }, 50);

                        setTimeout(function() {
                            window.clearInterval(timer);
                            myself();
                        }, 10000);
                    } else {
                        console.error('云端检查发现验证码错误，正在刷新验证码！');
                        imgtab.click();
                        setTimeout(function() {
                            submitFunction();
                        }, 500);
                    }
                }, 3000);
            }, 500);
        }
    }, 500);
})();