import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from './layouts/_header';
import { Button, Col, Row } from "react-bootstrap";
import storeItems from '../public/data/items.json';
import { StoreItem } from './Components/_storeItem';

const Home: NextPage = () => {
  return (
    <>
      <Header title="Home Page" />
      <main className={styles.main}>
        <h1 className={styles.title}>Shopping List</h1>

        <section className={styles.mainContent}>
          <h1>Store</h1>
          <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </section>
      </main>
    </>
  );
}

export default Home
