import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const ProductInput = ({ onProductAdd }) => {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');

    const types = [
        {label: 'Fruit', value: 'Fruit'},
        {label: 'Vegetable', value: 'Vegetable'},
        {label: 'Bakery', value: 'Bakery'},
        {label: 'Fish', value: 'Fish'},
        {label: 'Meat', value: 'Meat'},
    ]

    const changeTextHandler = (value) => {
        setProductName(value);
    }
    const changeQuantityHandler = (value) => {
        setQuantity(value);
    }
    const changeTypeHandler = (value) => {
        setType(value)
    }
    
    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        let quantityadd = quantity;
        if (sanitizedName !== '' && type !== '') {
            if(quantity === '') {
                quantityadd  = 1
            }
            onProductAdd(sanitizedName, parseInt(quantityadd), type);
        }
        setQuantity('');
        setProductName('');
        setType('');
    };

    return (
        <View style={styles.productInput}>
            <View>
                <TextInput style={styles.productName}
                    placeholder='Product Name'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName}/>
                <Dropdown 
                    data={types} 
                    style={styles.typesOfFood}
                    labelField="label" 
                    valueField="value" 
                    value={types.label} 
                    placeholder={'Type'}
                    onChange={changeTypeHandler}/>
            </View>
            <View>
                <TextInput keyboardType='numeric' placeholder='Quantity' onChangeText={changeQuantityHandler} value={quantity}/>
            <Button
                style={styles.addButton}
                title="Add"
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
    typesOfFood: {
        width: 125
    },
});

export default ProductInput;