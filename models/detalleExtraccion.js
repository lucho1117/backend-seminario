/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('detalleExtraccion',{
        idDetalleExtraccion: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_DETALLE_EXTRACCION'
        },
        idExtraccion: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "EXTRACCION",
                },
                key: "ID_EXTRACCION",
            },
            field: "ID_EXTRACCION",
        },
        idMateriaPrima: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "MATERIA_PRIMA",
                },
                key: "ID_MATERIA_PRIMA",
            },
            field: "ID_MATERIA_PRIMA",
        },
        idEmpleado: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "EMPLEADO",
                },
                key: "ID_EMPLEADO",
            },
            field: "ID_EMPLEADO",
        },
        idMaquinaria: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ID_MAQUINARIA'
          },
        descripcion: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'DESCRIPCION'
        },
        fechaInicio: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA_INICIO'
        },
        fechaFin: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA_FIN'
        },
        costo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'COSTO'
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
        tableName: 'DETALLE_EXTRACCION',
        timestamps: false
      })
};
