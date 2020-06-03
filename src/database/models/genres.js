module.exports = (sequelize,DataTypes)=> {
    const genre = sequelize.define(
        'Genre',
        {
            name:DataTypes.STRING,
            ranking:DataTypes.INTEGER,
            active:DataTypes.TINYINT
        },
        {
            timestamps:false
        }
    )
        return genre
 
    };