import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GET_AVANCAR, loadGostei } from '../../../redux-flow/reducers/restaurant/actions'
import data from '../../../data/index'
import styled from 'styled-components'

const Nao_gostei = ({ pagina, loadGostei }) => {
  useEffect(() => {
  }, []) //quando eu quero que o codigo execute

  return (
  <> 
    <ButtonContainer  onClick={() => { loadGostei({ type: GET_AVANCAR, payload: pagina })
    {data[pagina]["dislikes"] = data[pagina]["dislikes"] + 1}
}}>     
    Não Gostei!  
    </ButtonContainer>
  </>
  )
}

const ButtonContainer = styled.button`
  background-color: red;
  color: white;
  padding: 25px 20px;

  outline: 0;
  cursor: pointer;
  margin: 20 px 20px;

  
`;

  const mapStateToProps = state => ({
    pagina: state.gosteiReducer.pagina
  })
  
function mapDispatchToProps(dispatch) {
  return{
    loadGostei: () => dispatch( loadGostei() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nao_gostei)
