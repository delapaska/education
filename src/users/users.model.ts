import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Model,Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs{
    email: string 
    password: string
}
@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example:'1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey:true})
    id: number; 

    @ApiProperty({example:'qwerty123@mail.ru', description: 'User email'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string; 

    @ApiProperty({example:'102031501112', description: 'User password'})
    @Column({type: DataType.STRING,allowNull:false})
    password: string; 

    @ApiProperty({example:'false', description: 'Is User Banned?'})
    @Column({type: DataType.BOOLEAN,defaultValue: false})
    banned: boolean; 

    @ApiProperty({example:'Bad behavior', description: 'Ban Reason'})
    @Column({type: DataType.STRING,allowNull:true})
    banReason: string; 

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];


}