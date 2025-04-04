import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// This comment model is responsible for managing the database interaction
interface CommentAttributes {
    id: number;
    comment: string;
}

// Optional is a TypeScript utility type that makes some properties optional.
// CommentCreationAttributes extends Optional to make the 'id' field optional when creating a new Comment entry.
interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> { }

// The Comment class extends Sequelize's Model class and implements CommentAttributes to enforce the structure of feedback records.
export class Comment extends Model<CommentAttributes, CommentCreationAttributes> implements CommentAttributes {
    public id!: number;
    public comment!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// The CommentFactory function initializes the Comment model with its attributes and configurations.
// This function will be used in the Express.js application to set up the Comment table in the PostgreSQL database.
export function CommentFactory(sequelize: Sequelize): typeof Comment {
    Comment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  // Automatically incrementing ID for each feedback entry.
                primaryKey: true,     // Primary key for the Feedback table.
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,     // Email field cannot be null.
            },
        },
        {
            tableName: 'Comments',  // Name of the table in PostgreSQL.
            sequelize,               // The Sequelize instance that connects to PostgreSQL.
        }
    );

    return Comment;  // Returns the initialized model to be used in the application.
}
