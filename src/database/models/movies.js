module.exports = (sequelize,DataTypes)=> {
    const movie = sequelize.define(
        'Movie',
        {
            title:DataTypes.STRING,
            rating:DataTypes.DECIMAL,
            awards:DataTypes.INTEGER,
            release_date:DataTypes.UUIDV1,
            length:DataTypes.INTEGER
        },
        {
            timestamps:false
        }
    )
        return movie
 
    };