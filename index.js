let ex_3=document.querySelector('#ex_3')
let ex_2=document.querySelector('#ex_2')
let ex_1=document.querySelector('#ex_1')

ex_3.style.display='none'
ex_2.style.display='none'
ex_1.style.display='none'

let div
let p
let p_inside
let text

let option=prompt('1.Ejercicio 1\n2.Ejercicio 2\n3.Ejercicio 3')
switch (option) {
    case '1':
        ex_1.style.display='block'
        let h1 = document.createElement('h1')
        text ='my presentation'
        h1.textContent=text

        h1.classList.add('h1Add')
        
        div=document.querySelector('#ex_1>div')
        
        div.insertAdjacentElement('beforebegin',h1)

        p = document.createElement('p')
        text='my best friend is micky'
        p.textContent=text

        p.classList.add('pAdd')

        p_inside=document.querySelector('#ex_1 div>p')
        
        p_inside.insertAdjacentElement('afterend',p)

        break;

    case '2':
        ex_2.style.display='block'
        let ol = document.querySelector('ol')
        let olContent = document.querySelectorAll('ol>li')
        let ul = document.createElement('ul')
        olContent.forEach(element => {
            if(element.textContent!='Preparar el almuerzo'){
                ul.appendChild(element)
            }
            
        })
        ol.replaceWith(ul)
        break;

    case '3':
        ex_3.style.display='block'
        let ps=document.querySelectorAll('.ps')
        ps.forEach(element => {
            element.classList.add('psAdd')
        });
        break;


    default:
        break;
}