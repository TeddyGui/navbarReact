import React from 'react'
 

function Navmenu({x}) {
    return (
        <ul className="list">
            {x.map(el => el.drop ?
                <li className="titre">{el.titre}
                    <ul className="dropdown">
                        { el.drop.map(el =>
                                <li>{el}</li>
                            )}
                    </ul>

                </li> : <li className="titre">{el.titre}</li>
            )}
        </ul>
    )
}

export default Navmenu;
