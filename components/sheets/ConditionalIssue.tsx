import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useEffect, useState } from "react";
import { ThemedText } from "../ThemedText";

export const CONDITIONAL_ISSUE_SHEET_NAME = "conditional-issue";

type Props = {
  trigger: boolean;
  onDismiss: () => void;
};

let timeout: number | null = null;
export const ConditionalIssue = ({ trigger, onDismiss }: Props) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    console.log("Starting timeout...");
    timeout = setTimeout(() => {
      console.log("Timeout reached");
      setShouldRender(true);
    }, 1000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [trigger]);

  const handleDismiss = () => {
    setShouldRender(false);
    onDismiss();
  };

  return (
    <TrueSheet
      contentContainerStyle={{ paddingBottom: 100 }}
      cornerRadius={8}
      edgeToEdge
      name={CONDITIONAL_ISSUE_SHEET_NAME}
      sizes={["auto"]}
      onDismiss={handleDismiss}
    >
      {shouldRender && <ThemedText>Hello</ThemedText>}
    </TrueSheet>
  );
};
