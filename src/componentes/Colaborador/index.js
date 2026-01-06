import { MdDeleteForever, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, onFavorite }) => {
    function favorite() {
        onFavorite(colaborador.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
        // fill: 
    }

    return (<div className="colaborador">
        <MdDeleteForever
            size={25}
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="favoritar">
            {colaborador.fav ?
                <MdFavorite
                    {...propsFavorite} color='#ff0000'
                />
                : <MdFavoriteBorder
                    {...propsFavorite}
                />
            }
        </div>
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