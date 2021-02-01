import React, { useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import paths from 'constants/paths'
import Restaurants from 'views/restaurants'
import First from 'views/restaurants/first'
import Last from 'views/restaurants/last'


const menu = [
  {
    page: '',
    title: 'Todos',
  },
  {
    page: 'first',
    title: 'Mais Votados',
  },
  {
    page: 'last',
    title: 'Menos Votados',
  },
]


function ToggleGroup(){
    const [active, setActive] = useState(menu);
  return (
    <Steps >
      {menu.map((type) => (

          <Step active={active === type.page} onClick={() => setActive(type.page)} to={type.page}>
            {type.title}
          </Step>

      ))}
    </Steps>
  );}

const View = () => (
  
  <Container>

    <Header>Almoço da Firrrrrrrmaaaa!</Header>

    <ToggleGroup/>

    <Switch>
      <Route
        exact
        path={paths.restaurants.root}
        render={ () => <Restaurants /> }
      />
      <Route
        exact
        path={paths.restaurants.first}
        render={ () => <First /> }
      />
      <Route
        exact
        path={paths.restaurants.last}
        render={ () => <Last /> }
      />
    </Switch>
  </Container>
)

const Container = styled.div`
  position: relative;
  background: orange;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  
`

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
`

const Steps = styled.ul`
  display: flex;
  justify-content: space-evenly;
  text-decoration: 'none';
  
  position: relative;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
`


const Step = styled(Link)`
padding: 20px;
color: white;
text-decoration: none;
  opacity: 0.5;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 

    `}
  `;
  

export default View