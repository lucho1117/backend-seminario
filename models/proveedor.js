/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('proveedor',{
        idProveedor: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_PROVEEDOR'
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
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'NOMBRE'
          },
        nit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'NIT'
        },
        direccion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: 'DIRECCION'
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'EMAIL'
          },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TELEFONO'
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
        tableName: 'PROVEEDOR',
        timestamps: false
      })
};
