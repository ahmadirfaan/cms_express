const categoryUseCase = require('../usecase/category_usecase');
const responseFormat = require('../helper/response_format.js');

module.exports = {
  postCategory(req, res) {
    return categoryUseCase.createCategory(req)
        .then((category) => res.status(201).json(responseFormat.build(
            category, 'Berhasil membuat category', '201',
        )))
        .catch((error) => res.status(400).json(responseFormat.error(
            error, 400,
        )));
  },
  getListCategory(req, res) {
    return categoryUseCase.getListCategory(req)
        .then((category) => res.status(200).json(responseFormat.build(
            category, 'Category Information Reterive successfully', 200,
        )))
        .catch((error) => res.status(400).json(responseFormat.error(
            error, 400,
        )));
  },
  getCategoryDetail(req, res) {
    const categoryId = req.params.categoryId;
    return categoryUseCase.getCategoryDetailById(categoryId)
        .then((category) => {
          if (!category) {
            return res.status(404).json(
                responseFormat.error('Tidak menemukan category', 400),
            );
          }
          return res.status(200).json(
              responseFormat.build(
                  category,
                  'success',
                  200,
              ),
          );
        })
        .catch((error) => res.status(500).json(
            responseFormat.error(error, 500),
        ));
  },
  updateCategory(req, res) {
    return categoryUseCase.updateCategoryById(req)
        .then((category) => {
          if (category) {
            res.status(200).json(
                responseFormat.build(category,
                    'Berhasil update category', 200));
          } else {
            res.status(400).json(
                responseFormat.error('Error delete category', 400));
          }
        })
        .catch((error) => res.status(500).json(
            responseFormat.error(error, 500),
        ));
  },
  deleteCategory(req, res) {
    const categoryId = req.params.categoryId;
    return categoryUseCase.deleteCategoryById(categoryId)
        .then((category) => {
          if (category) {
            res.status(200).json(
                responseFormat.build(null,
                    'Berhasil menghapus category', 200));
          } else {
            res.status(400).json(
                responseFormat.error('Error delete category', 400));
          }
        })
        .catch((error) => res.status(500).json(
            responseFormat.error(error, 500),
        ));
  },
};
