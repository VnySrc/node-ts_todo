import {Model, DataTypes} from "sequelize";
import {sequelize} from "../instances/mysql"

interface UserInstance extends Model {
    id: number,
    title: string,
    content: string,
}

export const Todo = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
}, 
    {
        tableName: 'todo',
        timestamps: false
    }  
)
