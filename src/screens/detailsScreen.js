import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'DetailsScreenTitle',
    };



    render() {
        const navigation = this.props.navigation;
        const product = navigation.getParam('product', 'NO-PRODUCT');
        console.log("dataislPage.product: ", product);

        return (
            <View>
                <Text>
                    Detalhes do produto:
                    Nome: {product.name}
                </Text>
                <Button
                    title="print stack"
                    onPress={() => console.log('detailsScreen.nav.state: ', this.props.navigation.state)}
                />
            </View>
        );
    }
}