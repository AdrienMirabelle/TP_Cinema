import '../style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Explication() {
    return (
        <div className='explication'>
            <h1>Explication du projet</h1>
            <p className="random" style={{ color: "white" }}>
                Ce projet a pour but de présenter les grands classiques de l'animation japonaise. Il permet d'accéder aux synopsis de ces derniers tout en donnant la possibilité de supprimer un film déjà présent, d'en créer un ou de mettre à jour un film déjà existant.
            </p>
        </div>
    );
}
export default Explication;