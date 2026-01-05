import { MdDeleteForever } from "react-icons/md";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <MdDeleteForever
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
            size={25}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador