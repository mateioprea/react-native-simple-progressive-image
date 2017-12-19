import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

import PropTypes from 'prop-types';


const propTypes = {
    resizeMode: PropTypes.string.isRequired,
    placeholderImageStyle: PropTypes.object,
    placeholderSource: PropTypes.object.isRequired,
    sourceImageStyle: PropTypes.object,
    imageSource: PropTypes.object.isRequired
};

class ProgressiveImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailLoaded: false,
            sourceLoaded: false
        }
    }

    render() {

        const {
            resizeMode,
            placeholderImageStyle,
            placeholderSource,
            sourceImageStyle,
            imageSource
        } = this.props;

        const {thumbnailLoaded, sourceLoaded} = this.state;

        return (
            <View style={styles.container}>
                {!sourceLoaded &&
                    <Image
                        blurRadius={5}
                        resizeMode={resizeMode}
                        style={this.state.sourceLoaded ? {display: 'none'} : [styles.placeholderImage, placeholderImageStyle]}
                        onLoad={() => this.setState({thumbnailLoaded: true})}
                        source={placeholderSource}
                    />
                }
                {thumbnailLoaded &&
                    <Image
                        resizeMode={resizeMode}
                        style={[styles.sourceImage, sourceImageStyle]}
                        source={imageSource}
                        onLoad={() => {
                            this.setState({sourceLoaded: true})
                        }}

                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    placeholderImage: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    sourceImage: {
        display: 'flex',
        width: '100%',
        height: '100%'
    }
});

ProgressiveImage.propTypes = propTypes;

module.exports = ProgressiveImage;
