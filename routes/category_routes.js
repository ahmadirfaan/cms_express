const categoryController = require('../controller/category_controller');

module.exports = (app) => {
  app.post(`${process.env.PREFIX_API}/category`,
      categoryController.postCategory);
  app.get(`${process.env.PREFIX_API}/category`,
      categoryController.getListCategory);
  app.put(`${process.env.PREFIX_API}/category/:categoryId`,
      categoryController.updateCategory);
  app.get(`${process.env.PREFIX_API}/category/:categoryId`,
      categoryController.getCategoryDetail);
  app.delete(`${process.env.PREFIX_API}/category/categoryId`,
      categoryController.deleteCategory);
};
