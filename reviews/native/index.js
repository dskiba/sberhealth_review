export const distributionCategories = (categoriesList, root, categoryToAdd) => { // неправильные названия аргументов
  Object.assign(categoriesList, categoryToAdd) // результат не присвоин к переменной

  const rootLikeSet = new Set(root) // структура данных в имени не очень хорошо, темболее Like, uniqRoot

  Object.keys(categoryToAdd).map(Number).forEach((categoryId) => { // map избыточен - 2 итерации
    const newCategory = categoriesList[categoryId]
    if (newCategory.level === 0) {
      rootLikeSet.add(categoryId)
    } else {
      const children = new Set(categoriesList[newCategory.parent].children)
      children.add(categoryId)
      categoriesList[newCategory.parent].children = Array.from(children)
     }
  })
  // декомпозиция функции

  return [categoriesList, rootLikeSet] // возвращаем [Object, Set]
}
