import { MESSAGES } from "./constants";

export function findMessage(
  attribute: keyof typeof MESSAGES
): string | undefined {
  const messageObject = MESSAGES[attribute];
  return messageObject ? messageObject.message : undefined;
}
