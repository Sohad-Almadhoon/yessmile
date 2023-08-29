interface LeadProps {
  imgUrl: string;
  patientName: string;
  email: string;
  date: string;
}
const Lead = ({ imgUrl, patientName, email, date }: LeadProps) => {
  return (
    <div className="flex mb-6 justify-between">
      <div className="flex gap-5 ">
        <img src={imgUrl} width={50} height={50} className="rounded-full" />
        <div>
          <h3 className="font-normal text-primary dark:text-primaryDark">
            {patientName}
          </h3>
          <span className="text-gray-500 dark:text-white">{email}</span>
        </div>
      </div>
      <span className="text-sm text-gray-500 font-medium dark:text-white">
        {date}
      </span>
    </div>
  );
};

const LatestLeads = () => {
  return (
    <div className="shadow-lg w-full lg:w-1/2 rounded-md  min-h-[400px] bg-white dark:bg-darkModeSecondary">
      <h3 className="text-xl font-[600] mb-8 border-b p-4 dark:text-white">
        Latest Leads
      </h3>
      <div className="px-8">
        <Lead
          imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          patientName="Fatma Ağkoç"
          email="da-xxxxxx@gmail.com"
          date="01.07.2023 11:37"
        />
        <Lead
          imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          patientName="Fatma Ağkoç"
          email="da-xxxxxx@gmail.com"
          date="01.07.2023 11:37"
        />
        <Lead
          imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          patientName="Fatma Ağkoç"
          email="da-xxxxxx@gmail.com"
          date="01.07.2023 11:37"
        />
        <Lead
          imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          patientName="Fatma Ağkoç"
          email="da-xxxxxx@gmail.com"
          date="01.07.2023 11:37"
        />
      </div>
    </div>
  );
};

export default LatestLeads;
