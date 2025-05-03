function calculateArea(){
    // get data
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    // validate data, positive numbers only
    if (length < 0 || width < 0){
        document.getElementById('result').innerText = `Enter positive numbers`;

    }
    // calculate area
    else{
        let area = length * width;
        document.getElementById('result').innerText = `Area of rectangle is: ${area}`;
    }

    // clear data
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
}