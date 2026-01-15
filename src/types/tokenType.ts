import { Token } from "../lexer";

export interface TokenType {
    name?: Token;
    select?: Token;
    namespace?: string;
    value?: string;
}
