import { Counts, LatestLeads, UrgentLeads } from "../components/main";

const Home = () => {
  return (
    <div className="min-h-screen mt-5 mb-12 px-5">
      <Counts />
      <div className=" gap-7 items-center mt-10 md:flex xs:block md:gap-4">
        <LatestLeads />
        <UrgentLeads />
      </div>
    </div>
  );
};

export default Home;
