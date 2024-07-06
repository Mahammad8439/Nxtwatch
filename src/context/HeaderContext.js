import React from 'react'

const HeaderContext = React.createContext({
  isDark: true,
  ActivePage: 'Home',
  savedVideoList: [],
  onToggleTheme: () => {},
  onChangeActivePage: () => {},
  addSavedVideo: () => {},
})

export default HeaderContext
