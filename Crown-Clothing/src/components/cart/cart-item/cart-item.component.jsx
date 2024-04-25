import styles from './style.module.scss';

const CartItem = ({cartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
        <div className={styles.cartItemContainer}>
            <img src={imageUrl} alt={`${name}`} />
            <div className={styles.itemDetails}>
                <span className={styles.name}>{name}</span>
                <span>{quantity} X ${price}</span>
            </div>
        </div>
    )
};

export default CartItem;