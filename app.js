const express = require('express');
const bookRouter = express.Router();
const authRouter = express.Router();
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',bookRouter);
app.use('/authors',authRouter);

app.get('/',function(req,res){
    res.render("index",
    {
    
        nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
             title:'Library'
    });
    });
    app.get('/signup',function(req,res){
        res.render("sign",
        {
        
            nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
                 title:'Library'
        });
        });
        app.get('/login',function(req,res){
            res.render("log",
            {
            
                nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
                     title:'Library'
            });
            });
    var books=[
        {
            title: 'Becoming',
            author: 'Michelle Obama',
            genre:'Memoir',
            img:"img1.jpg"
        },
        {
            title: 'To All The Boys I Loved Before',
            author: 'Jenny Han',
            genre:'Romance Novel ',
            img:"img5.jpg"
        },
        {
            title: 'Big Magic',
            author: 'Elizabeth Gilbert',
            genre:'Self-help Book',
            img:"img7.jpg "
        }

    ]

        bookRouter.get('/',function(req,res){
            res.render("book",
            {
            
                nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
                     title:'Library',
                     books

            });
            });
bookRouter.get('/:id',function(req,res){
  const id = req.params.id
    res.render('book',{
        nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
        title:'Library',
        books:book[id]
    })
})
    var books=[
        {
            title: 'Becoming',
            author: 'Michelle Obama',
            genre:'Memoir',
            img:"img1.jpg"
        },
        {
            title: 'To All The Boys I Loved Before',
            author: 'Jenny Han',
            genre:'Romance Novel ',
            img:"img5.jpg"
        },
        {
            title: 'Big Magic',
            author: 'Elizabeth Gilbert',
            genre:'Self-help Book',
            img:"img7.jpg "
        }

    ]     

var authors =[
    {
    name:'Michelle Obama',
    quotes:'For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end',
    img:"img8.jpg"
    },
    {
        name:'Malala Yousafzai',
        quotes:'One child, one teacher, one book, one pen can change the world If one man can destroy everything, why cant one girl change it I don’t want to be thought of as the girl who was shot by the Taliban but the girl who fought for education. This is the cause to which I want to devote my life',
        img:"img9.jpg"
        },
        {
            name:'Jenny Han',
            quotes:'It’s the imperfections that make things beautiful.',
            img:"img10.jpg"
            }
]




    authRouter.get('/',function(req,res){
      res.render("auth",
      {
        nav:[{link:'/signup',name:'SIGN UP'},{link:'/login',name:'LOGIN'},{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'}],
        title:'Library',
        authors
      });
});
app.listen(5550);