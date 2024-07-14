import img from "../assets/noprofile.png"
interface ChatBoxProps {
    name: string;
    date: string;
  }
export default function ChatBox({name,date}:ChatBoxProps) {
    const dateonly = date.slice(0,10)
  return (
    <div className="w-full h-16 mx-2 flex ">
      <div className="py-2 px-3 ">
        <img
          src={img}
          className="rounded-full w-20 h-10 "
        />
      </div>
      <div>
        <div className="text-sm pt-2 font-sans flex justify-between mr-3">
            <span className="font-semibold">{name}</span>
            <span className="font-light h-5 text-sm font-mono text-gray-400">{dateonly}</span>
        </div>
        <div className="font-light h-5 text-ellipsis overflow-hidden text-sm font-serif pt-1 text-gray-400 ">
          recently came chat of the chatter recently came chat of the chatter recently came chat of the chatter recently came chat of the chatter recently came chat of the chatter
        </div>
      </div>
    </div>
  );
}
