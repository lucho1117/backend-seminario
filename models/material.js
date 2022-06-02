/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('material',{
        idMaterial: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_MATERIAL'
        },
        idTipoMaterial: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_MATERIAL",
                },
                key: "ID_TIPO_MATERIAL",
            },
            field: "ID_TIPO_MATERIAL",
        },
        idProveedor: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ID_PROVEEDOR'
        },
        nombre: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'NOMBRE'
        },
        descripcion: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DESCRIPCION'
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PRECIO'
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
        tableName: 'MATERIAL',
        timestamps: false
      })
};
