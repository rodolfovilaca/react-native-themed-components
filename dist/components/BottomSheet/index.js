// @ts-ignore
import React, { forwardRef, useState, useContext } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet/src';
import Animated from 'react-native-reanimated';
import AbsoluteView from '../Layout/Absolute';
import { useLazyRef } from '../../hooks';
import styled from 'styled-components/native';
import ThemeContext from '../Theme/ThemeContext';
const Header = styled.View `
  background-color: ${(props) => props.theme.dark ? props.theme.pallete.primary.dark : props.theme.pallete.primary.light};
  shadow-color: ${(props) => props.theme.pallete.backdrop};
  padding-top: 20;
  border-top-left-radius: 20;
  align-items: center;
  border-top-right-radius: 20;
`;
const PanelHandle = styled.View `
  width: 40;
  height: 8;
  border-radius: 4;
  background-color: 00000040;
  margin-bottom: 10;
`;
export default forwardRef((props, ref) => {
    const [touchable, setTouchable] = useState(false);
    const [view, setView] = useState(false);
    const opacityValue = useLazyRef(() => new Animated.Value(1));
    const theme = useContext(ThemeContext);
    const animatedShadowOpacity = Animated.interpolate(opacityValue, {
        inputRange: [0, 1],
        outputRange: [0.9, 0],
    });
    const renderHeader = () => (React.createElement(Header, null,
        React.createElement(PanelHandle, null)));
    const onOpenStart = () => {
        setView(true);
    };
    const onOpenEnd = () => {
        setTouchable(true);
    };
    const onCloseEnd = () => {
        setTouchable(false);
        setView(false);
    };
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);
    return (React.createElement(React.Fragment, null,
        view && (React.createElement(Animated.View, { style: [
                {
                    ...StyleSheet.absoluteFillObject,
                    zIndex: 99,
                    backgroundColor: theme.pallete.backdrop,
                },
                {
                    opacity: animatedShadowOpacity,
                },
            ] })),
        touchable && (React.createElement(AnimatedTouchable, { onPress: props.closeBottomsheet },
            React.createElement(AbsoluteView, { style: {
                    zIndex: 99,
                } }))),
        React.createElement(BottomSheet, Object.assign({ ref: ref, callbackNode: opacityValue, renderHeader: renderHeader, initialSnap: 1, onOpenStart: onOpenStart, onOpenEnd: onOpenEnd, onCloseEnd: onCloseEnd }, props))));
});
//# sourceMappingURL=index.js.map