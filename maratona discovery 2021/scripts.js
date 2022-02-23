const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector(".modal-overlay")
            .classList
            .remove("active")

    }
}

const transactions = [{
            id: 1,

            description: "Luz",
            
            amount: -50000,
            
            date: "16/04/2021",
    },
    {
            id: 2,

            description: "Trarbalho",
            
            amount: 5000000,
            
            date: "16/04/2021",
    },
    {
            id: 3,

            description: "Internet",
            
            amount: -20000,
            
            date: "16/04/2021",
    },
]

    // eu preciso somar as entradas
    // depois preciso somar as saidas
    // com isso preciso remover das entradas o valor das saídas
    // assim,eu irei conseguir o total

const Transaction = {

        incomes(){
            // somar as entradas
        },

        expenses(){
            // somar as saidas
        },

        total(){
            // fazer entradas - saidas

        }


}
    // preciso substituir os dados do HTML com os dados do JS
    
    // preciso agora pegar as minhas trasações do meu projeto javascrit
    
    // depois colocar no meu HTMl

    // quando não sober como fazer algo pesquise,não tenha medo de pesquisar

const DOM = {
    addTrasanction(transaction, index) {
            console.log(transactions)
        
            const tr = document.createElement("tr")

            tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    },
    innerHTMLTransaction(transaction) {

        const html = `
        
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">16/04/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover 
                Transação">
            </td>
        
        `
                                                            
        return html 
    }
}

//estou chamando o DOM
DOM.addTrasanction(transactions[])

