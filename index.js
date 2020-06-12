const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

connection
    .authenticate()
    .then(() => {
        console.log("conexao feita");
    }).catch((error) => {
        console.log(error);
    });

app.use("/",categoriesController);
app.use("/", articlesController);



app.get("/",(req,res) => {
    Article.findAll({
        order:[
           ['id','DESC']
        ]
    }).then(articles => {
        Category.findAll().then(categories =>{
            res.render("index", {articles: articles, categories: categorie});
        });
    });
});

app.get("/:slug",(req,res) => {
    Article.findOne({
        where:{
            slug: req.params.slug
        }
    }).then(article => {
        if(article != undefined){
            res.render("article", {article: article});
        }else{
            res.redirect("/");
        }
    }).catch( error => {
        res.redirect("/");
    });
});

app.listen(8080,() => {
    console.log("o servidor está rodando");
});

