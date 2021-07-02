import { Container } from "./styles";
import  incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";


export function Summary(){
  return(
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
        
      </div>
      
      <div>
        <header>
          Saidas
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- R$100,00</strong>
        
      </div>
      
      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$900,00</strong>
        
      </div>
      

    </Container>
       
    )
}