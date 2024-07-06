import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
  margin-left: 250px;
  margin-top: 70px;
  background-color: ${props => (props.activeDark ? '#0F0F0F' : '#F9F9F9')};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`

export const GamingHeadingContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.activeDark ? '#181818' : '#F1F1F1')};
  display: flex;
  align-items: center;
  padding: 30px;
`
export const GamingIconContainer = styled.div`
  width: 80px;
  padding: 20px;
  margin-right: 20px;
  background-color: ${props => (props.activeDark ? '#0F0F0F' : '#E1E9F0')};
  border-radius: 50px;
`
export const GamingMainHeading = styled.h1`
  color: ${props => (props.activeDark ? '#ffff' : '#0F0F0F')};
  font-size: 30px;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const GamingListContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-left: 0;
  flex-wrap: wrap;
`
