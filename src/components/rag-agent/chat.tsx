"use client";

import { ChatContext } from "@/app/dashboard/rag-agent/chat-session-context";
import { ChatList } from "@/components/shared/chat/chat-list";
import { ChatPanel } from "@/components/shared/chat/chat-panel";
import { EmptyScreen } from "@/components/shared/chat/empty-screen";
import { useScrollAnchor } from "@/shared/hooks/use-scroll-anchor";
import { cn } from "@/shared/utils";
import { useContext, useEffect, useState } from "react";
import { PromptForm } from "@/components/rag-agent/prompt-form";

export interface ChatProps extends React.ComponentProps<"div"> {}

export function Chat({ id, className }: ChatProps) {
  const [input, setInput] = useState("");
  const chatState = useContext(ChatContext);
  const { messagesRef, scrollRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, scrollToBottom]);

  return (
    <div
      className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
      ref={scrollRef}
    >
      <div className={cn("pb-[200px]", className)} ref={messagesRef}>
        {chatState.messages.length ? (
          <ChatList
            messages={chatState.messages}
            isCompletionLoading={chatState.completionLoading}
          />
        ) : (
          <EmptyScreen
            content={
              <h1 className="text-center text-5xl font-semibold leading-12 text-ellipsis overflow-hidden text-text_default_color p-1">
                R.A.G. Agent 🌴
              </h1>
            }
          />
        )}
      </div>
      <ChatPanel
        sessionId={chatState.sessionId}
        input={input}
        setInput={setInput}
        promptForm={PromptForm}
      />
    </div>
  );
}
