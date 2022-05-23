/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fase',{
        idFase: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_FASE'
        },
        idObra: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "OBRA",
                },
                key: "ID_OBRA",
            },
            field: "ID_OBRA",
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
        fechaInicio: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'FECHA_INICIO'
        },
        fechaFin: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'FECHA_FIN'
        },
        costoMaterial: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'COSTO_MATERIAL'
        },
        costoManoObra: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'COSTO_MANO_OBRA'
        },
        costoTotal: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'COSTO_TOTAL'
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
        tableName: 'FASE',
        timestamps: false
      })
};
