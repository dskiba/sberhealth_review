# Провести ревью задачи
важен процесс ревью: 
* что бросается в глаза
* подчеркнуть критичные ошибки
* руководствоваться личными убеждениями


## Задача: добавить возможность обновлять категории
Есть магазин с категориями. Бэк присылает НЕ новые категории, а дельту, категории которые нужно обновить.
Реализовать функцию которая будет возвращать новые категории

Ожидаемое использования: 
```javascript
const [newCategories, newRoot] = distibutionCategories(categories, root, newCategories)
```

result:
```yaml
  categories: {
  1: {
    title: 'foo',
    children: [ 2 ],
    level: 0
  },
  2: {
    title: 'bar',
    children: [ ],
    level: 1,
    parent: 1
  }
}
    
  root: [1,2]

  newCategories: {
    3: {title: 'baz', children: [4], level: 2, parent: 2} 
    4: {title: 'bin', children: [], level: 3, parent: 3} 
  }
```
  
