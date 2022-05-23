/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('detalleMaterial',{
        idDetalleMaterial: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_DETALLE_MATERIAL'
        },
        idFase: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "FASE",
                },
                key: "ID_FASE",
            },
            field: "ID_FASE",
        },
        idMaterial: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "MATERIAL",
                },
                key: "ID_MATERIAL",
            },
            field: "ID_MATERIAL",
        },
        descripcion: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DESCRIPCION'
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'CANRIDAD'
        },
        unidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'UNIDAD'
        },
        precioTotal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PRECIO_TOTAL'
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
        tableName: 'DETALLE_MATERIAL',
        timestamps: false
      })
};
