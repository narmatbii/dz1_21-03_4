import './App.css'
import Header from './components/Header/Header.jsx'
import Button from './components/Button/Button.jsx'
import Footer from './components/Footer/Footer.jsx'
import Text from './components/Text/Text.jsx'
import Comment from './components/Comment/Comment.jsx'
function App() {

  return (
    <div className="App">
        <Header title={'Narmat'} />
        <Comment title={'By entering the URL of your Facebook post, we can retrieve all comments and filter duplicate names. You can pick a random winner out of all the comments by pressing the Start button.'}/>
        <Footer />
        <Text />
        <Button title={'Click me'} />
        <Button title={'Follow'} />

    </div>
  )
}

export default App
