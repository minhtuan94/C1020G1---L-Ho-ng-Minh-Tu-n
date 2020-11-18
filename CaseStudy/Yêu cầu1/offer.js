let regexEmail = /\S+@\S+\.\S+/;
let regexBirthday = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
let regexCMND = /^[\d]{8,8}$/;
let regexNames = /^[A-Za-z\s]+$/;
let names = document.getElementById('names');

let cmnd = document.getElementById("cmnd");
window
function checkID() {
    // let idVal = Number.parseFloat(cmnd.value);
    // if (!Number.isInteger(idVal)){
    //     document.getElementById("checkID").innerHTML = "Vui lòng nhập đúng định dạng";
    // } else if (idVal<100000000 || idVal>999999999) {
    //     document.getElementById("checkID").innerHTML = "Vui lòng nhập đúng định dạng";
    // } else {
    //     document.getElementById("checkID").innerHTML = "";
    // }
    if (!regexCMND.test(cmnd.value)) {
        document.getElementById("checkID").innerHTML = "Vui lòng nhập đúng định dạng";
    } else {
        document.getElementById("checkID").innerHTML = "";
    }
}

let birthday = document.getElementById("birthday");
let email = document.getElementById("email");

function checkEmail() {
    if (!regexEmail.test(email.value)) {
        document.getElementById("checkEmail").innerHTML = "Vui lòng nhập đúng định dạng";
    } else {
        document.getElementById("checkEmail").innerHTML = "";
    }
}

let address = document.getElementById("address");
let typeCustomer = document.getElementById("typeCustomer");
let discount = document.getElementById("discount");
let quantityIncluded = document.getElementById("quantityIncluded");
let rentDays = document.getElementById("rentDay");
let typeService = document.getElementById("typeService");
let typeRoom = document.getElementById("typeRoom");
let temp = 0;
let money = 0;
let arrCustomer = [];
// let tempName = "";
function displayCustomer() {
    // for (let i = 0; i < names.value.length; i++) {
    //     if (name.value.charAt(i) === " " && names.value.charAt(i + 1) === " ") {
    //         continue;
    //     }
    //     if (i === 0 || names.value.charAt(i - 1) === " ") {
    //         tempName += names.value.charAt(i).toUpperCase();
    //         continue;
    //     }
    //     tempName += names.value.charAt(i);
    // }
    // document.getElementById("displayName").innerHTML = tempName.trim();
    document.getElementById("displayName").innerText = names.value;
    document.getElementById("displayIdCard").innerText = cmnd.value;
    document.getElementById("displayBirthday").innerText = birthday.value;
    document.getElementById("displayEmail").innerText = email.value;
    document.getElementById("displayAddress").innerText = address.value;
    document.getElementById("displayTypeCustomer").innerText = typeCustomer.value;
    document.getElementById("displayDiscount").innerText = discount.value;
    document.getElementById("displayQuantityIncluded").innerText = quantityIncluded.value;
    document.getElementById("displayRentDay").innerText = rentDays.value;
    document.getElementById("displayTypeService").innerText = typeService.value;
    document.getElementById("displayTypeRoom").innerText = typeRoom.value;

document.getElementsByClassName('tab2')[0].style.display = "block";
document.getElementsByClassName('tab3')[0].style.display = "block";
//giá theo loại dịch vụ
    if (typeService.value === "Villa") {
        temp = 500;
    } else if (typeService.value === "House") {
        temp = 300;
    } else if (typeService.value === "Room") {
        temp = 100;
    }
    //giá theo địa chỉ
    if (address.value === "Đà Nẵng") {
        money += 20;
    } else if (address.value === "Huế") {
        money += 10;
    } else if (address.value === "Quảng Nam") {
        money += 5;
    }
    //giá theo thời gian lưu trú
    if (rentDays.value >= 7) {
        money += 30;
    } else if (rentDays.value >= 5) {
        money += 20;
    } else if (rentDays.value >= 2) {
        money += 10;
    }
    //Mức giá theo loại customer
    if (typeCustomer.value === "Diamond") {
        money += 15;
    } else if (typeCustomer.value === "Platinum") {
        money += 10;
    } else if (typeCustomer.value === "Gold") {
        money += 5;
    } else if (typeCustomer.value === "Silver") {
        money += 2;
    } else if (typeCustomer.value === "Member") {
        money = 0;
    }
    totalPays = temp * rentDays.value - money;
    document.getElementById("displayTotal").innerText = totalPays;
}
