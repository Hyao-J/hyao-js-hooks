/**
 * 防抖节流
 * Debounce Throttle
 */

// immediate --- 是否需要防抖
const Debounce = (func, wait, immediate = false) => {
  let timeout;

  return function (...args) {
    /**
     * 保存函数执行的上下文和参数
     * Save the context and parameters of the function execution
     */
    const context = this;

    if (timeout) clearTimeout(timeout);
    else if (immediate) {
      /**
       * 如果已经执行过，不再执行
       * If it has been executed, it will not be executed again
       */
      func.apply(context, args);
      immediate = false;
    } else {
      /**
       * 设置延迟执行
       * Set Deferred Execution
       */
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
};

// limit --- 控制间隔时间
const Throttle = (func, limit) => {
  let inThrottle;
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;
    if (!inThrottle) {
      /**
       * 如果没有等待执行的函数，则立即执行
       * If there is no function waiting to execute, execute it immediately
       */
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      /**
       * 清除上一次的等待执行的函数
       * Clear the last function waiting to be executed
       */
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

module.exports = {
  Debounce,
  Throttle,
};
