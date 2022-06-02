/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vehiculo',{
        idVehiculo: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_VEHICULO'
        },
        idTipoVehiculo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_VEHICULO",
                },
                key: "ID_TIPO_VEHICULO",
            },
            field: "ID_TIPO_VEHICULO",
        },
        placa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'PLACA'
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'MODELO'
        },
        marca: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'MARCA'
      },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'COLOR'
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DESCRIPCION'
        },
        disponible: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          field: 'DISPONIBLE'
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
        tableName: 'VEHICULO',
        timestamps: false
      })
};
