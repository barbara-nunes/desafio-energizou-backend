import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";

const companyController = new CompanyController;

export const route = Router();

route.post('/company', companyController.Create)
route.patch('/company/:id', companyController.Update)
route.get('/company', companyController.Get)
route.get('/company/:cnpj', companyController.GetByCnpj)
route.get('/companyById/:id', companyController.GetById)
route.delete('/company/:id', companyController.Delete)

