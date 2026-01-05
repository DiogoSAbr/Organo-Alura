import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, changeColor, aoDeletar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.color, '0.6') }}>
            <input onChange={e => changeColor(time.id, e.target.value)} type='color' className='input-color' />
            <h3 style={{ borderColor: time.color }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.color} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>

    )
}

export default Time