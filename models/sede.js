/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sede',{
        idSede: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_SEDE'
        },
        idNegocio: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "NEGOCIO",
                },
                key: "ID_NEGOCIO",
            },
            field: "ID_NEGOCIO",
        },
        departamento: {
          type: DataTypes.STRING(50),
          allowNull: false,
          field: 'DEPARTAMENTO'
        },
        municipio: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: 'MUNICIPIO'
        },
        direccion: {
            type: DataTypes.STRING(2550),
            allowNull: true,
            field: 'DIRECCION'
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
          field: 'ACTIVO'
        },
        fechaCreacion: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'FECHA_CREACION'
        },
        fechaEliminacion: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'FECHA_ELIMINACION'
        },
        idElimino: {
          type: DataTypes.INTEGER,
          allowNull: true,
          field: 'ID_ELIMINO'
        }
      }, {
        sequelize,
        tableName: 'SEDE',
        timestamps: false
      })
};
