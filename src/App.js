import Header from './Components/Header/Header'
import TextBox from './Components/TextBox/TextBox';
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container} >
        <TextBox buttons={['copy']}/>
        <TextBox buttons={['copy','play']}/>
      </div>
    </div>
  );
}

export default App;
