/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('materiaPrima',{
        idMateriaPrima: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_MATERIA_PRIMA'
        },
        idTipoMateriaPrima: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_MATERIA_PRIMA",
                },
                key: "ID_TIPO_MATERIA_PRIMA",
            },
            field: "ID_TIPO_MATERIA_PRIMA",
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'NOMBRE'
          },
        descripcion: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'DESCRIPCION'
        },
        fechaIngreso: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA_INGRESO'
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'STOCK'
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
        tableName: 'MATERIA_PRIMA',
        timestamps: false
      })
};
