function remplace(){
    let befor=document.getElementById('beforeResult')
    let after= document.getElementById('result')
    if(befor.style.display ='flex'){
        after.style.display ='flex'
        befor.style.display ='none'
    }
}

let amount= document.getElementById('mortg-amount')
let years= document.getElementById('term')
let rate= document.getElementById('average')
let the_result=document.getElementById('total')
let end=document.getElementById('final_amount')
let calculBtn=document.getElementById('calcul')



    function myResult(){
        var a=parseFloat(amount.value)
        var b=parseFloat(years.value)
        var c=parseFloat(rate.value)
        
        return the_result.textContent=a*b*c*0.01/12
    }
    function rest(){
        var a=parseFloat(amount.value)
        var b=parseFloat(years.value)
        var n=parseFloat(the_result.textContent)
        return end.textContent=a+n*b*12
    }
    function clearAll(){

        location.reload()

    }
    function error(){
        let befor=document.getElementById('beforeResult')
        let after= document.getElementById('result')
        if (document.getElementById('mortg-amount').value==0 || document.getElementById('mortg-amount').value==='' ){
            document.getElementById("span1").style.backgroundColor='red'
            document.getElementById("span1").style.color='white'
            document.getElementById('errorField').style.display='block'
            document.getElementById('mortg-amount').style.borderColor='red'
            after.style.display ='none'
            befor.style.display ='flex'
        }
        if (document.getElementById('term').value==0 || document.getElementById('mortg-amount').value==='' ){
            document.getElementById("span2").style.backgroundColor='red'
            document.getElementById("span2").style.color='white'
            document.getElementById('errorField2').style.display='block'
            document.getElementById('term').style.borderColor='red'
            after.style.display ='none'
            befor.style.display ='flex'
        }
        if (document.getElementById('average').value==0 || document.getElementById('mortg-amount').value==='' ){
            document.getElementById("span3").style.backgroundColor='red'
            document.getElementById("span3").style.color='white'
            document.getElementById('errorField1').style.display='block'
            document.getElementById('average').style.borderColor='red'
            after.style.display ='none'
            befor.style.display ='flex'
        }
        if (document.getElementById('divOfinput1').style.backgroundColor !='rgb(246, 250, 203)' && document.getElementById('divOfinput2').style.backgroundColor !='rgb(246, 250, 203)'){
            document.getElementById('errorField3').style.display='block'
            after.style.display ='none'
            befor.style.display ='flex'
        }
    }
    function backColor(){
        let div = document.getElementById('divOfinput1')
        return div.style.backgroundColor='rgb(246, 250, 203)', div.style.borderColor='yellow'
    }
    function backColor1(){
        let div = document.getElementById('divOfinput2')
        return div.style.backgroundColor='rgb(246, 250, 203)',div.style.borderColor='yellow'
    }

    