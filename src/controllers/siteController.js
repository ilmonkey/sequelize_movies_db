//require del archivo database>models>index.js

const DB = require('../database/models')
const OP = DB.Sequelize.Op
//operadores

module.exports = {
    all: (req,res)=> {
        //raw querys
        DB.Movie.findAll() //busca todas las peliculas
        .then((resultado)=> {
            res.send(resultado)
        })
        .catch((error)=> {
            res.send(error)
        })
        //ORM methods
    },

    detail: (req,res)=> {
        //raw querys
        DB.Movie.findByPk(req.params.id)
         .then((resultado)=> {
            res.send(resultado)
        })
        .catch((error)=> {
            res.send(error)
        })
        //ORM methods
    },

    new: (req,res)=> {
        //raw querys
        DB.Movie.findAll({
        limit: 5,
        order: [
            ['release_date', 'DESC'],
        ],
        })
         .then((resultado)=> {
            res.send(resultado)
        })
        .catch((error)=> {
            res.send(error)
        })
        //ORM methods
    },


    recommend: (req,res)=> {
        //raw querys
        DB.Movie.findAll({
            where: {
                    rating:{
                    [OP.gte]: 8
                }
            }
        })
         .then((resultado)=> {
            res.send(resultado)
        })
        .catch((error)=> {
            res.send(error)
        })
        //ORM methods
    },

    searchForm: (req,res)=> {
         res.render('index')
        },

    search: (req,res)=> {
            //raw querys
            DB.Movie.findAll({
                where: {
                    title: {
                    [OP.like]: "%" + req.body.search + "%"
                }
                }
            })
        
        
            .then((resultado)=> {
                res.send(resultado)
            })
            .catch((error)=> {
                res.send('hola')
            })
            //ORM methods
            
        }
    


};

// all: (req,res)=> {
//     //raw querys
//     DB.Movie.findAll({
//         where: {
//             title:{
//             [OP.like]:'La Guerra%'
//         }
//     }
// })
//     .then((resultado)=> {
//         res.send(resultado)
//     })
//     .catch((error)=> {
//         res.send(error)
//     })
//     //ORM methods
// }
// };