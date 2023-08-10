import  Programador from '../../assets/programador.svg'
import Balon from '../../assets/svg/Balon'
import './style.css'

function Header(){


    return(
        <div className='fd'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <h1>Ciro Jean Pierre Candiotti Ramirez</h1>
                        <h2 className='Header-h2'>Front End Developer</h2>

                        <button className='btn btn-header'>Contáctame</button>
                    </div>

                    <div className='col-md-4 col-sm-12 balon'>
                        <Balon />
                        <div className='shadow'></div>
                    </div>

            



                    {/* <div className="col-md-4 col-sm-12 programador">
                        <img src={Programador} />
                    </div> */}
                </div>
            </div>
        </div>
    )


}

export default Header;