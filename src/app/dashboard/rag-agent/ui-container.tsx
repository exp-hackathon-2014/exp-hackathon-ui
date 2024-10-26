"use client";

import {
  ChatContext,
  ChatDispatchContext,
} from "@/app/dashboard/rag-agent/chat-session-context";
import {
  chatReducer,
  initialState,
} from "@/app/dashboard/rag-agent/chat-session-reducer";
import { Chat as RagChat } from "@/components/rag-agent/chat";
import { useReducer } from "react";

export function RagAgentUiContainer() {
  const [chat, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={chat}>
      <ChatDispatchContext.Provider value={dispatch}>
        <RagChat />
      </ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
}
