/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('proceso',{
        idProceso: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_PROCESO'
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'NOMBRE'
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
          allowNull: true,
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
        tableName: 'PROCESO',
        timestamps: false
      })
};
