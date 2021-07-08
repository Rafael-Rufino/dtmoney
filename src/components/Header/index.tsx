
import logoImg from '../../assets/logo.svg';
import {Container, Content} from './styles';

// propriedade
interface HeaderProps{
  onOpenNewTransitionModal: () => void;


}

// recebe propriedade
export function Header({onOpenNewTransitionModal}: HeaderProps){


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransitionModal}> 
          Nova transação
        </button>
 
      </Content>



    </Container>    
  )
}