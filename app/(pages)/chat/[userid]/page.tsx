import ChatHeading from "@/components/ChatHeading/page";
import ChatInput from "@/components/ChatInput/page";
import ChatTexts from "@/components/ChatTexts/page";

type Props = {
  params: {
    userid: string;
  };
};

function Chat({ params }: Props) {
  // Chat {params.userid}
  // 172
  return (
    <div className="h-full flex justify-between align-center w-full flex-col	">
      <ChatHeading params={params} />

      <ChatTexts />

      <ChatInput />
    </div>
  );
}

export default Chat;
