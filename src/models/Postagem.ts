import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: String;
    texto: String;
    data: String;
    tema?: Tema | null


}

export default Postagem;