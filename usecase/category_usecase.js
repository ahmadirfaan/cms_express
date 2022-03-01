const category = require('../models').category;

module.exports = {
  createCategory(req) {
    return category.create({
      name: req.body.name,
    });
  },
  getListCategory() {
    return category.findAll({
      order: ['created_at', 'DESC'],
    });
  },
  getCategoryDetailById(id) {
    return category.findById(id);
  },
  updateCategoryById(req) {
    const category = this.getCategoryDetailById(req.params.categoryId);
    if (!category) {
      return null;
    } else {
      return category.update({
        name: req.body.name,
      });
    }
  },
  deleteCategoryById(id) {
    const category = this.getCategoryDetailById(id);
    if (!category) {
      return null;
    } else {
      return category.destroy();
    }
  },
};
