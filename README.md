# repeatable

---

可动态新增、删除、移动具有一致性的批量内容模块。

---

## 使用说明

```javascript
var Repeatable = require("repeatable");

listStyle = new Repeatable("#list");
listStyle2 = new Repeatable("#list", {
  min: 3,
  max: 5,
  template: '',
  adder: '#Add',
  deleter: '删除',
  moveup: '上移',
  movedown: '下移'
});
```

## API
