/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('maquinaria',{
        idMaquinaria: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_MAQUINARIA'
        },
        idTipoMaquinaria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "TIPO_MAQUINARIA",
                },
                key: "ID_TIPO_MAQUINARIA",
            },
            field: "ID_TIPO_MAQUINARIA",
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
        peso: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PESO'
        },
        extraccion: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'EXTRACCION'
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
        tableName: 'MAQUINARIA',
        timestamps: false
      })
};
