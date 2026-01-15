import { EntityContainer } from "./entityContainer";
import { EntitySet } from "./entitySet";
import { NamespaceType } from "./namespaceType";

export type Schema = NamespaceType & {
    entityContainer: EntityContainer[];
    entityTypes : EntitySet[]
};
