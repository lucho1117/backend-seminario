/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipoVehiculo',{
        idTipoVehiculo: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_TIPO_VEHICULO'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'NOMBRE'
        },
        ejes: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EJES'
        },
        toneladas: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'TONELADAS'
        },
        descripcion: {
            type: DataTypes.STRING,
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
        tableName: 'TIPO_VEHICULO',
        timestamps: false
      })
};
