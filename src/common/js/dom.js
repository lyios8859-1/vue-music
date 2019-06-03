// export function addClass(el, className) {
//   if (hasClass(el, className)) {
//     return;
//   }
//   let newClass = el.className.split(" ");
//   newClass.push(className);
//   el.className = newClass.join(" ");
// }

// export function hasClass(el, className) {
//   let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
//   return reg.test(el.className);
// }
export function hasClass(ele, cls) {
  cls = cls || "";
  if (cls.replace(/\s/g, "").length == 0) return false;
  return new RegExp(" " + cls + " ").test(" " + ele.className + " ");
}

export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className == "" ? cls : ele.className + " " + cls;
  }
}

export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    let newClass = " " + ele.className.replace(/[\t\r\n]/g, "") + " ";
    while (newClass.indexOf(" " + cls + " ") >= 0) {
      newClass = newClass.replace(" " + cls + " ", " ");
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}
