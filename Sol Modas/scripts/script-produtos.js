const listagenero = document.querySelectorAll('#genero > ul > li > label > input')
const listatamanho = document.querySelectorAll('#tam > ul > li > input')
const conteudo = document.querySelectorAll('#conteudo > ul > li')

const genero = document.getElementById('genero')
const generoh3 = document.getElementById('h3genero')
const setagenero = document.getElementById('sg')

const tamanho = document.getElementById('tam')
const tamanhoh3 = document.getElementById('h3tamanho')
const setatamanho = document.getElementById('sta')

const tipo = document.getElementById('tipo')
const tipoh3 = document.getElementById('h3tipo')
const setatipo = document.getElementById('sti')

generoh3.addEventListener('click', MostrarGenero())
tamanhoh3.addEventListener('click', MostrarTamanho())
tipoh3.addEventListener('click', MostrarTipo())

let masc  = document.getElementById('masc')
let fem  = document.getElementById('fem')
let inf  = document.getElementById('inf')
let todos = document.getElementById('todos')
let select = ''

function RedimencionarProdutos(){
    if(window.innerWidth >= 768){
        genero.style.maxHeight = '50vh'
        generoh3.style.borderRadius = '10px 10px 0px 0px'
        tamanho.style.maxHeight = '50vh'
        tamanhoh3.style.borderRadius = '10px 10px 0px 0px'
        tipo.style.maxHeight = '50vh'
        tipoh3.style.borderRadius = '10px 10px 0px 0px'
    } else{
        genero.style.maxHeight = '0vh'
        generoh3.style.borderRadius = '10px'
        tamanho.style.maxHeight = '0vh'
        tamanhoh3.style.borderRadius = '10px'
        tipo.style.maxHeight = '0vh'
        tipoh3.style.borderRadius = '10px'
    }
}
window.onload = SelecionaTipo() 
function SelecionaTipo(){
    for(let type of listagenero){
        if(type.checked){
            if(type.id == 'Masculino'){
                masc.style.display = 'block'
                fem.style.display = 'none'
                Desmarca(document.querySelectorAll('#fem li > input'))
                inf.style.display = 'none'
                Desmarca(document.querySelectorAll('#inf li > input'))
                todos.style.display = 'none'
                Desmarca(document.querySelectorAll('#todos li > input'))
                select = 'masc'
            }else if(type.id == 'Feminino'){
                masc.style.display = 'none'
                Desmarca(document.querySelectorAll('#masc li > input'))
                fem.style.display = 'block'
                inf.style.display = 'none'
                Desmarca(document.querySelectorAll('#todos li > input'))
                Desmarca(document.querySelectorAll('#inf li > input'))
                todos.style.display = 'none'
                select = 'fem'
            }else if(type.id == 'Infantil'){
                masc.style.display = 'none'
                Desmarca(document.querySelectorAll('#masc li > input'))
                fem.style.display = 'none'
                Desmarca(document.querySelectorAll('#fem li > input'))
                inf.style.display = 'block'
                todos.style.display = 'none'
                Desmarca(document.querySelectorAll('#todos li > input'))
                select = 'inf'
            }else if(type.id == 'Todos'){
                masc.style.display = 'none'
                Desmarca(document.querySelectorAll('#masc li > input'))
                fem.style.display = 'none'
                Desmarca(document.querySelectorAll('#fem li > input'))
                inf.style.display = 'none'
                Desmarca(document.querySelectorAll('#inf li > input'))
                todos.style.display = 'block'
                select = 'todos'
            }
            break
        }
    }
}
function Desmarca(lista){
    for(let element of lista){
        element.checked = 0
    }
}
function MostrarFiltros(){
    if(window.innerWidth < 1200){
        const filtro = document.getElementById('filtro')
        const setatop = document.getElementById('seta-top')
        const botoes = document.getElementById('buttons')
        if(filtro.style.maxHeight == 'none'){
            filtro.style.maxHeight = '0vh'
            filtro.style.padding = '0px'
            botoes.style.display = 'none'
            setatop.style.transform = 'rotate(90deg)' 
        } else{
            filtro.style.maxHeight = 'none'
            filtro.style.paddingBottom = '10px'
            botoes.style.display = 'flex'
            setatop.style.transform = 'rotate(-90deg)'
        }
    }
}
function MostrarGenero(){
    if(window.innerWidth < 768 || window.innerWidth >= 1200){
        if(genero.style.maxHeight == '50vh'){
            genero.style.maxHeight = '0vh'
            generoh3.style.transition = 'border-radius 1.2s, border-bottom 0.3s'
            generoh3.style.borderRadius = '10px'
            generoh3.style.borderBottom = '0px solid var(--cor2)'
            setagenero.style.transform = 'rotate(-90deg)'
        } else{
            genero.style.maxHeight = '50vh'
            generoh3.style.transition = 'border-radius 0.1s, border-bottom 0.3s'
            generoh3.style.borderRadius = '10px 10px 0px 0px'
            generoh3.style.borderBottom = '1px solid var(--cor2)'
            setagenero.style.transform = 'rotate(90deg)'
        }
    }
}
function MostrarTamanho(){
    if(window.innerWidth < 768 || window.innerWidth >= 1200){
        if(tamanho.style.maxHeight == '50vh'){
            tamanho.style.maxHeight = '0vh'
            tamanhoh3.style.transition = 'border-radius 1.2s, border-bottom 0.3s'
            tamanhoh3.style.borderRadius = '10px'
            tamanhoh3.style.borderBottom = '0px solid var(--cor2)'
            setatamanho.style.transform = 'rotate(-90deg)'
        } else{
            tamanho.style.maxHeight = '50vh'
            tamanhoh3.style.transition = 'border-radius 0.1s, border-bottom 0.3s'
            tamanhoh3.style.borderRadius = '10px 10px 0px 0px'
            tamanhoh3.style.borderBottom = '1px solid var(--cor2)'
            setatamanho.style.transform = 'rotate(90deg)'
        }
    }
}
function MostrarTipo(){
    if(window.innerWidth < 768 || window.innerWidth >= 1200){
        if(tipo.style.maxHeight == '50vh'){
            tipo.style.maxHeight = '0vh'
            tipoh3.style.borderRadius = '10px'
            tipoh3.style.transition = 'border-radius 1.2s, border-bottom 0.3s'
            tipoh3.style.borderBottom = '0px solid var(--cor2)'
            setatipo.style.transform = 'rotate(-90deg)'
        } else{
            tipo.style.maxHeight = '50vh'
            tipoh3.style.transition = 'border-radius 0.1s, border-bottom 0.3s'
            tipoh3.style.borderRadius = '10px 10px 0px 0px'
            tipoh3.style.borderBottom = '1px solid var(--cor2)'
            setatipo.style.transform = 'rotate(90deg)'
        }
    }
}
function LimpaFiltros(){
    let elemento
    const listafem = document.querySelectorAll('#fem > ul > li > input')
    for(elemento of listafem){
        elemento.checked = 0
    }
    const listamasc = document.querySelectorAll('#masc > ul > li > input')
    for(elemento of listamasc){
        elemento.checked = 0
    }
    const listainf = document.querySelectorAll('#inf > ul > li > input')
    for(elemento of listainf){
        elemento.checked = 0
    }
    const listatodos = document.querySelectorAll('#todos > ul > li > input')
    for(elemento of listatodos){
        elemento.checked = 0
    }

    for(elemento of listatamanho){
        elemento.checked = 0
    }
}
function FiltrarTexto(){
    const produto = document.querySelectorAll('#conteudo li')
    const texto = document.getElementById('barra')
    if(texto.value != ''){
        let textofiltrado = texto.value.toLowerCase()
        for(var i = 0; i < produto.length; i++){
            let produtofiltrado = produto[i].querySelector('p')
            produtofiltrado = produtofiltrado.textContent.toLowerCase()
            if(produtofiltrado.includes(textofiltrado)){
                produto[i].style.display = 'block'
            }else{
                produto[i].style.display = 'none'
            }
        }
    } else{
        for(var i = 0; i < produto.length; i++){
            produto[i].style.display = 'block'
        }
    }
}
function FiltrarPor(){
    for(let i of conteudo){
        i.style.display = 'none'
    }
    let elemento = ''
    //Filtrando Genero
    for(elemento of listagenero){
        if(elemento.checked){
            FiltrarGenero(elemento.id)
            break
        }
    }
    //Filtrando Tamanho
    let marcado = []
    for(elemento of listatamanho){
        if(elemento.checked){
           marcado.push(elemento.id)
        }
    }
    if(marcado.length != 0){
        FiltrarClasse(marcado)
    }
    //Filtrar Tipo de Roupa
    marcado = []
    let listatiposelecionado = document.querySelectorAll(`#${select} > ul > li > input`)
    console.log(listatiposelecionado)
    for(elemento of listatiposelecionado){
        if(elemento.checked){
            console.log(elemento.className)
            marcado.push(elemento.className)
        }
    }
    if(marcado.length != 0){
        FiltrarClasse(marcado)
    }
}

function FiltrarGenero(classe){
    if(classe != 'Todos'){
        for(let product of conteudo){
            if(product.className.includes(classe)){
                product.style.display = 'block'
            } else{
                product.style.display = 'none'
            }
        }
    } else{
        for(let product of conteudo){
            product.style.display = 'block'
        }
    }
}
function FiltrarClasse(classesmarcadas){
    for(let product of conteudo){
        let possui = 0
        if(product.style.display == 'block'){
            for(let classei of classesmarcadas){
                if(product.className.includes(classei)){
                    possui++
                }
            }
            if(possui == 0){
                product.style.display = 'none'
            }
        } 
    }
}