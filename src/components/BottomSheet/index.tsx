// @ts-ignore
import React, {forwardRef, useState, LegacyRef, useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet/src';
import Animated from 'react-native-reanimated';
import AbsoluteView from '../Layout/Absolute';
import {useLazyRef} from '../../hooks';
import {PanGestureHandler, TapGestureHandler} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import ThemeContext from '../Theme/ThemeContext';

type Props = {
  /**
   * Points for snapping of bottom sheet component. They define distance from bottom of the screen.
   * Might be number or percent (as string e.g. '20%') for points or percents of screen height from bottom.
   */
  snapPoints: (number | string)[];

  /**
   * Determines initial snap point of bottom sheet. Defaults to 0.
   */
  initialSnap: number;

  /**
   * Method for rendering scrollable content of bottom sheet.
   */
  renderContent?: () => React.ReactNode;

  /**
   * Method for rendering non-scrollable header of bottom sheet.
   */
  renderHeader?: () => React.ReactNode;

  /**
   * Defines if bottom sheet could be scrollable by gesture. Defaults to true.
   */
  enabledGestureInteraction?: boolean;
  enabledHeaderGestureInteraction?: boolean;
  enabledContentGestureInteraction?: boolean;

  /**
   * Defines if bottom sheet content responds to taps. Defaults to true.
   */
  enabledContentTapInteraction?: boolean;

  /**
   * If false blocks snapping using snapTo method. Defaults to true.
   */
  enabledManualSnapping?: boolean;

  /**
   * Defines whether it's possible to scroll inner content of bottom sheet. Defaults to true.
   */
  enabledInnerScrolling?: boolean;

  /**
   * Reanimated node which holds position of bottom sheet, where 1 it the highest snap point and 0 is the lowest.
   */
  callbackNode?: Animated.Value<number>;

  /**
   * Reanimated node which holds position of bottom sheet;s content (in dp).
   */
  contentPosition?: Animated.Value<number>;

  /**
   * Reanimated node which holds position of bottom sheet's header (in dp).
   */
  headerPosition?: Animated.Value<number>;

  /**
   * Defines how violently sheet has to stopped while overdragging. 0 means no overdrag. Defaults to 0.
   */
  overdragResistanceFactor: number;

  /**
   * Array of Refs passed to gesture handlers for simultaneous event handling
   */
  simultaneousHandlers?: Array<React.RefObject<any>> | React.RefObject<any>;

  /**
   * Overrides config for spring animation
   */
  springConfig: {
    damping?: number;
    mass?: number;
    stiffness?: number;
    restSpeedThreshold?: number;
    restDisplacementThreshold?: number;
    toss?: number;
  };

  /**
   * Refs for gesture handlers used for building bottomsheet
   */
  innerGestureHandlerRefs: [
    React.RefObject<PanGestureHandler>,
    React.RefObject<PanGestureHandler>,
    React.RefObject<TapGestureHandler>,
  ];

  enabledImperativeSnapping?: boolean;

  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  closeBottomsheet?: () => void;
  overlayColor?: string;
  callbackThreshold?: number;
};

const Header = styled.View`
  background-color: ${(props: any) =>
    props.theme.dark ? props.theme.pallete.primary.dark : props.theme.pallete.primary.light};
  shadow-color: ${(props: any) => props.theme.pallete.backdrop};
  padding-top: 20;
  border-top-left-radius: 20;
  align-items: center;
  border-top-right-radius: 20;
`;

const PanelHandle = styled.View`
  width: 40;
  height: 8;
  border-radius: 4;
  background-color: 00000040;
  margin-bottom: 10;
`;

export default forwardRef((props: Props, ref: LegacyRef<BottomSheet>) => {
  const [touchable, setTouchable] = useState(false);
  const [view, setView] = useState(false);
  const opacityValue: any = useLazyRef(() => new Animated.Value(1));
  const theme = useContext(ThemeContext);
  const animatedShadowOpacity = Animated.interpolate(opacityValue, {
    inputRange: [0, 1],
    outputRange: [0.9, 0],
  });

  const renderHeader = () => (
    <Header>
      <PanelHandle />
    </Header>
  );

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

  return (
    <>
      {view && (
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              zIndex: 99,
              backgroundColor: theme.pallete.backdrop,
            },
            {
              opacity: animatedShadowOpacity,
            },
          ]}
        />
      )}
      {touchable && (
        <AnimatedTouchable onPress={props.closeBottomsheet}>
          <AbsoluteView
            style={{
              zIndex: 99,
            }}
          />
        </AnimatedTouchable>
      )}
      <BottomSheet
        ref={ref}
        callbackNode={opacityValue}
        renderHeader={renderHeader}
        initialSnap={1}
        onOpenStart={onOpenStart}
        onOpenEnd={onOpenEnd}
        onCloseEnd={onCloseEnd}
        {...props}
      />
    </>
  );
});
