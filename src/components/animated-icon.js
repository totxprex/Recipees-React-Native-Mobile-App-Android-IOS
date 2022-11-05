import React, { useImperativeHandle, forwardRef } from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';
import callNotifications from '../notifications/notifications';

const AnimatedButton =  ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
  data
}) => {
  const [isExtended, setIsExtended] = React.useState(true);

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const fabStyle = { [animateFrom]: 16 };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'Label'}
        extended={!isExtended}
        onPress={() => callNotifications()}
        visible={visible}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fabStyle, style, fabStyle]}
      />
    </SafeAreaView>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});