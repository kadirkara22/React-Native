import React from 'react';
import { FlatList, SafeAreaView, View} from 'react-native';
import Config from "react-native-config"
import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading"
import Error from "../../components/Error"
const Products = ({navigation}) => {
   const {data,error,loading}=useFetch(Config.API_URL)

const handleProductSelect=(id)=>{
navigation.navigate("DetailPage",{id})
}
const renderProduct = ({ item }) => (
<ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
)
if(loading){
    return <Loading /> 
}
if(error){
    return <Error/> 
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