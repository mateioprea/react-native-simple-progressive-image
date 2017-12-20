# React Native Simple Progressive Image

A simple Progressive Image Loader for React Native

[![Total Downloads](https://img.shields.io/npm/dt/react-native-simple-progressive-image.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-progressive-image) [![License](https://img.shields.io/npm/l/react-native-simple-progressive-image.svg?style=flat-square)](LICENSE)

[<img src="https://i.imgur.com/DvwQx7p.gif" width="350">](https://i.imgur.com/DvwQx7p.gif)

## Why ? 

Other packages use absolute positioning which can lead to malfunctions

## Install 

```
npm install --save simple-progressive-image
```

## Example

```
import ProgressiveImage from 'simple-progressive-image';

<ProgressiveImage
	placeholderSource={{uri: "https://i.imgur.com/EMaLg1x.jpg"}}
	imageSource={{uri: "https://i.imgur.com/580JwuJ.jpg"}}
	resizeMode={"contain"}
/>
```

## Properties

| Prop  | Default  | Type | Description | Required |
| :------------ |:---------------:| :---------------:| :-----| :-----|
| resizeMode | - | String | Inherited from <Image /> component | `true` | 
| placeholderImageStyle | - | Object | Styling for the placeholder | `false` |
| placeholderSource | - | Object | Placeholder image source | `true` |
| sourceImageStyle | - | Object | Styling for the actual image | `false` | 
| imageSource | - | Object | Actual image source | `true` |
