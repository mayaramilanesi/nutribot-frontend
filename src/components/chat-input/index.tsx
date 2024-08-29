import { ChatInputStyle, ChatInputTextStyle } from "./style";


function ImputText() {
    return (
      <ChatInputTextStyle>Envie uma imagem um texto com sua refeição...</ChatInputTextStyle>
);
  }
export default function ChatInput() {

    return (
        <>
            <ChatInputStyle>
                <ImputText />
            </ChatInputStyle>
        </>
    )
}