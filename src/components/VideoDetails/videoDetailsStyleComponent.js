import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const VideoDetailsContainer = styled.div`
  min-height: 130vh;
  margin-left: 250px;
  margin-top: 65px;
  background-color: ${props => (props.activeDark ? '#0f0f0f' : ' #f9f9f9')};
  padding: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
  overflow-y: auto;
  padding-bottom: 50px;
`
export const LoaderCon = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const VideoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: '100%';
`
export const VideoTitle = styled.h1`
  font-size: 20px;
  color: ${props => (props.activeDark ? '#ffff' : '#1e293b')};
  font-family: 'Roboto';
`
export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.activeDark ? ' #475569' : '#64748b')};
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  width: ${props => props.widthCo};
  align-items: center;
`
export const CustomButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export const Text = styled.span`
  font-size: 16px;
  margin-left: 7px;
  margin-right: 10px;
  color: ${props => (props.isLiked ? '#4f46e5' : ' #64748b')};
`
export const Views = styled.span`
  font-size: 16px;
  margin-right: 10px;
  color: ${props => (props.isLiked ? '#4f46e5' : ' #64748b')};
`
export const DividerLine = styled.hr`
  border: 1.3px solid #64748b;
  width: 100%;
  margin-top: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`
export const ChannelProfile = styled.img`
  width: 30px;
  margin-right: 8px;
  margin-top: 12px;
`
export const VideoTitleText = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  color: ${props => (props.activeDark ? '#ffff' : '#475569')};
`
export const ChannelName = styled.p`
  font-size: 8px;
  margin-right: 5px;
  margin-top: 0;
  color: ${props => (props.activeDark ? '#ffff' : ' #606060')};
`
export const ChannelDive2 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
`
