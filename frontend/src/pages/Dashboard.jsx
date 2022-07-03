import { useState } from 'react'
import Explore from '../components/Explore'
import Playlists from '../components/Playlists'
import Albums from '../components/Albums'
import Tracks from '../components/Tracks'

const Dashboard = ({ page }) => {
  const [ pageState, setPageState ] = useState(page)
  
  return ( 
    <div className="dashboard">
      { page === '' ? <></> : <></>}
      { page === 'explore' ? <Explore /> : <></> }
      { page === 'playlists' ? <Playlists /> : <></> }
      { page === 'albums' ? <Albums /> : <></> }
      { page === 'tracks' ? <Tracks /> : <></> }
    </div>
  )
}

export default Dashboard