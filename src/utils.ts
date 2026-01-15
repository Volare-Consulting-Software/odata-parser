export namespace Utils {
    export type SourceArray = number[] | Uint16Array;

    export function stringify(value: SourceArray, index: number, next: number): string {
        return Array.prototype.map.call(value.slice(index, next), function (ch) { return String.fromCharCode(ch); }).join("");
    }

    export function is(value: number, compare: string) {
        for (let i = 0; i < compare.length; i++) {
            if (value === compare.charCodeAt(i)) return true;
        }

        return false;
    }

    export function equals(value: SourceArray, index: number, compare: string) {
        let i = 0;
        while (value[index + i] === compare.charCodeAt(i) && i < compare.length) {
            i++;
        }
        return i === compare.length ? i : 0;
    }

    export function required(value: SourceArray, index: number, comparer: Function, min?: number, max?: number) {
        let i = 0;

        max = max || (value.length - index);
        while (i < max && comparer(value[index + i])) {
            i++;
        }

        return i >= (min || 0) && i <= max ? index + i : 0;
    }


    export function parseTimeUnit(value: Utils.SourceArray, index: number): string | undefined {
        const timeUnits = ["day", "days", "hour", "hours", "minute", "minutes", "second", "seconds"];

        for (const unit of timeUnits) {
            if (Utils.equals(value, index, unit)) {
                return unit;
            }
        }
        return undefined;
    }

    export function isNumericType(type: string): boolean {
        const numericTypes : string[] = [
            'Edm.Byte',
            'Edm.SByte',
            'Edm.Int16',
            'Edm.Int32',
            'Edm.Int64',
            'Edm.Decimal',
            'Edm.Double',
            'Edm.Single'
        ];
        return numericTypes.includes(type);
    }
}

export default Utils;
