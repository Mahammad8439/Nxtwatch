import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${props => (props.activeDark ? '#181818' : ' #f9f9f9')};
  flex-direction: column;
  padding: 0;
  margin-top: 70px;
  margin-left: 250px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.bannerActive};
  justify-content: space-between;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  margin-right: 0;
`
export const Logo = styled.img`
  width: 180px;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const CusText = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #000;
`
export const BuyNowButton = styled.button`
  background-color: transparent;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  font-weight: 500;
  width: 100px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0;
  width: 25px;
  height: 25px;
`

export const SearchContainer = styled.div`
  width: 500px;
  display: flex;
  border: 1.5px solid ${props => (props.activeDark ? '#434143' : '#94a3b8')};
  margin: 20px 30px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const InputSearch = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  background-color: ${props => (props.activeDark ? '#181818' : '#ffff')};
  color: ${props => props.bColor};
`
export const SearchButton = styled.button`
  width: 20%;
  padding: 5px;
  outline: none;
  border: none;
  border-left: 1.5px solid
    ${props => (props.activeDark ? '#434143' : '#94a3b8')};
  background-color: ${props => (props.activeDark ? '#313031' : '#F4F4F4')};
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const VideosListContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 20px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`
export const NoVideoListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 40px;
`
export const NoVideoImg = styled.img`
  width: 50%;
  margin: 30px;
`
export const CustomHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.activeDark ? '#ffff' : '#000')};
  margin-bottom: 5px;
`
export const CustomDescribe = styled.p`
  font-size: 23px;
  color: ${props => (props.activeDark ? '#94a3b8' : '#8C888D')};
  margin-top: 0;
`
export const TryButton = styled.button`
  background-color: #4a47e0;
  border-radius: 5px;
  border: none;
  padding: 8px;
  color: #fff;
  width: 80px;
  cursor: pointer;
`
