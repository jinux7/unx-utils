/**
 * @desc ajax请求的工具函数
 * @param  { Object } opt 参数的配置json对象
 * @param { String } opt.url ajax请求的地址
 * @param { String } opt.type ajax请求类型
 * @param { Object } opt.data ajax请求的数据，json格式
 * @param { String } opt.contentType request.hrader设置 如：'application/x-www-form-urlencoded','text/plain;charset=UTF-8','application/json','multipart/form-data'
 * @param { Number } opt.timeOut 超时ajax abort的时间设置
 * @param { Array } opt.files 当opt.contentType设置为multipart/form-data时，存储的是上传的文件数组
 * @param { Object } opt.progress 是一个json对象，opt.progress.enable=true时，开始上传进度功能，opt.progress.receiveHandle实时进度回调函数，opt.progress.successHandle上传进度完成的回调
 * @param { Function } opt.before ajax请求之前的回调函数
 * @param { Function } opt.success ajax请求成功的回调函数
 * @param { Function } opt.error ajax请求失败的回调函数
 * @param { Function } opt.complete ajax请求完成之后的回调函数
 */

const ajax = function(opt){
		ieAjaxInit();
		//默认参数配置
		var defaultOpt = {
			url:'',
			type: 'GET',
			data: null,
			contentType: 'application/x-www-form-urlencoded',//'text/plain;charset=UTF-8','application/json','multipart/form-data'
			timeOut: 5000,
			files:[],
			progress: null,
			before: fn,
			success: fn,
			error: fn,
			complete: fn
		};

		//参数对象继承获取新参数对象
		if(Object.assign){
			var opt = Object.assign({}, defaultOpt, opt);
		}else {
			for(var name in defaultOpt){
				defaultOpt[name] = opt[name] || defaultOpt[name];
			}
			var opt = defaultOpt;
		}

		requestData(opt);

	}

	//将json格式数据转成application/x-www-form-urlencoded格式数据
	function encodeFormData(data){
		if(!data) return '';
		var pairs = [];
		for(var name in data){
			if(!data.hasOwnProperty(name)) continue;
			if(typeof data[name] === 'function') continue;
			var value = data[name].toString();
			name = encodeURIComponent(name.replace('%20','+'));
			value = encodeURIComponent(value.replace('%20','+'));
			pairs.push(name + '=' + value);
		}
		return pairs.join('&');
	}

	//ajax的get请求函数
	function getData(opt){
		var request = new window.XMLHttpRequest();
		var timeoutFlag = false; //是否超时
		//启动计时器，做超时处理
		var timer = setTimeout(function(){
			timeoutFlag = true;
			request.abort();
		},opt.timeOut);

		request.open('GET',opt.url +'?'+ encodeFormData(opt.data));
		opt.before(); //请求之前执行before函数
		request.onreadystatechange = function(){
			if(request.readyState === 4){
				if(timeoutFlag) return;
				clearTimeout(timer);
				if(request.status === 200){
					var type = request.getResponseHeader('Content-Type');
					//检查type类型做相应的解析处理
					if(type.indexOf('xml') !== -1 && request.responseXML){ //xml相应
						opt.success(request.responseXML);
					}else if(type.indexOf('application/json') !== -1) { //json相应
						opt.success(JSON.parse(request.responseText));
					}else {
						opt.success(request.responseText);
					}
				}else {
					opt.error(request);
				}
				opt.complete();
			}
		}
		request.send(null);
	}

	//ajax的post请求函数
	function postData(opt){
		var request = new XMLHttpRequest(), sendData=null;
		var timeoutFlag = false; //是否超时
		//启动计时器，做超时处理
		var timer = setTimeout(function(){
			timeoutFlag = true;
			request.abort();
		},opt.timeOut);

		request.open('POST',opt.url);
		request.onreadystatechange = function(){
			if(request.readyState === 4){
				if(timeoutFlag) return;
				clearTimeout(timer);
				if(request.status === 200){
					var type = request.getResponseHeader('Content-Type');
					//检查type类型做相应的解析处理
					if(type.indexOf('xml') !== -1 && request.responseXML){ //xml相应
						opt.success(request.responseXML);
					}else if(type.indexOf('application/json') !== -1) { //json相应
						opt.success(JSON.parse(request.responseText));
					}else {
						opt.success(request.responseText);
					}
				}else {
					opt.error(request);
				}
				opt.complete();
			}
		}
		//处理接收进度事件
		if(opt.progress.enable && request.upload){
			request.upload.onprogress = function(ev){
				if(ev.lengthComputable){
					opt.progress.receiveHandle(ev);
				}
			}
			request.upload.onload = function(ev){
				opt.progress.successHandle(ev);
			}
		}
		
		if(opt.contentType === 'application/x-www-form-urlencoded'){
			request.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
			sendData = encodeFormData(opt.data);
		}else if(opt.contentType === 'application/json') {
			request.setRequestHeader('Content-Type','application/json; charset=utf-8');
			sendData = JSON.stringify(opt.data);
		}else if(opt.contentType === 'multipart/form-data') {
			var fd = new FormData();
			for(var name in opt.data){
				if( !opt.data.hasOwnProperty(name) ) continue;
				if( typeof opt.data[name] === 'function' ) continue; 
				fd.append(name,opt.data[name]);
			}
			for(var i=0; i<opt.files.length; i++){
				fd.append('file'+i,opt.files[i]);
			}
			sendData = fd;
		}

		request.send(sendData);

	}

	//ajax请求函数，在函数内再调用get或者post
	function requestData(opt){
		if(opt.type === 'GET'){
			getData(opt);
		} else {
			postData(opt);
		}
	}

	// 定义一个空函数
	function fn(){}

	// 如果是ie6，创建XMLHttpRequest对象
	function ieAjaxInit(){
		if(window.XMLHttpRequest === undefined){
			window.XMLHttpRequest = function(){
				try {
					return new ActiveXObject('Msxml2.XMLHTTP.6.0');
				}
				catch (e1) {
					try {
						return new ActiveXObject('Msxml2.XMLHTTP.3.0');
					}
					catch (e2) {
						throw new Error('不支持XMLHttpRequest');
					}
				}
			}
		}
	}

module.exports = ajax;