//alert("linked js");
const inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
    //console.log(this.value);
    const suffix = this.dataset.sizing || '';
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
//handleUpdate();
//code without arrow function:
// inputs.forEach(myFunction);

// function myFunction(input){
//     input.addEventListener('change',handleUpdate);
//     }


// code with arrow function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const inputs1 = document.querySelectorAll(".controls1 input");
function handleUpdate1() {
    //console.log(this.value);
    const suffix1 = this.dataset.sizing || '';
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix1);
}

// code with arrow function
inputs1.forEach(input => input.addEventListener('change', handleUpdate1));
inputs1.forEach(input => input.addEventListener('mousemove', handleUpdate1));
