function addRow(){
    let dateInput = document.getElementsByClassName("dateInput")[0].value
    let amountInput = document.getElementsByClassName("amountInput")[0].value
    let transactionType = document.getElementsByClassName("transactionType")[0].value

    if(dateInput === '' || amountInput === '' || transactionType === 'Transaction Type'){
        alert("Please fill all the fields");
        return;
    }

    let row = document.createElement('tr');

    let amountcell = document.createElement('td');
    amountcell.innerHTML = amountInput;

    let transactionTypecell = document.createElement('td');
    transactionTypecell.innerHTML = transactionType;

    let datecell = document.createElement('td');
    datecell.innerHTML = dateInput;

    let bincell = document.createElement('td');

    let deleteButton = document.createElement('button');
    let binImag = document.createElement('img');
    binImag.src = './images/recycle-bin.png';
    binImag.style.width = '25px';
    binImag.style.height = '25px';
    deleteButton.appendChild(binImag);
    deleteButton.classList.add('delete-button');

    deleteButton.onclick = () => deleteRow(row);


    bincell.appendChild(deleteButton);
    


    

    
    row.appendChild(amountcell);
    row.appendChild(transactionTypecell);
    row.appendChild(datecell);
    row.appendChild(bincell);

     
    table.appendChild(row);


    let totalIncome = document.getElementById("total-income").innerText
    let totalExpense = document.getElementById("total-expense").innerText;
    let totalBalance = document.getElementById("total-balance").innerText;


    if(transactionType == 'Income'){
        if(totalIncome == '0'){
            document.getElementById("total-income").innerText = amountInput;
        }
        else{
           document.getElementById("total-income").innerText = parseInt(totalIncome) + parseInt(amountInput);
        }
        if(totalBalance == '0'){
            document.getElementById("total-balance").innerText = amountInput;
        }
        else{
              document.getElementById("total-balance").innerText = parseInt(totalBalance) + parseInt(amountInput);
        }

    }
    else if(transactionType == 'Expense'){
        if(totalExpense == '0'){
            document.getElementById("total-expense").innerText = amountInput;
        }
        else{
           document.getElementById("total-expense").innerText = parseInt(totalExpense) + parseInt(amountInput);
        }

        if(totalBalance == '0'){
            document.getElementById("total-balance").innerText = amountInput;
        }
        else{
              document.getElementById("total-balance").innerText = parseInt(totalBalance) - parseInt(amountInput);
        }
    }
}

function deleteRow(row){
    console.log("Delete row function called");
    console.log(row);
    row.remove();
}


