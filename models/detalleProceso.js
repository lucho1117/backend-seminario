/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('detalleProceso',{
        idDetalleProceso: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_DETALLE_PROCESO'
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
        idProceso: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "PROCESO",
                },
                key: "ID_PROCESO",
            },
            field: "ID_PROCESO",
        },
        idMaquinaria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "MAQUINARIA",
                },
                key: "ID_MAQUINARIA",
            },
            field: "ID_MAQUINARIA",
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
        tableName: 'DETALLE_PROCESO',
        timestamps: false
      })
};
