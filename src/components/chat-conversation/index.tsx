import ChatUserMessage from "../chat-user-message";
import { ChatConversationStyle } from "./style";


export default function ChatConversation() {

    return (
        <>
            <ChatConversationStyle>
                <ChatUserMessage />
            </ChatConversationStyle>
        </>
    )
}