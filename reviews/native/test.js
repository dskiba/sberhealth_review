import { distributionCategories } from './index';

it('should ', function () {
  const categories = {
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

  const root =  [1,2]

  const newCategories  = {
    3: {title: 'baz', children: [4], level: 2, parent: 2},
    4: {title: 'bin', children: [], level: 3, parent: 3}
  }
  const [newCat, newRoot] = distributionCategories(categories, root, newCategories)
  console.log({newCat, newRoot})
});
