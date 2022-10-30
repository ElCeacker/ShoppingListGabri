import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [ products, setProducts ] = useState([]);
  const [ productList, setProductList ] = useState([]);

  const addProductHandler = (productName, quantity, type) => {
    let dataProduct = {
      id : uuidv4().slice(0,8),
      name : productName,
      quantity : quantity,
      bought : false,
      type : type
    };
    setProducts(() => [
      ...products,
      productName,
    ]);
    setProductList(() => [
      ...productList, 
      dataProduct
    ])
  };
  
  const showDatas = (productName) => {
    productName.bought = !productName.bought;
    return productName.bought;
  };

  const clear = () => {
    // Esto es para borrar
    // setProducts(() => products.filter((product) => product !== productName))
    setProducts(() => [])
    setProductList(() => [])
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listaCompra}>Mercadona App</Text>
      <ProductInput onProductAdd={addProductHandler}/>
        <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text>Empty Shopping List</Text> 
              : productList.map((product, idx) => (
                <ListItem 
                  key={idx+product} 
                  product={product} 
                  showDatas={showDatas}
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
    marginTop: 0,
    backgroundColor: 'lightgray',
    backgroundColor: '#00675b'
  },
  listaCompra: {
    marginTop: 30,
    fontSize: 30,
    color: 'white'
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
