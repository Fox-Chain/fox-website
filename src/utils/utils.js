// 验证字符串是否是json
export function checkStringIsJson(str) {
    try {
      if (typeof JSON.parse(str) == "object") {
        return true;
      }
    } catch (e) {
    }
    return false;
  }
  // 数组转换为kv
export function ArrToKv(arr, key, value) {
  let obj = {};
  arr && arr.map(item => {
    obj[item[key]] = item[value]
  });
  return obj;
}