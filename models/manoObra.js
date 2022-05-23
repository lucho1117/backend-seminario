/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('manoObra',{
        idManoObra: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_manoObra'
        },
        idFase: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "FASE",
                },
                key: "ID_FASE",
            },
            field: "ID_FASE",
        },
        idEmpleado: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "EMPLEADO",
                },
                key: "ID_EMPLEADO",
            },
            field: "ID_EMPLEADO",
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
        tableName: 'MANO_OBRA',
        timestamps: false
      })
};
