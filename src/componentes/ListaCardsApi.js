import MeuCard from "./MeuCard"
import Api from "../services/Api";
import {useState, useEffect} from "react";

function ListaCardsApi() {

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        Api.get("/")
        .then((response) => {
            setProdutos(response.data);
          })
    });



    return (
        produtos.map(produto => 
         <MeuCard key={produto.id} titulo={produto.nome}>
             <h4>R$ {produto.preco}</h4>
         </MeuCard>
        )
    )
}

export default ListaCardsApi;