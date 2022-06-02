/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('obra',{
        idObra: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_OBRA'
        },
        idTipoObra: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_OBRA",
                },
                key: "ID_TIPO_OBRA",
            },
            field: "ID_TIPO_OBRA",
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ID_CLIENTE'
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
        costo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'COSTO'
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
        tableName: 'OBRA',
        timestamps: false
      })
};
