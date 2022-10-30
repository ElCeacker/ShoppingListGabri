import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const ProductInput = ({ onProductAdd }) => {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value);
    }
    const changeQuantityHandler = (value) => {
        setQuantity(value);
    }
    
    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        let quantityadd = quantity;
        console.log(sanitizedName);
        if (sanitizedName !== '') {
            if(quantity === '') {
                quantityadd = 1
            }
            onProductAdd(sanitizedName, parseInt(quantityadd));
        }
        setQuantity('');
        setProductName('');
    }

    const types = [
        'Fruit',
        'Vegetable',
        'Bakery',
        'Fish',
        'Meat',
    ]

    return (
        <View style={styles.productInput}>
            <View>
                <TextInput style={styles.productName}
                    placeholder='Producto'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName}/>
                <SelectDropdown style={styles.typesOfFood} data={types}/>
            </View>
            <View>
                <TextInput keyboardType='numeric' placeholder='Quantity' onChangeText={changeQuantityHandler} value={quantity}/>
            <Button
                    style={styles.addButton}
                    title="Añadir"
                    onPress={addProductHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "white",
        width: '80%',
        height: 80,
        borderRadius: 5,
        padding: 10,
        marginTop: 30
    },
    productName: {
        color: 'black',
    },
    addButton: {
        flex: 1,
        paddingTop: 100
    },
    // quantityInput: {
    //     flexDirection: 'column',
    //     flex: 4,
    //     color: 'white'
    // }

    typesOfFood: {
        width: 10
    }
});

export default ProductInput;