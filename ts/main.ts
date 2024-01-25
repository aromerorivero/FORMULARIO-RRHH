interface empleado {
    employeeName: string
    surname: string
    email: string
    birthDate: Date
}

class empleadoventas implements empleado {
    employeeName: string;
    surname: string;
    email: string;
    birthDate: Date;
    sdUnit: string;
    area: string;

    constructor(employeeName: string, surname: string, email: string, birthDate: Date, sdUnit: string, area: string) {
        this.employeeName = employeeName;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.sdUnit = sdUnit;
        this.area = area;
    }
    getname() {
        return this.employeeName;
    }
    setname(employeeName: string) {
        this.employeeName = employeeName;
    }
    getsurname() {
        return this.surname;
    }
    setsurname(surname: string) {
        this.surname = surname;
    }
    getmail() {
        return this.email;
    }
    setmail(email: string) {
        this.email = email;
    }
    getbirthdate() {
        return this.birthDate;
    }
    setbirthdate(birthDate: Date) {
        this.birthDate = birthDate;
    }
    getsdUnit() {
        return this.sdUnit;
    }
    setsdUnit(sdUnit: string) {
        this.sdUnit = sdUnit;
    }
    getarea(): string {
        return this.sdUnit;
    }
    setarea(area: string) {
        this.area = area;
    }
}
function addEmployee(): void {

    let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
    let surname = (<HTMLInputElement>document.getElementById('surname')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
    let sdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
    let area = (<HTMLInputElement>document.getElementById('area')).value;

    let empleado1 = new empleadoventas(employeeName, surname, email, new Date(birthDate), sdUnit, area);

    console.log("nombre",empleado1.employeeName )
    console.log("apellido",empleado1.surname )
    console.log("email",empleado1.email )
    console.log("fecha de nacimiento",empleado1.birthDate )
    console.log("unidad de venta",empleado1.sdUnit )
    console.log("area",empleado1.area )
}