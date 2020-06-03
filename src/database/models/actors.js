module.exports = (sequelize,DataTypes)=> {
    const actor = sequelize.define(
        'Actor',
        {
            first_name:DataTypes.STRING,
            last_name:DataTypes.STRING,
            rating:DataTypes.INTEGER,
            favorite_movie_id:DataTypes.INTEGER
        },
        {
            timestamps:false
        }
    )
        return actor
    };