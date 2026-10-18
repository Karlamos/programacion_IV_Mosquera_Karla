class UnidadTransporte {
    public nombre: string;
    public capacidad: number;
    public combustible: number; 
    
    constructor(
        nombre: string,
        capacidad: number,
        combustible: number, 
    ){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.combustible = combustible;

    }
    operar (): void{
        this.combustible -= 5;
        console.log(`${this.nombre} inicia un recorrido`);
    }
    
    mantenimiento(): void{
        this.capacidad += 10;
        console.log(`${this.nombre} ha recibido mantenimiento`);
    }
}

const trolebus = new UnidadTransporte("Trolebus 01", 80, 100);
const metrobus = new UnidadTransporte("Metrobus 02", 90, 100);

trolebus.operar();
console.log(metrobus.capacidad);
metrobus.mantenimiento();
metrobus.mantenimiento();
console.log(metrobus.capacidad);
metrobus.operar();
metrobus.operar();
console.log(metrobus.combustible);