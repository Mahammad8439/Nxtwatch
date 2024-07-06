import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import ProtectRoute from './components/ProtectRoute'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

import HeaderContext from './context/HeaderContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activePage: 'Home', savedVideoList: []}

  onToggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  onChangeActivePage = item => {
    this.setState({activePage: item})
  }

  addSavedVideo = item => {
    const {savedVideoList} = this.state

    const index = savedVideoList.findIndex(each => each.id === item.id)

    if (index === -1) {
      this.setState({savedVideoList: [...savedVideoList, item]})
    } else {
      savedVideoList.splice(index, 1)
      this.setState({savedVideoList})
    }
  }

  render() {
    const {isDark, activePage, savedVideoList} = this.state

    console.log(savedVideoList)

    return (
      <HeaderContext.Provider
        value={{
          isDark,
          activePage,
          savedVideoList,
          onToggleTheme: this.onToggleTheme,
          onChangeActivePage: this.onChangeActivePage,
          addSavedVideo: this.addSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectRoute exact path="/" component={Home} />
          <ProtectRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectRoute exact path="/trending" component={Trending} />
          <ProtectRoute exact path="/gaming" component={Gaming} />
        </Switch>
      </HeaderContext.Provider>
    )
  }
}

export default App
