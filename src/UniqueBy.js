function UniqueBy(arr, fn) {
  /**
   * 如果没有提供fn函数，则使用一个默认函数来处理基本数据类型和复杂类型
   * If no fn function is provided, a default function is used to handle basic data types and complex types
   */
  fn =
    fn ||
    ((item) => {
      if (typeof item === "object" && item !== null) {
        return JSON.stringify(item);
      }
      return item;
    });

  /**
   * 创建一个空对象用于存储已经遇到的值
   * Create an empty object to store the value that has been encountered
   */
  const seen = {};
  /**
   * 使用filter方法遍历数组，返回去重后的数组
   * Use the filter method to iterate through the array and return the deduplicated array
   */
  return arr.filter((item) => {
    /**
     * 使用fn函数获取当前项的唯一键
     * Use the fn function to obtain the unique key for the current item
     */
    const key = fn(item);
    /**
     * 检查这个键是否已经出现过
     * Check if this key has already appeared
     */
    if (seen[key]) {
      /**
       * 如果出现过，则返回false，表示不包含这个项
       * If it occurs, it returns false, indicating that the item is not included
       */
      return false;
    }
    /**
     * 如果没有出现过，则将这个键添加到seen对象中，并返回true，表示包含这个项
     * If it doesn't appear, add the key to the seen object and return true to indicate that the item is contained
     */
    seen[key] = true;
    return true;
  });
}

module.exports = { UniqueBy };
