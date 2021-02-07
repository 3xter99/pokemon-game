import React, {useState, useEffect} from "react"
import {useHistory} from 'react-router-dom'

import database from "../../service/firebase";

import s from './index.module.css'
import PokemonCard from "../../components/PokemonCard/PokemonCard";




const GamePage = () => {
    const history = useHistory()
    const handleHome = () => {
        history.push('/')
    }

    const [state, setState] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setState(snapshot.val())
        })
    }, [])

    const handleClick = (id) => {
        // setState(prevState => {
        //     return Object.entries(prevState).map(item => item.id === id ? {...item, isActive: !item.isActive} : item )
        //     }
        // )
        console.log('ghbdtn')
        setState(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }
    return (
        <>
            <div className={s.container}>
                {
                   Object.entries(state).map(([key, {name, img, type, values, id, isActive}])=> <PokemonCard
                            key={key}
                            name={name}
                            img={img}
                            type={type}
                            values={values}
                            id={id}
                            handleClick={handleClick}
                            isActive={isActive}
                        />
                    )
                }

            </div>
            <button className={s.button} onClick={handleHome}>Go Home</button>

        </>
    )
}

export default GamePage
