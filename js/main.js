class empleadoventas {
    constructor(employeeName, surname, email, birthDate, sdUnit, area) {
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
    setname(employeeName) {
        this.employeeName = employeeName;
    }
    getsurname() {
        return this.surname;
    }
    setsurname(surname) {
        this.surname = surname;
    }
    getmail() {
        return this.email;
    }
    setmail(email) {
        this.email = email;
    }
    getbirthdate() {
        return this.birthDate;
    }
    setbirthdate(birthDate) {
        this.birthDate = birthDate;
    }
    getsdUnit() {
        return this.sdUnit;
    }
    setsdUnit(sdUnit) {
        this.sdUnit = sdUnit;
    }
    getarea() {
        return this.sdUnit;
    }
    setarea(area) {
        this.area = area;
    }
}
function addEmployee() {
    let employeeName = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let birthDate = document.getElementById('birthDate').value;
    let sdUnit = document.getElementById('sdUnit').value;
    let area = document.getElementById('area').value;
    let empleado1 = new empleadoventas(employeeName, surname, email, new Date(birthDate), sdUnit, area);
    console.log("nombre", empleado1.employeeName);
    console.log("apellido", empleado1.surname);
    console.log("email", empleado1.email);
    console.log("fecha de nacimiento", empleado1.birthDate);
    console.log("unidad de venta", empleado1.sdUnit);
    console.log("area", empleado1.area);
}
