import axios from "axios";
import Qs from "qs";

// 服务地址
// axios.defaults.baseURL = "http://192.168.1.135:9527/public";
axios.defaults.baseURL = '/api'    // ngx代理 

export function fn1() {
  return "1";
}

export function fn2() {
  return "2";
}

/**
 * 封装axios 请求
 * 1、安装：
 * npm install axios --save
 * npm install qs --save
 * 2、参数
 * @param url     请求的地址  类型：字符串   (必填，请求路径)
 * @param data    请求参数  类型：objct （非必填,通过Qs转成字符串传递）
 * @param type    类型：String  (非必填)  默认：post  区分大小写，要求小写。  post/get
 * 使用方法
 * 二次封装如：  (亲测，可以用)
 */

export function ajax(params) {
  // 开始加载
  console.log("开始加载~~~");

  // 各种判断
  if (params.url === undefined || params.url === null || params.url === "") {
    console.error("URl，不能为空！");
  }
  if (params.data === undefined || params.data === null || params.data === "") {
    params.data = {};
  }
  if (params.type === undefined || params.type === null || params.type === "") {
    params.type = "get";
  }

  // 先导入vuex,因为我们要使用到里面的状态对象
  // vuex的路径根据自己的路径去写
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 也可以本地缓存token，然后 取toekn 每次请求带上token s进行判断
  // params.data.dealerTokenStr = localStorage.getItem('dealerTokenStr')

  // 各种处理数据
  for (const item in params.data) {
    //  如果传过来没有值，默认为空
    if (
      params.data[item] === undefined ||
      params.data[item] === null ||
      params.data[item] === ""
    ) {
      params.data[item] = "";
    }
    // headers 头部信息如果是JSON  不做处理
    // if(params.headers !== 'application/json'){
    //     //如果传过来的值为数组或者对象格式，没有转成字符串，默认转成字符串
    //     if(Array.isArray(params.data[item]) || params.data[item] instanceof Object){
    //       params.data[item] = JSON.stringify(params.data[item]);
    //     }
    // }
  }

  // 传给后台的参数
  let data;
  if (params.type === "post") {
    // 对象形式,转化成字符串形式,由于IE浏览器不识别URLSearchParams 所以采用Qs
    data = Qs.stringify(params.data);
  } else {
    data = params.data;
  }

  // 传给后台的格式
  // 1. application/x-www-form-urlencoded 最常见的POST提交格式，使用这个编码格式post的数据会以键值对的方式提交
  // 2. multipart/form-data 通常上传图片等文件会使用这种编码格式提交。
  // 3. application/json 提交JSON格式的数据
  if (
    params.headers === undefined ||
    params.headers === null ||
    params.headers === ""
  ) {
    axios.defaults.headers[params.type]["Content-Type"] =
      "application/x-www-form-urlencoded";
  } else {
    axios.defaults.headers[params.type]["Content-Type"] = params.headers;
  }

  // 请求超时时间
  axios.defaults.timeout = 5000;

  return new Promise((resolve, reject) => {
    // 开始请求
    axios[params.type](params.url, data)
      .then((res) => {
        // 停止加载
        console.log("停止加载~~~");
        // console.log(res);
        const data = res.data;
        // 成功回调
        if (data.code === 1) {
          resolve(data.data);
          // resData.value = data.data
        }
        // 这里可以添加，各种返回状态处理
        else {
          console.log(data.message);
        }
        // 如果不想2次分装这里处理各种返回状态码
      })
      .catch((err) => {
        console.log("错误，停止加载~~~");
        reject(err);
      });
  });
}
