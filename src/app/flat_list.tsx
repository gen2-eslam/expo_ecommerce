import axios from "axios";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

// run npm run server to start the server انا الي كاتب كده مش ال AI
const ApiUrl = "http://10.0.2.2:3000/saleProducts";

const getSaleProducts = async () => {
  try {
    const response = await axios.get(ApiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const FlatListScreen = () => {
  const [products, setProducts] = React.useState<Item[]>([]);
  React.useEffect(() => {
    getSaleProducts().then((data: Item[]) => {
      setProducts(data);
    });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <View style={styles.itemCard}>
      <Image
        source={{ uri: item.images[0] }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <View style={{ flexDirection: "column", width: "70%", marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
        <Text style={{ color: "gray" }} numberOfLines={2}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.price + " $"}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.category.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,

    borderRadius: 10,
  },
});

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}
