import { Link } from 'react-router-dom'
const Links = () => {
  return (
    <div className="items-center hidden lg:flex w-72 justify-between">
      <Link to="/leads" className="text-white text-sm hover:font-bold transition-all">
        Leads
      </Link>
      <Link to="/patients" className="text-white text-sm hover:font-bold transition-all">
        Patients
      </Link>
      <Link to="/schedule" className="text-white text-sm hover:font-bold transition-all">
        Schedule
      </Link>
      <Link to="/settings" className="text-white text-sm hover:font-bold transition-all">
        Settings
      </Link>
      <Link to="/payments" className="text-white text-sm hover:font-bold">
        Payments
      </Link>
    </div>
  )
}

export default Links
