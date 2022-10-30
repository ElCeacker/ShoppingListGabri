import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';

const ListItem = ({ productName, showDatas }) => {
    return (
        <>
            {/* { showDatas ? */}
                <Pressable style={{flexDirection: 'row'}} onPress={() => showDatas(productName)}>
                    <View style={styles.listItem}>
                        <Image style={styles.productImage} source={require('../assets/bigIcon.png')} />
                        <Text style={styles.productName}>{productName.quantity}X {productName.name}</Text>
                    </View> 
                </Pressable>
                {/* :
                <View style={styles.gris}>
                    <Pressable style={{flexDirection: 'row'}} onPress={() => showDatas(productName)}>
                        <Image style={styles.productImage} source={require('../assets/bigIcon.png')} />
                    </Pressable>
                <Text style={styles.productName}>{productName}</Text>
            </View>
            } */}
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
    gris: {
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