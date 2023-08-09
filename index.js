let ex_3=document.querySelector('#ex_3')
let ex_2=document.querySelector('#ex_2')
let ex_1=document.querySelector('#ex_1')

ex_3.style.display='none'
ex_2.style.display='none'
ex_1.style.display='none'

let div
let h1
let p
let p_inside
let text

let option=prompt('1.Ejercicio 1\n2.Ejercicio 2\n3.Ejercicio 3')
switch (option) {
    case '1':
        ex_1.style.display='block'
        h = document.createElement('h1')
        text ='my presentation'
        h.textContent=text

        h.classList.add('h1Add')
        
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

        h = document.querySelector('#ex_2>h2')
        h.classList.add('classUl')

        let ol = document.querySelector('ol')
        let olContent = document.querySelectorAll('ol>li')
        let ul = document.createElement('ul')

        ol.replaceWith(ul)
        olContent.forEach(element => {
            if(element.textContent!='Preparar el almuerzo'){
                ul.appendChild(element)
                switch (element.textContent) {
                    case 'Ir al banco':
                        element.classList.add('failed')
                        break;
                    default:
                        element.classList.add('fullfiled')
                        break;
                }
            } 
            else{
                element.textContent='Recoger a los niños'
                element.classList.add('failed')
                ul.appendChild(element)
            }
        })

        
        


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