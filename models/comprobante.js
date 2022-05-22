/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comprobante',{
        idComprobante: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_COMPROBANTE'
        },
        idAsignacion: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "ASIGNACION",
                },
                key: "ID_ASIGNACION",
            },
            field: "ID_ASIGNACION",
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA'
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
        tableName: 'COMPROBANTE',
        timestamps: false
      })
};
