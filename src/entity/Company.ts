import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    companyClient: string

    @Column()
    companyPassword: string

    @Column()
    companyName: string

    @Column({ unique: true })
    companyCnpj: string

    @Column()
    companyCep: string

    @Column()
    companyAddress: string

    @Column()
    companyNumber: string

    @Column()
    companyPhone: string

    @Column({ unique: true })
    companyEmail: string

}
