import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Company } from "../entity/Company";

export class CompanyController {
    public async Create(req: Request, res: Response) {
        try {
        const body = req.body;

        const company = await AppDataSource.getRepository(Company).save({
            ...body
        })

        return res.json({ company })
    } catch (error) {
     res.sendStatus(500)       
    }
    }

    public async Update(req: Request, res: Response) {
        
        try {
            
        const body = req.body;
        const id = req.params.id;
        await AppDataSource.getRepository(Company).upsert({
            ...body, id
        }, ["id"])
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
    }

    public async Get(req: Request, res: Response) {
        try {
        const companies = await AppDataSource.getRepository(Company).find()
        return res.json({ companies })
        } catch (error) {
        return res.sendStatus(500);
    }
    }

    public async GetByCnpj(req: Request, res: Response) {
        try {        
        const cnpj = req.params.cnpj;
        var data = await AppDataSource.getRepository(Company)
                  .createQueryBuilder("company")
                  .where("company.companyCnpj like :cnpj", { cnpj:`%${cnpj}%` })
                  .getMany();
        return res.json(data)
    } catch (error) {
        return res.sendStatus(500);
    }
    }

    public async GetById(req: Request, res: Response) {
        try {
        const id = req.params.id;
        const company = await AppDataSource.getRepository(Company).findOneBy({
            id: Number(id)
        })
        return res.json(company)
    } catch (error) {
        return res.sendStatus(500);
    }
    }

    public async Delete(req: Request, res: Response) {
        try {
        const {id} = req.params;
        await AppDataSource.getRepository(Company).delete({
            id: Number(id)
        })
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
        
    }
}