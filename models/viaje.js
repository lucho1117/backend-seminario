/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('viaje',{
        idViaje: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_VIAJE'
        },
        idCargamento: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "CARGAMENTO",
                },
                key: "ID_CARGAMENTO",
            },
            field: "ID_CARGAMENTO",
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ID_CLIENTE'
        },
        origen: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ORIGEN'
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DESTINO'
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
        kilometros: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'KILOMETROS'
        },
        toneladas: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TONELADAS'
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PRECIO'
        },
        estado: {
          type: DataTypes.INTEGER,
          allowNull: true,
          field: 'ESTADO'
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
        tableName: 'VIAJE',
        timestamps: false
      })
};
