import ChatInput from "../../components/chat-input";
import ChatConversation from "../../components/chat-conversation";
import { ChatPage } from "./styles";

export default function Chat() {
    return (
        <>
            <ChatPage>
                <ChatConversation />
                <ChatInput />
            </ChatPage>
        </>
    )
}