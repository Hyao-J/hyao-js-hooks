# hyao-js-hooks

在JavaScript开发中，打造集成方法是一种提高代码复用性和简化操作的有效策略。这种方法通过将多个功能封装成一个单一的函数，使得代码更加简洁，易于理解和维护。例如，我们可以创建一个集成方法来处理兄弟通信，这样开发者就不需要手动自己编写代码。集成方法可以进一步扩展，包括数据处理等，从而形成一个功能丰富的工具库。这样的工具库不仅能够减少代码冗余，还能提高开发效率，使得开发者能够专注于业务逻辑的实现，而不是被繁琐的基础操作所困扰。简而言之，集成方法是简化JavaScript编程的强大工具，它通过封装复杂性，提供了一个简单、便捷的接口，让开发者能够以更少的代码做更多的事情。

In JavaScript development, creating an integrated approach is an effective strategy to improve code reusability and simplify operations. This approach makes the code more concise, easier to understand and maintain by encapsulating multiple functions into a single function. For example, we can create an integrated approach to handle brother communication so that developers do not need to write the code manually. The integrated approach can be further extended to include data processing, etc., to form a feature-rich tool library. Such a tool library can not only reduce code redundancy, but also improve development efficiency, allowing developers to focus on the implementation of business logic instead of being bothered by tedious basic operations. In short, the integrated approach is a powerful tool to simplify JavaScript programming. It provides a simple and convenient interface by encapsulating complexity, allowing developers to do more with less code.

# 使用（Use）

* BorComEvent（事件总线）

  ```javascript
  import { BroComEvent } from "hyao-js-hooks";

  BroComEvent.$emit("Event", "String" || "Object" || "Array" || "Fun");
  BroComEvent.$on("Event", () => {});
  BroComEvent.$off("Event");
  ```
* HtmlEscape（html转义）

  ```javascript
  import { HtmlEscape, HtmlUnEscape } from "hyao-js-hooks";

  HtmlEscape("<div>你好 Hyao</div>");
  HtmlUnEscape("叽里呱啦-要还原的字符");
  ```
* LocalStorage（本地存储）

  ```javascript
  import { GetLocalStorage, SetLocalStorage, DelLocalStorage, GetSessionStorage, SetSessionStorage, DelSessionStorage, GetCookie, SetCookie, DelCookie, CleanCookie } from "hyao-js-hooks";

  GetLocalStorage("键");
  SetLocalStorage("键", value);
  DelLocalStorage("键");
  GetSessionStorage("键");
  SetSessionStorage("键", value);
  DelSessionStorage("键");
  GetCookie("键");
  SetCookie("键", value, time = 30); // 有效时间默认30天
  DelCookie("键");
  CleanCookie();  // 清楚该网站下所有cookie
  ```
* DeboThru（防抖节流）

  ```js
  import { Debounce, Throttle } from "hyao-js-hooks";

  Debounce(fn, time, immediate); // immediate是否需要防抖 --- 默认需要 false
  Throttle(fn, time); // time --- 间隔时间
  ```
* UniqueBy（数组去重）

  ```js
  import { UniqueBy } from "hyao-js-hooks";

  UniqueBy(Array, fn); // fn可根据条件性去重 
  eg: UniqueBy(Array, item => item.id);
  ```
