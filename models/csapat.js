const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Csapat extends Model {};

    Csapat.init
    (
        {
            azonosító:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            név:
            {
                type: DataTypes.STRING,

            },
            klubtagokSzáma:
            {
                type: DataTypes.INTEGER,

            },
        },

        {
            sequelize,
            modelName: "Csapat",
            freezeTableName: true,
            timestamps: false,
        }
    )
    
    return Csapat;
}