function findsum() {
    var num1 = document.getElementsByName("num1")[0].value;
    var num2 = document.getElementsByName("num2")[0].value;
    var sum = Number(num1) + Number(num2);
    document.getElementsByName("sum")[0].value = sum;
}
