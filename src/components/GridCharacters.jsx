import React from 'react'

export const GridCharacters = ({characters}) => {
    return (
            <div className='d-flex flex-row row row-cols-5'>
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id}>
                            <li >{char.name}</li>
                            <img style={{width: '15rem'}} src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="img"></img>
                        </div>
                    ))
                }
            </div>
    )
}