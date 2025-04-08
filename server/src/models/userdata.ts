import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/connection.js';

// Define the shape of attributes, including email
interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;  // Add email here
}

// Make `id` optional for creation, and allow email to be set as well
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Extend Sequelize's Model with your attributes
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;  // Add email to the class properties

  // timestamps (optional)
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Init model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {  // Add email field to the Sequelize model
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Assuming you want the email to be unique
    },
  },
  {
    sequelize,
    tableName: 'Users',
    modelName: 'User',
    timestamps: true, // You can set this to false if you don't want createdAt/updatedAt
  }
);

export default User;
