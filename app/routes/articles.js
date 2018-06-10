const express = require("express");
const articlesController = require("../controllers/articles");

const initArticles = () => {
    const articlesRouter = express.Router();
    articlesRouter.get('/', articlesController.getArticles);
    articlesRouter.post('/', articlesController.insertArticles);
    articlesRouter.post('/:id', articlesController.deleteArticles);
    
   return articlesRouter;
}


module.exports = initArticles;
              