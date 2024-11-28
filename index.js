/**
 * 包的入口文件
 * Package entry file
 */
const BroComEvent = require(__dirname + "/src/BroComEvent");
const HtmlEscape = require(__dirname + "/src/HtmlEscape");

/**
 * 暴露文
 * Exposed
 */
module.exports = {
    ...BroComEvent,
    ...HtmlEscape,
};
