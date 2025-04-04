import { Sequelize, DataTypes } from 'sequelize';  // Import DataTypes from Sequelize
import Userdata from './userdata';  // Correct default import

const sequelize = new Sequelize('npdtracker_db', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: Userdata.init(  // Initialize the model here using `init`
    {
      email: {
        type: DataTypes.STRING,  // Using DataTypes here
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,  // Using DataTypes here
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users', // table name
    }
  ),
};

export { sequelize, models };  // Export the sequelize instance and models
