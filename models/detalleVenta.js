/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('detalleVenta',{
        idDetalleVenta: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_DETALLE_VENTA'
        },
        idProducto: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "PRODUCTO",
                },
                key: "ID_PRODUCTO",
            },
            field: "ID_PRODUCTO",
        },
        idFactura: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "FACTURA",
                },
                key: "ID_FACTURA",
            },
            field: "ID_FACTURA",
        },
        cantidad: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'CANTIDAD'
        },
        iva: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IVA'
          },
        subtotal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'SUBTOTAL'
        },
        descuento: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DESCUENTO'
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
        }
      }, {
        sequelize,
        tableName: 'DETALLE_VENTA',
        timestamps: false
      })
};
