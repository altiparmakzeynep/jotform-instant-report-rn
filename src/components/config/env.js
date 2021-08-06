
import { Dimensions, PixelRatio } from "react-native";

export const PhoneHeight = Dimensions.get("window").height;
export const PhoneWidth  = Dimensions.get("window").width;

export const API_BASE = 'https://api.jotform.com';
export const FORM_ID = '212151275137044';
export const API_KEY = '093e3d4ff09d97e79172c2de2bff2b39'

const scale = PhoneWidth / 320;
export const responsiveSize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}