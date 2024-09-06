import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import Pagination from '@mui/material/Pagination'
import { useState } from "react"

export const MarvelApp = () => {
  const [pagina, setPagina] = useState(1)
  const {characters, pag} = useCharacters(pagina)

  const handlePageChange = (event, value) => {
    setPagina(value)
  }
  return (
    <>
      <div className='container d-flex flex-row justify-content-center alig-items-center mt-3 w-50'>

        <form className='d-flex' onSubmit={(e) => { handlePoke(categoria, e) }} >
          <input type='text' className='form-control me-2' onChange={(e) => { setCategoria(e.target.value) }} />
          <input type='submit' className='btn btn-outline-success' value='BuscarSuperHeroe' />
        </form>

      </div>
      <GridCharacters characters={characters} />
      <Pagination className='position-absolute start-50' count={pag} page={pagina} onChange={handlePageChange} />
    </>
  )
}
