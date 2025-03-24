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

// let rest=the_result-amount

    function myResult(){
        var a=parseFloat(amount.value)
        var b=parseFloat(years.value)
        var c=parseFloat(rate.value)
        
        return the_result.textContent= a*b*c*0.01
    }
    function rest(){
        var a=parseFloat(amount.value)
        return end.textContent=a-the_result.textContent
    }
    function clearAll(){

        location.reload()

    }



// document.getElementById(beforeResult)style.display ='none'

// const changeBtn= 2
// const affin= 'bb'

// //add event listener
// changeBtn.addEventListener("click", function(){
//         affin.style.color = 'red'

// })

// .style.display ='none'
// .style.display ='flex'