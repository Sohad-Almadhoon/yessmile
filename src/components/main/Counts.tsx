const Card = ({ count, text }: { count: number; text: string }) => {
  return (
    <div className="flex flex-col bg-white py-9 px-6 dark:bg-darkModeSecondary rounded-md shadow-md">
      <span className="text-3xl font-medium text-primary dark:text-primaryDark mb-2">{count}</span>
      <span className="text-lg dark:text-white font-[600]">{text}</span>
    </div>
  )
}
const Counts = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-2 md:gap-4">
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
      <Card count={13137} text="ALL Leads" />
    </div>
  )
}

export default Counts
