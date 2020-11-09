class Product {
    constructor(names, cmnd, birthday, email, address, typeCustomer, discount, quantityIncluded, rentDays, typeService, typeRoom, totalPay) {
        this.names = names;
        this.cmnd = cmnd;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
        this.typeCustomer = typeCustomer;
        this.discount = discount;
        this.quantityIncluded = quantityIncluded;
        this.rentDays = rentDays;
        this.typeService = typeService;
        this.typeRoom = typeRoom;
        this.totalPay = totalPay;
    }
    getName() {
        return this.names;
    }
    getCMND() {
        return this.cmnd;
    }
    getBirthday() {
        return this.birthday;
    }
    getEmail() {
        return this.email;
    }
    getAddress() {
        return this.address;
    }
    getDiscount() {
        return this.discount;
    }
    getTypeCustomer() {
        return this.typeCustomer;
    }
    getQuantityIncluded() {
        return this.quantityIncluded;
    }
    getRentDays() {
        return this.rentDays;
    }
    getTypeService() {
        return this.typeService;
    }
    getTypeRoom() {
        return this.typeRoom;
    }
    getTotalPay() {
        return this.totalPay;
    }
    setName(names) {
        this.names = names;
    }
    setCMND(cmnd) {
        this.cmnd = cmnd;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setEmail(email) {
        this.email = email;
    }
    setAddress(address) {
        this.address = address;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    setTypeCustomer(typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
    setQuantityIncluded(quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    }
    setRentDays(rentDays) {
        this.rentDays = rentDays;
    }
    setTypeService(typeService) {
        this.typeService = typeService;
    }
    setTypeRoom(typeRoom) {
        this.typeRoom = typeRoom;
    }
    setTotalPay(totalPay) {
        this.totalPay = totalPay;
    }
}
let temp = 0;
let money =0;
let names = document.getElementById("names").value;
let cmnd = document.getElementById("cmnd").value;
let birthday = document.getElementById("birthday").value;
let email = document.getElementById("email").value;
let address = document.getElementById("address").value;
let typeCustomer = document.getElementById("typeCustomer").value;
let discount = document.getElementById("discount").value;
let quantityIncluded = document.getElementById("quantityIncluded").value;
let rentDays = document.getElementById("rentDay").value;
let typeService = document.getElementById("typeService").value;
let typeRoom = document.getElementById("typeRoom").value;
let totalPay = document.getElementById("totalPay").value;

// document.getElementById("displayName").innerText = names;
// document.getElementById("displayIdCard").innerText = cmnd;
// document.getElementById("displayBirthday").innerText = birthday;
// document.getElementById("displayEmail").innerText = email;
// document.getElementById("displayAddress").innerText = address;
// document.getElementById("displayTypeCustomer").innerText = typeCustomer;
// document.getElementById("displayDiscount").innerText = discount;
// document.getElementById("displayQuantityIncluded").innerText = quantityIncluded;
// document.getElementById("displayRentDay").innerText = rentDays;
// document.getElementById("displayTypeService").innerText = typeService;
// document.getElementById("displayTypeRoom").innerText = typeRoom;
//giá theo loại dịch vụ
// if (typeService === "Villa") {
//     temp = 500;
// } else if (typeService === "House") {
//     temp = 300;
// } else if (typeService === "Room") {
//     temp = 100;
// }
// //giá theo địa chỉ
// if (address === "Đà Nẵng") {
//     money += 20;
// } else if (address === "Huế") {
//     money += 10;
// } else if (address === "Quảng Nam") {
//     money += 5;
// }
// //giá theo thời gian lưu trú
// if (rentDays >=7) {
//     money += 30;
// } else if (rentDays >=5) {
//     money += 20;
// } else if (rentDays >=2) {
//     money += 10;
// }
// //Mức giá theo loại customer
// if (typeCustomer==="Diamond") {
//     money += 15;
// } else if (typeCustomer === "Platinum") {
//     money += 10;
// } else if (typeCustomer === "Gold") {
//     money += 5;
// } else if (typeCustomer === "Silver") {
//     money +=2;
// } else if (typeCustomer === "Member") {
//     money = 0;
// }
// totalPays = temp * rentDays - money;
// document.getElementById("displayTotal").innerText = totalPays;
let CustomerList = [];
CustomerList.push(new Product(names, cmnd, birthday, email, address, typeCustomer, discount, quantityIncluded, rentDays, typeService, typeRoom, totalPays));
function displayProduct() {
    let temp = "";
    temp += "<table class='table'>";
    temp += "<button type='button' class='btn btn-primary' onclick='createProduct()'>Create</button>";
    temp += "<tr>" +
        "<th>Name</th>" +
        "<th>cmnd</th>" +
        "<th>birthday</th>" +
        "<th>email</th>" +
        "<th>address</th>" +
        "<th>typeCustomer</th>" +
        "<th>discount</th>" +
        "<th>quantityIncluded</th>" +
        "<th>rentDays</th>" +
        "<th>typeService</th>" +
        "<th>typeRoom</th>" +
        "<th>totalPays</th>" +
        "</tr>";
    for (let i in productList) {
        temp += "<tr>" +
            "<td>" + productList[i].getId() + "</td> " +
            "<td>" + productList[i].getName() + "</td> " +
            "<td>" + productList[i].getPrice() + "</td> " +
            "<td>" + productList[i].getAmount() + "</td> " +
            "<td><button type='button' class='btn btn-primary' onclick='editProduct(" + i + ")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct(" + i + ")'>Delete</button></td> " +
            "</tr>"
    }
    temp += "</table>";
    document.getElementById("display").innerHTML = temp;
}
function editProduct(index) {
    let temp = "<h1>Edit Product</h1>";
    temp += "<input type='text' class='form-control' disabled value='" + productList[index].getId() + "'></br>"
        + "<input type='text' id='nameEdit' class='form-control' value='" + productList[index].getName() + "'></br>"
        + "<input type='text' id='priceEdit' class='form-control' value='" + productList[index].getPrice() + "'></br>"
        + "<input type='text' id='amountEdit' class='form-control'  value='" + productList[index].getAmount() + "'></br>"
        + "<input type='button' class='btn btn-success' value='Edit' onclick='edit(" + index + ")'></br>";
    document.getElementById("edit").innerHTML = temp;
}
function edit(index) {
    productList[index].setName(document.getElementById("nameEdit").value);
    productList[index].setPrice(document.getElementById("priceEdit").value);
    productList[index].setAmount(document.getElementById("amountEdit").value);
    document.getElementById("edit").innerText = "";
    displayProduct();
}
function deleteProduct(index) {
    if (confirm("Bạn muốn xóa sản phẩm " + productList[index].getName() + " này phải không?")) {
        productList.splice(index, 1);
        displayProduct();
    }
}
function createProduct(index) {
    let temp = "<h1>Create Product</h1>";
    temp += "Id: <input type='text' id='idProduct' class='form-control'></br>"
        + "Name: <input type='text' id='nameEdit' class='form-control'></br>"
        + "Price: <input type='text' id='priceEdit' class='form-control'></br>"
        + "Amount: <input type='text' id='amountEdit' class='form-control'></br>"
        + "<input type='button' class='btn btn-success' value='Create' onclick='create()'></br>";
    document.getElementById("edit").innerHTML = temp;
}
function create() {
    let name = (document.getElementById("nameEdit").value);
    let price = (document.getElementById("priceEdit").value);
    let amount = (document.getElementById("amountEdit").value);
    let idProduct = (document.getElementById("idProduct").value);
    let product = new Product(idProduct, name, price, amount);
    productList.push(product);
    document.getElementById("edit").innerText = "";
    displayProduct();
}
displayProduct();