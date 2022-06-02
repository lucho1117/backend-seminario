/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipoAlquiler',{
        idTipoAlquiler: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_TIPO_ALQUILER'
        },
        descripcion: {
          type: DataTypes.STRING(500),
          allowNull: false,
          field: 'DESCRIPCION'
        },
        tasaAlquiler: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TASA_ALQUILER'
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
        tableName: 'TIPO_ALQUILER',
        timestamps: false
      })
};
