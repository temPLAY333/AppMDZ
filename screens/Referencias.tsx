import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import Emojis from "../components/Emojis";
import { Gap, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { useTranslation } from "../localization";

const Referencias = () => {
  const { t } = useTranslation();
  return (
    <ScrollView
      style={styles.referencias}
      contentContainerStyle={styles.referenciasScrollViewContent}
    >
      <TopBar translationKey="references.title" textoWidth={130} />
      <View style={styles.referencia}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="🌲" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("naturalized")}
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="🪵" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("economic.use")}
          </Text>
        </View>
        <View style={styles.parentFlexBox}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="💧" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("drought.resistant")}
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="🌳" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("exotic")}
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="❄️" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("cold.resistant")}
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <View style={styles.emojiContainer}>
            <Emojis emoji="🌱" size={48} />
          </View>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.descripcionTexto, styles.usoEconmicoTypo]}>
            {t("salt.resistant")}
          </Text>
        </View>
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  referenciasScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: Dimensions.get('window').height,
  },
  parentFlexBox: {
    gap: Gap.gap_10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  usoEconmicoTypo: {
    textAlign: "left",
    flex: 1,
    fontSize: FontSize.size_36,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  referencias: {
    width: "100%",
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
  },
  referencia: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_10,
    paddingVertical: 20,
    gap: 20,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  parent: {
    minHeight: 70,
    flexWrap: "wrap",
    alignContent: "center",
  },
  emojiContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 35,
    overflow: 'hidden',
  },
  separatorElements: {
    fontSize: FontSize.size_40,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  descripcionTexto: {
    flexShrink: 1,
    paddingVertical: 5,
  },
});

export default Referencias;
