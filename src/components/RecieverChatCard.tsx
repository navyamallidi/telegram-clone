interface ChatBoxProps {
    message:string;
  }
export default function RecieverChatCard({message}:ChatBoxProps) {
  return (
    <div className="flex justify-end">
        <div className="mt-5 mr-3 ml-10 p-2 inline-flex bg-white rounded-t-lg  rounded-l-lg">
            <span className="text-sm">{message}</span> 
            <span className="font-light text-sm font-serif pt-3 pl-3 text-gray-400 ">11.50</span>
        </div>
    </div>
  )
}
 