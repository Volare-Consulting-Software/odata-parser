# OData Parser

OData parser based on OASIS Standard OData v4 ABNF grammar

## How to build

Simply just use ```$ npm run build```

Run TDD tests using ```$ npm run tdd```

## How to use

Parser functions:

```typescript
import parser from '@volare-consulting/odata-parser';

parser.filter("Title eq 'Article1'");
```

```Types 
import { Token, TokenType } from "@volare-consulting/odata-parser/lib/lexer";
```
