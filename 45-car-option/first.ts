function storeCarInf(manufacturer: string,modelName: string, ...extraOption:{[key:string]:any}[]):
object  {

      const CarInf={
     manufacturer,
     modelName,
     ...Object.assign({},...extraOption)
    }
     return CarInf;
};

let answer=storeCarInf('Honda','Civic',{color:'See Green'},{features:['Navigation','Power Window']});
console.log(answer);