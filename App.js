import React from 'react';
import {StyleSheet, Image, View,} from 'react-native';
import PaymentCard from "./src/components/PaymentCard/PaymentCard";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            cardInfo: {
                cvv: null,
                expiryDate: null,
                panNumber: null
            }
        };
    }

    componentDidMount() {
        // Fetching data from Mock API with delay to 1 second
        return fetch('http://www.mocky.io/v2/5b89188d300000590d338301?mocky-delay=1000ms')
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({
                    cardInfo: responseJson,
                    loading: false
                });
            })
            .catch(console.log);
    }

    render() {
        const {cvv, expiryDate, panNumber} = this.state.cardInfo;
        const {loading} = this.state;

        if (loading) {
            return (
                <View style={styles.container}>
                    <Image source={require('./src/assets/images/logo.png')}/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <PaymentCard
                    panNumber={panNumber}
                    cvv={cvv}
                    expiryDate={expiryDate}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6ab788',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
});
