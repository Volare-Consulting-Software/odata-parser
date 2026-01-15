import { BaseType } from "typescript";
import { EntitySet } from "./entitySet";

export type EntityContainer = BaseType & {
    entitySets: EntitySet [];
};