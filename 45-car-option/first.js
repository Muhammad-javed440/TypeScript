"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInf(manufacturer, modelName, ...extraOption) {
    const CarInf = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return CarInf;
}
;
let answer = storeCarInf('Honda', 'Civic', { color: 'See Green' }, { features: ['Navigation', 'Power Window'] });
console.log(answer);
