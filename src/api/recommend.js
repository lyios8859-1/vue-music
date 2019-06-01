import originJsonp from "jsonp";

export function getRecommend() {
  let url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?
      _=1559351606128&g_tk=929513394&uin=194962218&format=json&inCharset=utf-8
        &outCharset=utf-8&notice=0&platform=h5&needNewCode=1`;
  return new Promise((resolve, reject) => {
    originJsonp(url, { param: "jsonpCallback" }, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
