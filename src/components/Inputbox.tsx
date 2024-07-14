import UploadIcon from '@mui/icons-material/Upload';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

export default function Inputbox() {
  return (
    <div>
        <div className='h-10 w-full flex'>
          <UploadIcon className='m-2'/>
          <input
            placeholder='Write a message'
            className='w-full bg-slate-100 border-red-50 m-1 rounded-full'
          />
          <SentimentSatisfiedAltIcon className='m-2'/>
          <KeyboardVoiceIcon className='m-2'/>
          </div>
    </div>
  )
}
