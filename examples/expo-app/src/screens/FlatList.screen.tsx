import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { H2, Pressable, Span, View } from '@universal-labs/primitives';
import { useStaticStyledComponent } from '@universal-labs/styled';

const data = [
  {
    id: 0,
    label: 'label',
  },
];

const FlatListScreen = () => {
  const [items, setItems] = useState(data);

  const addItem = useCallback(() => {
    setItems((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        label: `Item - ${prevState.length}`,
      },
    ]);
  }, []);
  const { componentInteractionHandlers, styles } = useStaticStyledComponent({
    className: 'bg-gray-600 hover:bg-white',
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='flex-1'>
        <Pressable onPress={addItem} className='bg-gray-400 '>
          <H2>Add item</H2>
        </Pressable>
        <FlatList
          {...componentInteractionHandlers}
          data={items}
          contentContainerStyle={styles}
          renderItem={({ item }) => {
            return (
              <View>
                <Span>{item.label}</Span>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export { FlatListScreen };
