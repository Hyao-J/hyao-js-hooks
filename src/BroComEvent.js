// BroComEvent.js
class BroComEvent {
  constructor() {
    this.listeners = {};
  }

  /**
   * 触发事件
   * Triggering Events
   */
  $emit(event, ...args) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((callback) => {
      callback(...args);
    });
  }

  /**
   * 监听事件
   * Listening for events
   */
  $on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  /**
   * 解绑事件
   * Unbinding event
   */
  $off(event, callback) {
    if (!this.listeners[event]) {
      return;
    }
    const index = this.listeners[event].indexOf(callback);
    if (index > -1) {
      this.listeners[event].splice(index, 1);
    }
  }
}

module.exports = new BroComEvent();
