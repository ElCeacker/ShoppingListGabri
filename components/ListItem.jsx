import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';

const ListItem = ({ productName, showDatas }) => {

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
    }
    
    return (
        <>  
        {  productName.bought ?
            <Pressable style={{flexDirection: 'row'}} onPress={() => showDatas(productName)}>
                <View style={styles.itemSelected}>
                    <Image style={styles.productImage} source={imagenTypes(productName.type.label)} />
                    <Text style={styles.productName}>{productName.quantity} X {productName.name}</Text>
                </View> 
            </Pressable>
            :
            <Pressable style={{flexDirection: 'row'}} onPress={() => showDatas(productName)}>
                <View style={styles.listItem}>
                    <Image style={styles.productImage} source={imagenTypes(productName.type.label)} />
                    <Text style={styles.productName}>{productName.quantity} X {productName.name}</Text>
                </View> 
            </Pressable>
        }
        </>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    productImage: {
        width: 50,
        height: 50
    },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    },
    itemSelected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
    }
    
});

export default ListItem