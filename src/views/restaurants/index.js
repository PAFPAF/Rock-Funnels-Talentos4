import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../redux-flow/reducers/restaurant/action-creators'
import Gostei from './buttons/gostei'
import Nao_gostei from './buttons/nao_gostei'
import Passo from './buttons/passo'
import data from '../../data'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'

  const View = ({ pagina, fetch, count, name }) => {
    useEffect(() => {
      fetch()
    }, [])

const images = require.context('../../assets', true)
let dynImage = (pagina == count ) ? images(`./img10.jpg`) : images(`./img${( pagina + 1)}.jpg`)

return(
 (pagina  == count ) ?
<div> Acabaram as opções </div>
  :  
<div>
      <Wrapper>

        <img  src= { dynImage }  />

      </Wrapper>  

    <Restaurant> { data[pagina]["name"] } </Restaurant> 

      <Button_Wrap>
        <Gostei/>
        <Passo/>
        <Nao_gostei/>
      </Button_Wrap>      
</div>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const Button_Wrap = styled.div`


  position: relative;
  max-width: 100%;

  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  `

const Restaurant = styled.div`
  color: white;
  width: 100%;
  font-size: 25px;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

{/* concede acesso ás variáveis 'list' e 'count' (que estao em store) */}
const mapStateToProps = state => ({
  list: state.restaurant.list,
  pagina: state.gosteiReducer.pagina,
  count: state.restaurant.count,
  name: state.restaurant.name
})

/* dispatch dispara as ações. Ordem dos acontecimentos: Dispatch -> Action creator -> Reducer (onde tem a condicional indicando qual ação eu quero executar) */
const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchRestaurants())
  },
    
})
 

{/* connect permite que eu pegue algumas propriedades da store*/}
export default connect(mapStateToProps, mapDispatchToProps)(View)