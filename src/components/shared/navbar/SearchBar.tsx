import { cn } from '@/lib/utils'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchBar = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <div
      className={cn(`items-center justify-center px-2  md:flex hidden `, {
        block: mobile,
      })}
    >
      <div className="relative lg:min-w-[300px] ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-300 dark:text-white placeholder:text-gray-400 bg-white focus:text-gray-900 focus:ring-0 outline-none sm:text-sm sm:leading-6 placeholder:text-xs placeholder:dark:text-white dark:bg-darkMode"
          placeholder=" Patient Name/Email (Begin typing 3 char)"
          type="search"
        />
      </div>
    </div>
  )
}

export default SearchBar
