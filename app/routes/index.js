// const app = require("express")();
const initArticles = require("./articles");
const openHome= require("./openHome.js");

const initRoutes = (app) => {
    console.log("inside index.js");
    app.use('/', openHome());
    app.use('/articles', initArticles()); 
    app.use('/insert', initArticles()); 
    app.use('/delete',initArticles());
   
   
}

module.exports = initRoutes;

