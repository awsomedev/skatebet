import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React from "react";
import GameCard from "../../../components/gamecard/GameCard";
import { Game } from "../models/home";
import { loadingData } from "../loadingData";
import theme from "../../../styling/theme";

const GameList = ({
  handleScroll,
  bottom,
  paddingTop,
  games,
  loading,
}: {
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  bottom: number;
  paddingTop: number;
  games: Game[];
  loading: boolean;
}) => {
  const renderItem = ({ item }: { item: Game }) => (
    <GameCard loading={false} game={item} />
  );
  const renderLoadingItem = ({ item }: { item: Game }) => (
    <GameCard loading={true} game={item} />
  );

  const renderItemSeparator = () => (
    <View style={{ height: theme.spaces.itemPadding }} />
  );
  const keyExtractor = (item: Game) => item.id;

  if (loading) {
    return (
      <FlatList
        data={loadingData}
        keyExtractor={keyExtractor}
        renderItem={renderLoadingItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: theme.spaces.screenPadding,
          paddingBottom: bottom,
          paddingTop: paddingTop,
        }}
        ItemSeparatorComponent={renderItemSeparator}
      />
    );
  }

  return (
    <FlatList
      data={games}
      onScroll={handleScroll}
      contentContainerStyle={{
        paddingHorizontal: theme.spaces.screenPadding,
        paddingBottom: bottom,
        paddingTop: paddingTop,
      }}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export default GameList;
