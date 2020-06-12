const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');

router.get("/admin/articles",(req,res) => {
    Article.findAll({
        include: [{ model: Category}]
    }).then((articles) => {
        res.render("admin/articles/index", {articles:articles});
    });
    
});

router.get("/admin/articles/new",(req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",{categories: categories});
    });
});

router.post("/articles/save",(req,res) => {
    Article.create({
        title: req.body.title,
        slug:slugify(req.body.title),
        body: req.body.body,
        categoryId: req.body.category
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/delete",(req,res) => {
    const id = req.body.id;
    if(id != undefined){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });
            
        }else{
            res.redirect("/admin/articles");
        }
    });

module.exports = router