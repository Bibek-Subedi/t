import {Route,Switch} from 'react-router'

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles"
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import Workpage from './components/Workpage';
import MySkillsPage from './components/MySkillsPage';
import SoundBar from './subComponents/SoundBar';
function App() {
  return <>
  <GlobalStyle/>

  <ThemeProvider theme={lightTheme}>
    <SoundBar/>
       <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/about' component={AboutPage}></Route>
        <Route exact path='/blog' component={BlogPage}></Route>
        <Route exact path='/work' component={Workpage}></Route>
        <Route exact path='/skills' component={MySkillsPage}></Route>




       </Switch>
  </ThemeProvider>
 
    </>
    
}

export default App

