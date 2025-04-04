import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from './db';  // Assuming you have a Sequelize instance

// Define the User model

class Userdata extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
}

Userdata.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,  // Pass the sequelize instance here
    modelName: 'User',
    tableName: 'users',  // The table name in the database is 'users'
  }
);

export default Userdata;
