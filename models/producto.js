/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('producto',{
        idProducto: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_PRODUCTO'
        },
        idCategoria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "CATEGORIA",
                },
                key: "ID_CATEGORIA",
            },
            field: "ID_CATEGORIA",
        },
        idProveedor: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ID_PROVEEDOR'
          },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'NOMBRE'
        },
        descripcion: {
          type: DataTypes.STRING(500),
          allowNull: true,
          field: 'DESCRIPCION'
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'PRECIO'
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'STOCK'
        },
        fechaIngreso: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            field: 'FECHA_INGRESO'
          },
        venta: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'VENTA'
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
        tableName: 'PRODUCTO',
        timestamps: false
      })
};
