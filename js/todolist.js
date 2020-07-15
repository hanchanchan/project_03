$(function () {
    //读取本地存储的数据
    function getData() {
        let data = localStorage.getItem('number');
        if (data == null) {
            return [];
        } else {
            return JSON.parse(data);
        }
    }
    function getData() {
        let data = localStorage.getItem('number');
        if (data == null) {
            return [];
        } else {
            return JSON.parse(data)
        }
    }

    //保存本地存储的数据
    function saveData(data) {
        localStorage.setItem('number', JSON.stringify(data));
    }

    function saveData() {
        localStorage.setItem('number', JSON.stringify(data));
    }
    //注册事件
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() == '') {
                alert('请输入内容...')
            } else {
                let local = getData();
                local.push({
                    title: $(this).val(),
                    done: false
                })
                saveData(local);
                look();
            }
        }
    })
    $('#title').on('click', function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() == '') {
                alert('请输入内容...')
            } else {
                let local = getData();
                local.push({
                    title: $(this).val(),
                    done: false
                })
                saveData(local);
                look();
            }
        }
    })
    look();
    function look() {
        $('ol,ul').empty();
        let data = getData();
        for (let i = 0; i < data.length; i++) {
            if (data[i].done == true) {
                $('ul').prepend(`
                <li>
                    <input type="checkbox" checked>
                    <p>${data[i].title}</p>
                    <a href="javascript:;" id="${i}"></a>
                </li>
                `)
            } else {
                $('ol').prepend(`
                <li>
                    <input type="checkbox" checked>
                    <p>${data[i].title}</p>
                    <a href="javascript:;" id="${i}"></a>
                </li>
                `)
            }
            //未完成
            $('#todocount').text($('ol,li').length);
            //已完成
            $('#donecount').text($('ul,li').length);
        }
    }

    look();
    function look() {
        $('ol,ul').empty();
        let data = getData();
        for (let i = 0; i < data.length; i++) {
            if (data[i].done == true) {
                $('ul').prepend(`
                <li>
                    <input type="checkbox" checked>
                    <p>${data[i].title}</p>
                    <a href="javascript:;" id="${i}"></a>
                </li>
                `)
            } else {
                $('ol').prepend(`
                <li>
                    <input type="checkbox" >
                    <p>${data[i].title}</p>
                    <a href="javascript:;" id="${i}"></a>
                </li>
                `)
            }
            //未完成
            $('#todocount').text($('ol li').length);
            //已完成
            $('#donecount').text($('ul li').length);
        }
    }



    $('ol,ul').on('click', 'a', function () {
        //获取本地存储
        let data = getData();
        //修改数据
        let index = $(this).prop('id');
        data.splice(index, 1);
        saveData(data);
        look();
    })

    $('ol,ul').on('click', function () {
        //获取本地存储
        let data = getData();
        //修改数据
        let index = $(this).prop('id');
        data.splice(index, 1);
        saveData(data);
        look();
    })
    $('ol,ul').on('click', 'input', function () {
        //获取本地存储
        let data = getData();
        //修改数据
        let index = $(this).siblings('a').attr('id');
        //把done属性修改成当前input框的checked
        data[index].done = $(this).prop('checked');
        //防止插队
        let el = data[index];
        //删除数据
        data.splice(index, 1)
        //添加
        data.push(el);
        saveData(data);
        look();
    })



    $('ol,ul').on('click', 'input', function () {
        //获取本地存储
        let data = getData();
        //修改数据
        let index = $(this).siblings('a').attr('id');
        //把done属性修改成当前input框的checked值
        data[index].done = $(this).prop('checked');
        //防止插队
        let el = data[index];
        //删除数据
        data.splice(index, 1);
        //添加
        data.push(el);
        saveData(data);
        look();
    })
})