const calculateBtn = document.querySelector('#calculateBtn');

calculateBtn.addEventListener("click",()=>{


    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

    if(billAmount == ""){
        alert("O valor precisa ser preenchido.");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;


    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount");

    tipAmountInput.value = tipAmount.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
    totalAmountInput.value = totalAmount.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
})