import { useEffect, useState } from 'react';
import './Pokemon.css'

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null)

    async function getPokemon() {
        const id = location.pathname;
        let result = await fetch("/api" + id)
        let dados = await result.json();
        console.log(dados);
        setPokemon(dados);
    }
    useEffect(() => {
        getPokemon();
    }, [])

    return <div id="pokedex">
        <div id="left">
            <div id="logo"></div>
            <div id="bg_curve1_left"></div>
            <div id="bg_curve2_left"></div>
            <div id="curve1_left">
                <div id="buttonGlass">
                    <div id="reflect"></div>
                </div>
                <div id="miniButtonGlass1"></div>
                <div id="miniButtonGlass2"></div>
                <div id="miniButtonGlass3"></div>
            </div>
            <div id="curve2_left">
                <div id="junction">
                    <div id="junction1"></div>
                    <div id="junction2"></div>
                </div>
            </div>
            <div id="screen">
                <div id="topPicture">
                    <div id="buttontopPicture1"></div>
                    <div id="buttontopPicture2"></div>
                </div>
                <div id="picture">
                    <img id="pokemonImage" title="Click e altere imagem" height="170" src={pokemon?.sprites.front_default} />
                </div>
                <div id="buttonbottomPicture"></div>
                <div id="speakers">
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                </div>
            </div>
            <div id="bigbluebutton"></div>
            <div id="barbutton1"></div>
            <div id="barbutton2"></div>
            <div id="cross">
                <div id="leftcross">
                    <div id="leftT"></div>
                </div>
                <div id="topcross">
                    <div id="upT"></div>
                </div>
                <div id="rightcross">
                    <div id="rightT"></div>
                </div>
                <div id="midcross">
                    <div id="midCircle"></div>
                </div>
                <div id="botcross">
                    <div id="downT"></div>
                </div>
            </div>
        </div>
        <div id="right">
            <div id="stats">
                <strong>Name:</strong> <span id="pokemonName"> {pokemon?.name}</span><br />
                <strong>Type:</strong> <span id="pokemonTypes">{pokemon?.types.map(t => t.type.name).join(', ')}</span><br />
                <strong>Weight:</strong> <span id="pokemonWeight">{pokemon?.weight}</span>lb<br />
                <strong>Skill:</strong> <span id="pokemonSkills">{pokemon?.abilities.map(ab => ab.ability.name).join(', ')}</span>...
            </div>
        </div>
    </div>
}