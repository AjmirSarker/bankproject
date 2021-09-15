const Loginbtn= document.getElementById("login");
Loginbtn.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area')
    loginArea.style.display='none'
    const transArea= document.getElementById('transaction-area')
    transArea.style.display='block'

})
const depositeBtn= document.getElementById('adddeposite')
depositeBtn.addEventListener('click',function(){
    const depoamount=document.getElementById('depositeAmount').value;
    const depositeNumber=parseFloat(depoamount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber= parseFloat(currentDeposit)
    const  totalDeposit = depositeNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText=totalDeposit
    const currentBalance= document.getElementById('currentBalance').innerText;
    const currentBalanceNumber= parseFloat(currentBalance)
    const totalBalance=currentBalanceNumber+depositeNumber
    document.getElementById('currentBalance').innerText=totalBalance
    document.getElementById('depositeAmount').value=""
   
})
const withdrawBtn = document.getElementById('addwithdraw')
withdrawBtn.addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdrawAmount').value;
    const withdrawNumber=parseFloat(withdrawAmount);
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentwithdrawNumber= parseFloat(currentWithdraw)
    // const  totalwithdraw = currentwithdrawNumber+ withdrawNumber;
    // document.getElementById('currentWithdraw').innerText=totalwithdraw
    
    const currentBalance= document.getElementById('currentBalance').innerText;
    const currentBalanceNumber= parseFloat(currentBalance)
    if(currentBalanceNumber>=withdrawNumber){
        const totalnewBalance=currentBalanceNumber-withdrawNumber
    document.getElementById('currentBalance').innerText=totalnewBalance
    const  totalwithdraw = currentwithdrawNumber+ withdrawNumber;
    document.getElementById('currentWithdraw').innerText=totalwithdraw

    }
    else if(currentBalanceNumber == 0){
        alert('Balance Zero!!')
    }
    
    else{
        alert('You Entered Large Amount than Balance')
        
    }
    document.getElementById('withdrawAmount').value=""

})