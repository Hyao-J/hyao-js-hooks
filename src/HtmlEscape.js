/**
 * html转义
 * HTML escape
 */
function HtmlEscape(str) {
  const escapeMap = new Map([
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
    ["'", "&#x27;"],
    ["`", "&#x60;"],
  ]);

  let escapedStr = str;
  for (const [char, entity] of escapeMap) {
    escapedStr = escapedStr.replace(new RegExp(char, "g"), entity);
  }
  return escapedStr;
}

/**
 * html还原
 * HTML Restore
 */
function HtmlUnEscape(str) {
  /**
   * 替换命名实体
   * Replace named entities
   */
  const namedEntitiesReplaced = str.replace(/&([a-z]+);/g, (match, name) => {
    const unescapeMap = new Map([
      ["amp", "&"],
      ["lt", "<"],
      ["gt", ">"],
      ["quot", '"'],
      ["#x27", "'"],
      ["#x60", "`"],
    ]);
    return unescapeMap.get(name) || match;
  });

  /**
   * 替换十六进制实体
   * Replace hexadecimal entity
   */
  const hexEntitiesReplaced = namedEntitiesReplaced.replace(
    /&#x([0-9a-f]{1,6});/gi,
    (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    },
  );

  /**
   * 替换十进制实体
   * Replace decimal entity
   */
  const decimalEntitiesReplaced = hexEntitiesReplaced.replace(/&#(\d{1,7});/gi, (match, num) => {
    return String.fromCharCode(parseInt(num, 10));
  });

  return decimalEntitiesReplaced;
}

module.exports = {
  HtmlEscape,
  HtmlUnEscape,
};
