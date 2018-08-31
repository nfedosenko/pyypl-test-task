import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, ImageBackground, Text, Dimensions} from 'react-native';
import {ResponsiveComponent} from "react-native-responsive-ui";
import {responsive} from "react-native-responsive-ui";
import styles from './PaymentCard.styles';
import imageMapper from '../../helpers/imageMapper';
import isNthNumber from '../../helpers/isNthNumber';

class PaymentCard extends ResponsiveComponent {
    static propTypes = {
        panNumber: PropTypes.string.isRequired,
        expiryDate: PropTypes.string.isRequired,
        cvv: PropTypes.string.isRequired
    };

    /**
     *
     * @param {String} str
     * @param {String} type Can be CARD or CVV
     * @returns {any[]}
     */
    convertStringCharsToImages = (str, type) => {
        const strChars = str.split("");
        return strChars.map((char, index) => {
            if (type === 'CARD') {
                return <Image
                    style={[styles.digit, {marginRight: isNthNumber(4, index + 1) && strChars.length !== (index + 1) ? 20 : 0}]}
                    source={imageMapper[char]}
                    resizeMode="contain"
                    key={index}/>;
            } else if (type === 'CVV') {
                return <Image
                    style={styles.cvvDigit}
                    source={imageMapper[char]}
                    resizeMode="contain"
                    key={index}/>;
            }
        });
    };

    render() {
        const {cvv, panNumber, expiryDate} = this.props;

        return (
            <ImageBackground
                style={[styles.cardContainer, {width: Dimensions.get('window').width}]}
                resizeMode="contain"
                source={require('../../assets/images/Payment-card-background.png')}>
                <View style={styles.numberContainer}>
                    {this.convertStringCharsToImages(panNumber, 'CARD')}
                </View>
                <View style={[styles.expiryCvvContainer, {width: Dimensions.get('window').width}]}>
                    <View>
                        <Text style={styles.infoText}>
                            GOOD {"\n"} THRU
                        </Text>
                    </View>
                    <View style={styles.expiryDate}>
                        {this.convertStringCharsToImages(expiryDate.substr(0, expiryDate.indexOf('/')), 'CVV')}
                        <Text style={styles.slash}>/</Text>
                        {this.convertStringCharsToImages(expiryDate.substr(expiryDate.indexOf('/') + 1, expiryDate.length), 'CVV')}
                    </View>
                    <View>
                        <Text style={styles.infoText}>
                            CVV {cvv}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

// Responsive decorator updates dimensions on Orientation change etc
export default responsive(PaymentCard);