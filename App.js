import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [ products, setProducts ] = useState([]);

  types = [
    'Fruit',
    'Vegetable',
    'Bakery',
    'Fish',
    'Meat'
  ]
  // console.log(uuidv4());
  

  const addProductHandler = (productName) => {
    setProducts(() => [
      ...products,
      productName,
    ]);
    
    let product ={
      id : uuidv4().slice(0,8),
      name : productName,
      quantity : 1,
      bought : false,
      type : types
    }
    console.log(product);
  }

  const showDatas = (productName) => {
    // Esto es para borrar
    // setProducts(() => products.filter((product) => product !== productName));
    console.log(product[0]);
  }

  

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>

        <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text>Aún no hay productos</Text> 
              : products.map((product, idx) => (
                <ListItem 
                  key={idx+product} 
                  productName={product} 
                  showDatas={showDatas}
                  />
              ))
          }
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 30,
    backgroundColor: 'lightgray',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  productScroll: {
    width: '100%'
  }
});
