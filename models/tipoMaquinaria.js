/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipoMaquinaria',{
        idTipoMaquinaria: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_TIPO_MAQUINARIA'
        },
        nombre: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'NOMBRE'
        },
        descripcion: {
            type: DataTypes.INTEGER,
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
        tableName: 'TIPO_MAQUINARIA',
        timestamps: false
      })
};
