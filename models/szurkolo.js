const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class Szurkoló extends Model {};

    Szurkoló.init
    (
        {
            szigSzám:
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
            kor:
            {
                type: DataTypes.INTEGER,
            },
            nem:
            {
                type: DataTypes.ENUM,
                values: ['Férfi', 'Mő', 'Ci'],
            },

        },

        {
            sequelize,
            modelName: "Szurkoló",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return Szurkoló;
}