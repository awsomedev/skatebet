import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "skatebet-storage",
  encryptionKey: "skatebet-key",
});
