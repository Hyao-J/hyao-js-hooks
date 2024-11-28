/**
 * 获取本地缓存
 * get localStorage
 */
function GetLocalStorage(name) {
  /**
   * 根据名称获取缓存值 默认为空
   * Get the cache value by name, the default is empty
   */
  let [storageString = ""] = [localStorage.getItem(name)];
  /**
   * 如果未设置该缓存或没有值，直接返回空串
   * If the cache is not set or there is no value, an empty string is returned directly
   */
  if (storageString == null || storageString.length <= 0) return "";
  try {
    /**
     * 把缓存字符串转为对象、获取当前时间
     * Convert the cache string to an object and get the current time
     */
    let [storageObj, nowTime] = [JSON.parse(storageString), new Date().getTime()];
    /**
     * 如果缓存对象不存在或为空，或者对象设置了时间值并且时间值小于当前时间(即已过期)，此时清除缓存
     * If the cached object does not exist or is empty,
     * or if the object has a time value set and the time value is less than the current time (i.e. expired),
     * clear the cache
     */
    if (!storageObj || (storageObj.expires != undefined && storageObj.expires < nowTime)) {
      DelLocalStorage(name);
      return null;
    } else {
      /**
       * 如果有值且时间未过期，则返回值，如果没有value则没有设置过期时间，此时不是对象，直接返回缓存字符串
       * If there is a value and the time has not expired, the value is returned.
       * If there is no value, the expiration time is not set.
       * At this time, it is not an object, and the cache string is directly returned.
       */
      return storageObj.value || storageString;
    }
  } catch (e) {
    return storageString;
  }
}

/**
 * 设置本地缓存
 * set localStorage
 */
function SetLocalStorage(name, value, time = 0) {
  /**
   * 获取过期时间的时间戳值和当前的时间戳
   * Get the timestamp value of the expired time and the current timestamp
   */
  let [days, nowTime] = [parseFloat(time) * 84000000, new Date().getTime()];
  /**
   * expires是过期时间
   * Expires is the expiration time
   */
  const data = time === 0 ? value : JSON.stringify({ value: value, expires: nowTime + days });
  localStorage.setItem(name, data);
}

/**
 * 删除本地缓存
 * delete localStorage:
 */
function DelLocalStorage(name) {
  localStorage.removeItem(name);
}

/**
 * 获取临时缓存
 * get sessionStorage
 */
function GetSessionStorage(name) {
  return sessionStorage.getItem(name);
}

/**
 * 设置临时缓存
 * set sessionStorage
 */
function SetSessionStorage(name, value) {
  sessionStorage.setItem(name, value);
}

/**
 * 删除临时缓存
 * delete sessionStorage
 */
function DelSessionStorage(name) {
  sessionStorage.removeItem(name);
}

/**
 * 获取cookie
 * get cookie
 */
function GetCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

/**
 * 设置cookie
 * set cookie
 */
function SetCookie(name, value, days = 30) {
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
}

/**
 * 删除cookie
 * delete cookie
 */
function DelCookie(name) {
  let domain0 = document.domain.split(".").slice(-2).join(".");
  /**
   * 删除当前域名下的,例如：m.gzzyac.com
   * Delete the current domain name, for example: m.gzzyac.com
   */
  document.cookie = name + "=0;path=/;expires=" + new Date(0).toUTCString();
  /**
   * 删除当前域名下的，例如 .m.gzzyac.com
   * Delete the current domain name, such as m.gzzyac.com
   */
  document.cookie =
    name + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString();
  /**
   * 删除一级域名下的或指定的，例如 .gzzyac.com
   * Delete or specifies under a first-level domain name, such as gzzyac.com
   */
  document.cookie = name + "=0;path=/;domain=" + domain0 + ";expires=" + new Date(0).toUTCString();
}

/**
 * 清除cookie
 * clean cookie
 */
function CleanCookie() {
  let domain0 = document.domain.split(".").slice(-2).join(".");
  var keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (var i = keys.length; i--; ) {
      /**
       * 清除当前域名下的,例如：m.gzzyac.com
       * Clear the current domain name, for example: m.gzzyac.com
       */
      document.cookie = keys[i] + "=0;path=/;expires=" + new Date(0).toUTCString();
      /**
       * 清除当前域名下的，例如 .m.gzzyac.com
       * Clear the current domain name, such as m.gzzyac.com
       */
      document.cookie =
        keys[i] + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString();
      /**
       * 清除一级域名下的或指定的，例如 .gzzyac.com
       * Clears or specifies under a first-level domain name, such as gzzyac.com
       */
      document.cookie =
        keys[i] + "=0;path=/;domain=" + domain0 + ";expires=" + new Date(0).toUTCString();
    }
  }
}

module.exports = {
  GetLocalStorage,
  SetLocalStorage,
  DelLocalStorage,
  GetSessionStorage,
  SetSessionStorage,
  DelSessionStorage,
  GetCookie,
  SetCookie,
  DelCookie,
  CleanCookie,
};
