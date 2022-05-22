/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('empleado',{
        idEmpleado: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'ID_EMPLEADO'
        },
        idRol: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "ROL",
                },
                key: "ID_ROL",
            },
            field: "ID_ROL",
        },
        idAreaNegocio: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: {
                    tableName: "AREA_NEGOCIO",
                },
                key: "ID_AREA_NEGOCIO",
            },
            field: "ID_AREA_NEGOCIO",
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'NOMBRE'
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'APELLIDO'
        },
        dpi: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DPI'
        },
        nit: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'NIT'
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DIRECCION'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EMAIL'
        },
        fechaNacimiento: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA_NACIMIENTO'
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TELEFONO'
        },
        fechaIngreso: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FECHA_INGRESO'
        },
        sueldo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'SUELDO'
        },
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ID_SEDE'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PASSWORD'
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
        tableName: 'EMPLEADO',
        timestamps: false
      })
};
