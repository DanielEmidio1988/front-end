import CardUser from "../../components/Cards/CardUser"
import LateralMenu from "../../components/LateralMenu/LateralMenu"
import { ContainerPages } from "../../constants/StylePages"


function HomePage(){
    return(
        <ContainerPages>
            <div className="box-menu-lateral">
                <LateralMenu/>
            </div>
            <div className="box-main-menu">
                <div className="box-title-page">
                    <img src={''} alt="Foto Usuario"/>
                    <h1>Aulas</h1>
                </div>
                <div className="box-input-data">
                    <input placeholder="Buscar aula"/>
                </div>
                <div className="box-data-page">
                    <CardUser/>
                </div>
            </div>
        
        </ContainerPages>
    )
}

export default HomePage