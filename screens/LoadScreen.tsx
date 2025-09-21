import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const LoadScreen = () => {
  return (
    <ScrollView
      style={styles.loadscreen}
      contentContainerStyle={styles.loadScreenScrollViewContent}
    >
      <View style={styles.list}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={styles.bpYouthClimateActionFundLIcon}
          contentFit="cover"
          source={require("../assets/BP-Youth-Climate-Action-Fund-Logo-Options-040824-V1-FNL-YCAF-Logo-with-Tagline-as-Outlined-Text-White-1.png")}
        />
        <Image
          style={styles.bpSocialYouthclimateactionfuIcon}
          contentFit="cover"
          source={require("../assets/BP-Social-YouthClimateActionFund-1.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadScreenScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 917,
  },
  loadscreen: {
    width: "100%",
    backgroundColor: Color.colorDarkcyan,
    maxWidth: "100%",
    flex: 1,
  },
  list: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 140,
    gap: 50,
    flex: 1,
  },
  image1Icon: {
    width: 240,
    height: 240,
  },
  bpYouthClimateActionFundLIcon: {
    width: 258,
    height: 99,
  },
  bpSocialYouthclimateactionfuIcon: {
    width: 180,
    height: 180,
  },
});

export default LoadScreen;
