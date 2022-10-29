import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
// import ModalSelector from 'react-native-modal-selector'

const ProductInput = ({ onProductAdd }) => {

    const [productName, setProductName] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value);
    }

    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        if (sanitizedName !== '') {
            onProductAdd(sanitizedName);
        }
        setProductName('');
    }

    // const types = [
    //     { label: 1, value: 'Fruit' },
    //     { label: 2, value: 'Vegetable' },
    //     { label: 3, value: 'Bakery' },
    //     { label: 4, value: 'Fish' },
    //     { label: 5, value: 'Meat' },
    // ]

    return (
        <View style={styles.productInput}>
            <View>
                <TextInput style={styles.productName}
                    placeholder='Producto'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName}/>
                <TextInput placeholder='Type'/>
                
            </View>
            <View>
                <TextInput keyboardType='numeric' placeholder='Quantity'/>
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
});

export default ProductInput;