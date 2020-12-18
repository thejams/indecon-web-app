import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const MenuOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  width: 30%;
  border-radius: 3px;
  padding: 20px 10px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-weight: bold;
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
`

export const Subtitle = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
  text-align: justify;
`