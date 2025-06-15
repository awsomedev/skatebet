import {
  NavigationContainerRef,
  ParamListBase,
  StackActions,
} from "@react-navigation/native";
import ScreenNames from "../screennames";

export type RootStackParamList = {
  [ScreenNames.home]: undefined;
  [ScreenNames.details]: { gameId: string };
  [ScreenNames.profile]: undefined;
};

export enum NavigationType {
  navigate,
  push,
}

export interface INavigate<T extends keyof RootStackParamList> {
  name: T;
  params?: RootStackParamList[T];
  type?: NavigationType;
}

interface IRootNavigatorProps {
  ref: NavigationContainerRef<ParamListBase> | null;
  goBack: () => void;
  navigate: <T extends keyof RootStackParamList>(args: INavigate<T>) => void;
}

const NavigationManager: IRootNavigatorProps = {
  ref: null,
  goBack: () => {
    const ref = NavigationManager.ref;
    if (!ref?.isReady() || !ref?.canGoBack()) {
      return;
    }
    ref?.goBack();
  },
  navigate: <T extends keyof RootStackParamList>(args: INavigate<T>) => {
    const { name, params, type = NavigationType.push } = args;
    const navigator = NavigationManager.ref;
    if (!navigator?.isReady()) {
      return;
    }

    if (type === NavigationType.navigate) {
      navigator?.navigate(name as string, params);
    } else {
      navigator?.dispatch(StackActions.push(name, params));
    }
  },
};

export default NavigationManager;
