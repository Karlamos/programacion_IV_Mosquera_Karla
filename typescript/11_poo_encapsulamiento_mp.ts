//Encapsulamiento
class Autobus{
    private combustible: number = 100;

    consumirCombustible(gasto: number): void {
        if (gasto > 0) {
            this.combustible = Math.max(0, this.combustible - gasto);
        }
    }
    consultarCombustible(): number {
        return this.combustible;
    }
}
const unidad01 = new Autobus();
unidad01.consumirCombustible(50);
console.log(unidad01.consultarCombustible());
unidad01.consumirCombustible(25);
console.log(unidad01.consultarCombustible());