import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from './layouts/_header';

const Home: NextPage = () => {
  return (
  <>
		<Header title="Home Page" />
		<main className={ styles.main }>
      <h1 className={ styles.title }></h1>

      <section className={ styles.mainContent}>
        <div className={ styles.card }>
          <img src="" alt="" className={ styles.cardImage } />
          <div>
            <h4 className={ styles.cardTitle }></h4>
            <p className={ styles.cardDiscription }></p>
            <button className={ styles.cardButton }>Add to Cart</button>
          </div>
        </div>
      </section>
    </main>
	</>
  );
}

export default Home
