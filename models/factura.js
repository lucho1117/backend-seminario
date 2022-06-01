/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('factura',{
        idFactura: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_FACTURA'
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
        idTipoPago: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_PAGO",
                },
                key: "ID_TIPO_PAGO",
            },
            field: "ID_TIPO_PAGO",
        },
        idCliente: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'ID_CLIENTE'
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FECHA'
          },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DIRECCION'
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'TOTAL'
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
        },
        alquiler: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: 0,
          field: 'ALQUILER'
        }
      }, {
        sequelize,
        tableName: 'FACTURA',
        timestamps: false
      })
};
