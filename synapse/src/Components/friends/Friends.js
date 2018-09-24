import '../../App.css';
import React, { Component } from 'react';
import '../../App';
import '../nav/FriendsLinks';
import '../nav/Nav';


const amigos = [{nombre: 'Alicia Bárcena', foto: "https://image.flaticon.com/icons/svg/53/53129.svg"
}, {nombre: 'Héctor Abad', foto: 'https://image.flaticon.com/icons/svg/53/53060.svg'
}, {nombre: 'Alberto Acosta', foto: 'https://image.flaticon.com/icons/svg/53/53104.svg'
}, {nombre: 'Lourdes Casanova', foto: 'https://image.flaticon.com/icons/svg/53/53101.svg'
}, {nombre: 'Manuel Alcántara', foto: 'https://image.flaticon.com/icons/svg/53/53106.svg'
}, {nombre: 'Christina Figueres', foto: 'https://image.flaticon.com/icons/svg/53/53176.svg'
}, {nombre: 'Jorge Mario', foto: 'https://image.flaticon.com/icons/svg/53/53157.svg'
}, {nombre: 'Daniel Barenboim', foto: 'https://image.flaticon.com/icons/svg/53/53174.svg'
}, {nombre: 'Martín Caparrós', foto: 'https://image.flaticon.com/icons/svg/53/53172.svg'
}, {nombre: 'Néstor García', foto: 'https://image.flaticon.com/icons/svg/53/53083.svg'
}, {nombre: 'Fernando Carrión', foto: 'https://image.flaticon.com/icons/svg/53/53166.svg'
}, {nombre: 'Rebeca Grynspan', foto: 'https://image.flaticon.com/icons/svg/53/53058.svg'
}];

class Friends extends Component {
    render(){
        return(
            <div className="">
                {amigos.map((e, i) => {
                    let num = i + 1; // esto genera el id de las fotos de los amigos
                    return (
                        <div className="card z-depth-0" key={num}>
                            <p className="friendName"> 
                            <img className="foto" src={e.foto} width="100px" height="100px" alt={e.nombre}/>
                            {`${e.nombre}`}
                          </p>
                        </div>
                    )
                })}
            </div>
        )
    }
  }
  export default Friends;
