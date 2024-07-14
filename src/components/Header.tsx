import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
  return (
    <div>
        <div className="w-full h-16 flex justify-between border-b-2">
          <div className="mt-2 ml-4 pl-3">
            <p>Username</p>
            <p className="text-sm">Online</p>
          </div>
          <div className="mt-3">
            <span className="px-2"><SearchIcon /></span>
            <span className="px-2"><CallIcon /></span>
            <span className="px-2"><CallToActionIcon /></span>
            <span className="px-2"><MoreVertIcon /></span>
          </div>
        </div>
    </div>
  )
}
