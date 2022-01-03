import { TypesOfPills } from "./TypesOfPill";

export class Product {
    name?: string;
    composition?: string;
    category?: string;
    tag?: string;
    imageURLID?: string;
    featureProduct?: boolean;
    prescription?: string;
    type?: String;
    quantity?: any;
    typesOfPill?: TypesOfPills[]
}
