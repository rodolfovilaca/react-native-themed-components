import { Platform, StatusBar, Dimensions, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
const deviceHeight = Platform.OS === "android" ? SCREEN_HEIGHT - StatusBar.currentHeight : SCREEN_HEIGHT;
export function percentFont(percent) {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}
export function absoluteFont(fontSize) {
    const standardScreenHeight = 680;
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    return Math.round(heightPercent);
}
export function normalizeFont(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
//# sourceMappingURL=index.js.map