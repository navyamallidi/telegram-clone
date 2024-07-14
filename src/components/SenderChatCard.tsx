interface ChatBoxProps {
    message:string;
  }

export default function SenderChatCard({message}:ChatBoxProps) {
  return (
    <div>
        <div className=" mt-5 p-2 ml-5 inline-flex bg-white rounded-t-lg rounded-br-lg mr-10">
            <span className="text-sm"> {message}</span> 
            <span className="font-light text-sm font-serif pt-3 pl-3 text-gray-400 ">11.50</span>
        </div>
    </div>
  )
}
