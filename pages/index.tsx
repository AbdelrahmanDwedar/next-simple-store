import styles from "../styles/Home.module.scss";
import Header from "./layouts/_header";
import { Button, Col, Row } from "react-bootstrap";
import storeItems from "../public/data/items.json";
import { StoreItem } from "./Components/_storeItem";
import { ShoppingCartProvider } from "./context/_shoppingCartContext";

function Home() {
	return (
		<ShoppingCartProvider>
			<Header title="Home Page" />
			<main className={styles.main}>
				<h1 className={styles.title}>Shopping List</h1>

				<section className={styles.mainContent}>
					<Row md={2} xs={1} lg={3} className="g-3">
						{storeItems.map((item) => (
							<Col key={item.id}>
								<StoreItem {...item} />
							</Col>
						))}
					</Row>
				</section>
			</main>
		</ShoppingCartProvider>
	);
}

export default Home;
