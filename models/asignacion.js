/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('asignacion',{
        idAsignacion: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_ASIGNACION'
        },
        idVehiculo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "VEHICULO",
                },
                key: "ID_VEHICULO",
            },
            field: "ID_VEHICULO",
        },
        idViaje: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "VIAJE",
                },
                key: "ID_VIAJE",
            },
            field: "ID_VIAJE",
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
        estado: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ESTADO'
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
        tableName: 'ASIGNACION',
        timestamps: false
      })
};
