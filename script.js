document.getElementById("subForm").addEventListener("submit", event => {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const suma = num1 + num2;

    document.getElementById("result").innerText = `la suma de ${num1} mas ${num2} es de ${suma}`;
    
})