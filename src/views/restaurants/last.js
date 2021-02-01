import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../redux-flow/reducers/restaurant/action-creators'
import styled from 'styled-components'
import data from '../../data/index'

const images = require.context('../../assets', true)

const Last = ({ pagina, item, list, likes, dislilkes, fetch }) => {
  useEffect(() => {
    fetch()
  }, [])


const myData = [].concat(data)
.sort((b,a) => a.dislikes > b.dislikes ? 1 : -1)
.map((item, i) => 
    <div key={i}> {item.dislikes} {item.name} </div>
);

const pics = myData.map((item, i) => <img key={i}> src = {images(`./img${( i + 1)}.jpg`) } </img>);

{
  return (
    <Wrapper>
      restaurantes menos votados
     
    <pics/>

      <Center> {myData} </Center>
    </Wrapper>
  )
}
}

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

const mapStateToProps = state => ({
  list: state.restaurant.list,
  likes: state.restaurant.likes
})
 
const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(fetchRestaurants())
  },
    
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Last)