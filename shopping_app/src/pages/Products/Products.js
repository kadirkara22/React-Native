import React from 'react';
import { FlatList, SafeAreaView, View, ActivityIndicator} from 'react-native';
import Config from "react-native-config"
import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch"
const Products = () => {
   const {data,error,loading}=useFetch(Config.API_URL)

    const renderProduct = ({ item }) => <ProductCard product={item} />

if(loading){
    return <ActivityIndicator size="large" /> 
}
if(error){
    return <Text>{error}</Text> 
}
    return (
        <SafeAreaView >
            <View>
                <FlatList
                    data={data}
                    renderItem={renderProduct}
                />
            </View>

        </SafeAreaView>
    );
};


export default Products;