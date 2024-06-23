import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Model,Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs{
    value: string 
    description: string
}
@Table({tableName:'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({example:'1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number; 

    @ApiProperty({example:'STUDENT', description: 'User role'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    value: string; 

    @ApiProperty({example:'This role allows the user to register for and take courses', description: 'Role description'})
    @Column({type: DataType.STRING,allowNull:false})
    description: string; 

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];


}