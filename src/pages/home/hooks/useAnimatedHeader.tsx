import { useCallback } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  useAnimatedValue,
} from "react-native";

export const useAnimatedHeader = () => {
  const scrollY = useAnimatedValue(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentScrollY = event.nativeEvent.contentOffset.y;
      const zeroSafeVal = Math.max(0, currentScrollY);
      const clampedVal = Math.min(zeroSafeVal, 60);
      scrollY.setValue(-clampedVal);
    },
    [scrollY]
  );

  return {
    scrollY,
    handleScroll,
  };
};
