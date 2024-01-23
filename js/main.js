class empleadoventas {
    constructor(name, surname, email, birthDate, sdUnit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = birthDate;
        this.sdUnit = sdUnit;
        this.area = area;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
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
    let empleado1 = new empleadoventas(employeeName, surname, email, birthDate, sdUnit, area);
    console.log(empleado1);
}
