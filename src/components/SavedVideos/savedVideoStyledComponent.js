import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.activeDark ? '#0f0f0f' : '#f9f9f9')};
  margin-left: 250px;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`
export const SavedVideoHeadingCon = styled.div`
  background-color: ${props => (props.activeDark ? '#181818' : '#ebebeb')};
  margin-bottom: 20px;
  padding: 30px 70px;
  display: flex;
  align-items: center;
`
export const SavedIconContainer = styled.div`
  background-color: ${props =>
    props.activeDark ? 'rgb(15,15,15)' : '#E1E8F0'};
  padding: 10px;
  border-radius: 100px;
  margin-right: 20px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.activeDark ? '#fff' : '#000')};
`

export const SavedVideoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
`
export const NoSavedVideoImg = styled.img`
  width: 60%;
  margin-bottom: 20px;
  align-self: center;
`
export const Describe = styled.p`
  font-size: 15px;
  color: ${props => (props.activeDark ? '#fff' : '#000')};
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
`
