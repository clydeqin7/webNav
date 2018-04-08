    // 1.初始化
    var hashA = init()
    var keyboards = hashA['key']
    var hash = hashA['hash']
    
    // 2.生成键盘
    generateKayboard(keyboards, hash)

    // 3.监听用户点击事件
    listenToUser(hash)


    /* 以下是功能函数 */
    // 根据元素名生成标签
    function tag(eLementName) {
        return document.createElement(eLementName)
    }

    function getFromLocalStorage(name) {
        return JSON.parse(localStorage.getItem(name) || 'null')
    }

    function createSpan(textContent) {
        var span = tag('span')
        span.textContent = textContent
        return span
    }

    function createButton(id) {
        var buttonX = tag('button')
        buttonX.id = id
        buttonX.textContent = "编辑"

        buttonX.onclick = function (xdfsf) {
            var button2 = xdfsf['target']
            var img2 = button2.previousSibling
            var key = xdfsf['target']['id'] //得到哪个键点击了编辑
            var x = prompt('请输入一个网址') //获取用户输入的内容  
            if (x) {
                hash[key] = x
                img2.src = 'http://' + x + '/favicon.ico'
            }

            img2.onerror = function () {
                img2.src = './src/img/point.png'
            }

            //将修改后的hash存到localStorage
            localStorage.setItem('cHash', JSON.stringify(hash))
        }

        return buttonX
    }

    function createImg(domain) {
        var imgX = tag("img")
        if (domain) {
            imgX.src = 'http://' + domain + '/favicon.ico'
        } else {
            imgX.src = './src/img/point.png'
        }

        imgX.onerror = function (xxx) {
            xxx.target.src = './src/img/point.png'
        }

        return imgX
    }

    function generateKayboard(keyboards, hash){
        for(var index = 0;index < keyboards.length;index = index + 1){
            var div1 = tag('div')
            mainxx.appendChild(div1)

            for(var kbdIndex = 0;
            kbdIndex < keyboards[index].length; // 遍历keyboards中的数组
            kbdIndex = kbdIndex + 1){
                var currentLocal = keyboards[index][kbdIndex]
                var ckbd = tag('kbd')

                var spanX = createSpan(currentLocal)
                var imgX = createImg(hash[currentLocal])
                var buttonX = createButton(currentLocal)

                ckbd.appendChild(spanX)
                ckbd.appendChild(imgX)
                ckbd.appendChild(buttonX)

                div1.appendChild(ckbd)
            }
        }
    }

    function listenToUser(hash){
        var ele = document.getElementById("searchInput");
        //正则表达式 还需改进
        var regular = /[a-z]/;
        document.onkeypress = function (xsjkdjfa){ 
            if(document.activeElement === ele){
                return;
            }else{
                //TODO key没有定义需要考虑
                var key = xsjkdjfa['key']
                if(!regular.test(key)){
                    return;
                }else{
                    var website = 'https://' + hash[key]
                    //location.href = website //当前页面跳转
                    window.open(website, '_blank')
                }
            }               
        }           
    }

    function init(){
        var keyboards = {
            0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
            'length': 3
        }

        var hash = {
            'q': 'qq.com',
            'w': 'weibo.com',
            'e': 'ebay.com',
            'r': 'reddit.com',
            't': 'taobao.com',
            'y': 'youtube.com',
            'u': 'udacity.com',
            'i': 'iqiyi.com',
            'o': 'opera.com',
            'p': '',
            'a': 'acfun.cn',
            's': 'stackoverflow.com',
            'd': 'douyu.com',
            'f': '',
            'g': 'github.com',
            'h': 'hackerearth.com',
            'j': 'javascript.ruanyifeng.com',
            'k': '36kr.com',
            'l': 'lintcode.com',
            'z': 'zhihu.com',
            'x': 'xiedaimala.com',
            'c': 'Codecademy.com',
            'v': 'v2ex.com',
            'b': 'bilibili.com',
            'n': 'nowcoder.com',
            'm': 'meituan.com'
        }


        // 取出loaclStorage的hash
        var hashInLocalStorage = getFromLocalStorage('cHash')
        if (hashInLocalStorage) {
            hash = hashInLocalStorage
        }

        return {'key':keyboards, 'hash':hash}
    }
            