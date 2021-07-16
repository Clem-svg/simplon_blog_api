class Category {
  constructor(id, label) {
    this.id = id,
    this.label = label
  }
}

const myCategory = new Category(id=1, label="Market")
const myUpdatedCategory = new Category(myCategory.id, label="Vegetables")


module.exports = {
  myCategory,
  myUpdatedCategory,
  Category
};