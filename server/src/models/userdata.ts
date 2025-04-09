import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/connection.js';

// Define the shape of attributes, including email
interface UserAttributes {
  id: number;
  username: string;
  password_hash: string;  // Change password to password_hash for secure storage
  email: string;
}

// Make `id` optional for creation, and allow email to be set as well
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Extend Sequelize's Model with your attributes
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password_hash!: string;  // Change password to password_hash
  public email!: string;

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
    password_hash: {  // Change to password_hash for storing the hashed password
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    // modelName: 'users',
      // Optionally, set to false if you don't need createdAt/updatedAt
  }
);

export default User;
