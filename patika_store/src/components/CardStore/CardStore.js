import React from 'react';
import { View, Image, Text, } from 'react-native';
import styles from "./CardStore.style"

const CardStore = ({ products }) => {

    return (

        <View style={products.id === 10 ? styles.last_container : styles.container}>
            <View style={products.id === 10 ? styles.last_product_image : ""}>
                <Image style={products.id === 10 ? styles.last_product : styles.image} source={{ uri: products.imgURL }} />
            </View>
            <View style={styles.product_info}>
                <Text style={styles.product_title}>{products.title}</Text>
                <Text style={styles.product_price}>{products.price}</Text>
                <Text style={styles.product_isStock}>{products.inStock ? "" : "STOKTA YOK"}</Text>
            </View>
        </View>

    );
};
export default CardStore;
