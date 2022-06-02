/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('areaNegocio',{
        idAreaNegocio: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_AREA_NEGOCIO'
        },
        idArea: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: {
                    tableName: "AREA",
                },
                key: "ID_AREA",
            },
            field: "ID_AREA",
        },
        idNegocio: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: {
                    tableName: "NEGOCIO",
                },
                key: "ID_NEGOCIO",
            },
            field: "ID_NEGOCIO",
        },
        descripcion: {
          type: DataTypes.STRING(500),
          allowNull: true,
          field: 'DESCRIPCION'
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
        tableName: 'AREA_NEGOCIO',
        timestamps: false
      })
};
