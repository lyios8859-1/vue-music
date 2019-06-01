import originJsonp from "jsonp";

export default function jsonp(url, data, options = { param: "jsonpCallback" }) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + formatParams(data);
  return new Promise((resolve, reject) => {
    originJsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

function formatParams(data) {
  let url = "";
  for (const key in data) {
    if (Object.hasOwnProperty(key)) {
      let value = data[key] !== undefined ? data[k] : "";
      url += `&${key}=${encodeURIComponent(value)}`;
    }
  }
  return url ? url.substring(1) : "";
}
