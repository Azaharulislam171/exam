document.getElementById("textlarge").innerHTML = "0";

document.getElementById("add").addEventListener("click", function () {
    let num = parseInt(document.getElementById("textlarge").innerHTML);
    num += 1;
    console.log(num);
    document.getElementById("textlarge").innerHTML = num;
});

document.getElementById("multiply").addEventListener("click", function () {
    document.getElementsByTagName("b")[0].innerHTML =document.getElementById("textlarge").innerHTML;
    let num = parseInt(document.getElementById("textlarge").innerHTML);
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let val = num * (i + 1);
        arr.push(val);
    }

    // Traverse the array and update td1b, td2b, td3b, etc.
    for (let i = 0; i < arr.length; i++) {
        let cellId = `td${i + 1}b`; // Generate the ID dynamically
        let cell = document.getElementById(cellId);
        if (cell) {
            cell.innerHTML = arr[i]; // Update the cell with the array value
        }
    }
});


function findBinary() {
    let num = parseInt(document.getElementById("textlarge").innerHTML);
    if (isNaN(num)) {
        console.log("Invalid number");
        return;
    }

    let result=num;
    let remainder;
    let arr = [];
    while (result>0){
        remainder= result%2;
        result=Math.floor(result/2);
        arr.push(remainder);

    }
    document.getElementById("binary").innerHTML = "";
    for(let i=arr.length-1;i>=0;i--){
        document.getElementById("binary").innerHTML+=arr[i];
    }
  
}