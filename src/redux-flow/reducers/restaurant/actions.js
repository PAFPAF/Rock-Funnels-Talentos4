export const GET_RESTAURANTS = 'restaurant:GET_RESTAURANTS'

export const GET_AVANCAR = 'GET_AVANCAR'

/*
export function getAvancar() => {
    return{
        type: GET_AVANCAR,
        page + 1
    }
}
*/
export function loadGostei(pagina) {
    return {
        type: GET_AVANCAR,
        payload: pagina
    }
}