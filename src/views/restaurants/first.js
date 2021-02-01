import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../redux-flow/reducers/restaurant/action-creators'
import styled from 'styled-components'
import data from '../../data/index'


const First = ({ pagina, item, list, likes, fetch }) => {
  useEffect(() => {
    fetch()
  }, [])

  const myData = [].concat(data)
  .sort((b,a) => a.likes > b.likes ? 1 : -1)
  .map((item, i) => 
      <div key={i}> {item.likes} {item.name} </div>
  );

{
return (
  <Wrapper>
    restaurantes mais votados
    <Center> {myData} </Center>
  </Wrapper>
  )
  }
}

const Restaurant = styled.div`
  width: 100%;
  font-size: 18px;
`
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
{/* concede acesso ás variáveis 'list' e 'count' (que estao em store) */}
const mapStateToProps = state => ({
  list: state.restaurant.list,
  likes: state.restaurant.likes
})
 
const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchRestaurants())
  },
    
})

const Center = styled.div`
position: relative;
  max-width: 100%;

  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `


{/* connect permite que eu pegue algumas propriedades da store*/}
export default connect(mapStateToProps, mapDispatchToProps)(First)