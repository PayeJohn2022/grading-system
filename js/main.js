const getResult = () => {
    let info = document.getElementById('info').value;
    let net = document.getElementById('net').value;
    let web = document.getElementById('web').value;
    let sys = document.getElementById('sys').value;
    let etc = document.getElementById('etc').value;
    let rizz = document.getElementById('rizz').value;
    let pe = document.getElementById('pe').value;

    let total = parseFloat(info) + parseFloat(net) + parseFloat(web) + parseFloat(sys) + parseFloat(etc) + parseFloat(rizz) + parseFloat(pe);
    let percentage = (total * 100) / 700;
    let remarks;

    if (percentage >= 100) {
        remarks = "DOES NOT EXIST!";
    }
    else if (percentage >= 90 && percentage <= 99) {
        remarks = "PASSED!";
    }
    else if (percentage >= 85 && percentage <= 89) {
        remarks = "PASSED!";
    }
    else if (percentage >= 80 && percentage <= 84) {
        remarks = "PASSED!";
    }
    else if (percentage >= 75 && percentage <= 79) {
        remarks = "PASSED!";
    }
    else {
        remarks = "FAILED!";
    }

    document.getElementById('total').innerHTML = total;
    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('remarks').innerHTML = remarks;

    let resultShow;

    if (percentage >= 100) {
        resultShow = "DOES NOT EXIST!";
    }
    else if (percentage >= 90 && percentage <= 99) {
        resultShow = "OUTSTANDING!";
    }
    else if (percentage >= 85 && percentage <= 89) {
        resultShow = "VERY SATISFACTORY!";
    }
    else if (percentage >= 80 && percentage <= 84) {
        resultShow = "SATISFACTORY!";
    }
    else if (percentage >= 75 && percentage <= 79) {
        resultShow = "FAIRLY SATISFACTORY!";
    }
    else {
        resultShow = "DID NOT MEET EXPECTATIONS";
    }

    document.getElementById('resultShow').innerHTML = resultShow;
}
