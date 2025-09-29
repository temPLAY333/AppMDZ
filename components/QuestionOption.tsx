import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import CircleSelector, { CircleSelectorState } from "./CircleSelector";

type QuestionOptionProps = {
  text: string;
  state: CircleSelectorState;
  onPress: () => void;
  disabled?: boolean;
  explanation?: string;
  showExplanation?: boolean;
};

const QuestionOption: React.FC<QuestionOptionProps> = ({
  text,
  state,
  onPress,
  disabled = false,
  explanation = "",
  showExplanation = false
}) => {
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.contentContainer} 
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
      >
        <Text style={styles.optionText}>{text}</Text>
        <CircleSelector 
          state={state} 
          onPress={onPress} 
          disabled={disabled}
          size={36}
        />
      </Pressable>
      
      {showExplanation && explanation && state !== "SinMarcar" && (
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationText}>{explanation}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12
  },
  optionText: {
    flex: 1,
    color: Color.colorWhite,
    fontSize: FontSize.size_20,
    fontFamily: FontFamily.interRegular,
    marginRight: 12
  },
  explanationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 8,
    marginTop: 8,
    marginLeft: 16
  },
  explanationText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
    fontStyle: "italic"
  }
});

export default QuestionOption;