import { useState } from "react";
import { Button, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import {
  CONDITIONAL_ISSUE_SHEET_NAME,
  ConditionalIssue,
} from "@/components/sheets/ConditionalIssue";
import { TrueSheet } from "@lodev09/react-native-true-sheet";

export default function HomeScreen() {
  const [triggerConditionalIssue, setTriggerConditionalIssue] = useState(false);

  const handleOpenConditionalIssue = () => {
    setTriggerConditionalIssue(true);
    TrueSheet.present(CONDITIONAL_ISSUE_SHEET_NAME);
  };

  const handleDismissConditionalIssue = () => {
    setTriggerConditionalIssue(false);
  };

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.container}>
          <Button
            title="Open conditional issue"
            onPress={handleOpenConditionalIssue}
          />
        </ThemedView>
      </ThemedView>
      <ConditionalIssue
        trigger={triggerConditionalIssue}
        onDismiss={handleDismissConditionalIssue}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
