import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';
    import { useState } from 'react';

const ListItem = ({ product, showDatas }) => {

    const [ reloadBought, setReloadBought ] = useState(product);

    const imagenTypes = (food) => {
        switch(food) {
            case 'Fruit':
                return require('../assets/frutas.png')
            case 'Vegetable':
                return require('../assets/fruits-and-vegetables.png')
            case 'Bakery':
                return require('../assets/un-pan.png')
            case 'Fish':
                return require('../assets/pescado.png')
            case 'Meat':
                return require('../assets/carne-de-vaca.png')
        }
    };
    
    const actualizarBought = (product) => {
        setReloadBought(showDatas(product));
        return product.bought
    }

    return (
        <>  
        <Pressable style={{flexDirection: 'row'}} onPress={() => actualizarBought(product)}>
            <View style={product.bought ? styles.itemSelected : styles.listItem}>
                <Image style={styles.productImage} source={imagenTypes(product.type.label)} />
                <Text style={styles.product}>{product.quantity} X {product.name}</Text>
            </View> 
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#76d275',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    productImage: {
        width: 50,
        height: 50
    },
    product: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    },
    itemSelected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#003300',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
    }
    
});

export default ListItem