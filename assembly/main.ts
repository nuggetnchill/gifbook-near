import { PostedMessage, messages } from './model';

// --- contract code goes below

const MESSAGE_LIMIT = 50;

export function addMessage(text: string, gif: string): void {
  const message = new PostedMessage(text, gif);
  messages.push(message);
}

export function getMessages(): PostedMessage[] {
  const numMessages = min(MESSAGE_LIMIT, messages.length);
  const startIndex = messages.length - numMessages;
  const result = new Array<PostedMessage>(numMessages);
  for(let i = 0; i < numMessages; i++) {
    result[i] = messages[i + startIndex];
  }
  return result;
}
