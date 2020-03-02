import React, { useState, useEffect } from 'react';
import '../players/players.scss';


function Players(props) {

    const [name, setName] = useState(props.name || 'your name');

    return (
        <>
            <div className="playerWrapper">
                <input className="hidden" type="text"
                    placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                    onMouseLeave={(e) => {
                        const childClass = '.players.i' + name.replace(/\s+/g, "").toLowerCase();
                        if (e.target.value !== '') {
                            document.querySelector(childClass).previousSibling.style.visibility = 'hidden';
                        } else {
                            document.querySelector(childClass).previousSibling.focus();
                        }
                    }}
                    onKeyPress={(e) => {
                        if (e.target.value !== '') {
                            if (e.which === 13) {
                                const childClass = '.players.i' + name.replace(/\s+/g, "").toLowerCase();
                                document.querySelector(childClass).previousSibling.style.visibility = 'hidden';
                                document.querySelector(childClass).previousSibling.value = ''
                            }
                        }
                    }}
                />
                <p
                    onClick={() => {
                        const childClass = '.players.i' + name.replace(/\s+/g, "").toLowerCase();
                        document.querySelector(childClass).previousSibling.style.visibility = 'visible';
                        document.querySelector(childClass).previousSibling.focus();
                    }} className={'players i' + name.replace(/\s+/g, "").toLowerCase()}>{name}</p>
            </div>
        </>
    );
}



export default Players;