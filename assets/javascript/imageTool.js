//alert("linked js");
const inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
    console.log(this.value);
}
//handleUpdate();
inputs.forEach(input => input.addEventListener('change', handleUpdate));
