import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/_shoppingCartContext";
import { formatCurrency } from '../utilities/_formatCurrency';
import styles from '../styles/components/storeItem.scss';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);

    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }} />
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.CardTitle}>
                    <span className={styles.productName}>{name}</span>
                    <span className={styles.productPrice}>{formatCurrency(price)}</span>
                </Card.Title>
                <div className={styles.addingSection}>
                    {
                        quantity === 0 ? (
                            <Button className={styles.addToCardBtn} onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                        ) : <div className={styles.increaseBtn} style={{ gap: ".5rem" }}>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            <div>
                                <span className={styles.addedCount}>{quantity}</span> in cart
                            </div>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div className={styles.descreaseBtn} style={{ gap: ".5rem" }}>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                                    Remove
                                </Button>
                            </div>
                        </div>

                    }
                </div>
            </Card.Body>
        </Card>
    );
}