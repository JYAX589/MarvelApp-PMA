import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '49e9753011cdd3aaf9849c2d21e5c943fc4e6868'
const public_api_key = 'd51a47ea19fefa0e109b0e1377142863'
const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()

export const reqCharacter = async (pagina = 1, limite = 20) => {
    const offset = (pagina - 1) * limite
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`)
    const { data } = await resp.json()
    console.log(data)
    return data
}