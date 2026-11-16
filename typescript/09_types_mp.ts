type CodigoUnidad = string | number;
type Placa = string;
type CoordenadasRuta = [number, number];
type Parada = {
    x: number;
    y: number;
};

const origenRuta: Parada = { x: 0, y: 0 };
const codigoUnidad: CodigoUnidad = 42;
const codigoUnidad2: CodigoUnidad = "bus.001";

type UbicacionGPS = Parada & {
    z: number;
};

interface UnidadTransporte {
    readonly id: number;
    nombre: string;
    ruta: string;
    gps?: string;
}

interface AutobusArticulado extends UnidadTransporte {
    capacidad: string;
}

const u: UnidadTransporte = {
    id: 1,
    nombre: "Trolebus 01",
    ruta: "Norte-Sur"
};

const u2: UnidadTransporte = {
    id: 2,
    nombre: "Metrobus 02",
    ruta: "Troncal Central",
    gps: "gps_activo.png"
};

console.log(u);
console.log(u2);

const unidadEspecial: AutobusArticulado = {
    id: 3,
    nombre: "Ecovia 03",
    ruta: "Circunvalación",
    capacidad: "Alta capacidad"
};