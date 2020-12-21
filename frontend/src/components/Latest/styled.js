import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ElementContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: 40%; 
  padding: 20px; 
  border: 1px solid #e9e9e9; 
  margin: 10px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
`

export const SubTitle = styled.div`
  color: #929292; 
  font-size: 16px;
`