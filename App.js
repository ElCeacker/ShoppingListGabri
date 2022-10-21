import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import { disableErrorHandling } from 'expo';

export default function App() {

  const [ products, setProducts ] = useState([]);

  types = [
    'Fruit',
    'Vegetable',
    'Bakery',
    'Fish',
    'Meat'
  ]

  let dataProduct ={
    id : uuidv4().slice(0,8),
    name : products.productName,
    quantity : 1,
    bought : false,
    type : types
  }

  const addProductHandler = (productName) => {
    setProducts(() => [
      ...products,
      productName,
    ]);
    dataProduct.name = productName;
  };

  const showDatas = (productName, id) => {
    // Esto es para borrar
    // setProducts(() => products.filter((product) => product !== productName))
    dataProduct.name = productName;
    dataProduct.bought = !dataProduct.bought;
    console.log(dataProduct);
  };

  const clear = () => {
    setProducts(() => [])
  };

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
                  clear={clear}
                  id = {dataProduct.id}
                  />
              ))
          }
        </View>
        </ScrollView>
        <View style={styles.buttonClear}>
          {products.length === 0 ? <Button style={styles.buttonClear} title="Clear" onPress={clear} disabled={true}/> : <Button style={styles.buttonClear} title="Clear" onPress={clear}/>}
        </View>
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
  },
  buttonClear: {
    marginTop: 15,
    marginBottom: 30,
  }
});
