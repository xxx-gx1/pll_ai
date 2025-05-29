# 大数相加

- 高精度 
  js Number 类型，不分整数、浮点数、高精度...
  js 不太适合计算 python 适合
  表现力强 
- 大数字
  边界问题
  Infinity
  -Infinity
  Number.MAX_VALUE
- 字符串化

- es6 bigInt 大数类型

## BigInt
  安全 2^53-1  9007199254740991 Number.MAX_SAFE_INTEGER
  es6 新增的第六种简单数据类型
  - BigInt 类型创建
    - 后面加 n
    - BiGInt("123"),不能new BigInt(123)
  解决 无限大，无溢出问题
  不能混合Number和BigInt运算
  js 适合大型项目开发