import './App.css';
import { PriceCard } from './priceCard';


const cardDetails = [
  {
    price:"0",
    priceEnabler:false,
    plan:"Free",
    users: "Single User",
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler:true,
    access : "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport : "Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain : "Free Subdomain",
    subDomainEnabler:false,
    unlimited:"",
    status: "Monthly Status Reports",
    statusEnabler:false
  },
  {
    price:"9",
    priceEnabler:true,
    plan:"Plus",    
    users: "5 Users",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler:true,
    access : "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport : "Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain : "Free Subdomain",
    subDomainEnabler:true,
    unlimited:"",
    status: "Monthly Status Reports",
    statusEnabler:false 
  },
  {
    price:"49",
    priceEnabler:true,
    plan:"Pro",    
    users: "Unlimited Users",
    usersEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler:true,
    access : "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport : "Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain : "Free Subdomain",
    subDomainEnabler:true,
    unlimited:"Unlimited",
    status: "Monthly Status Reports",
    statusEnabler:true 
  }    
]

function App() {
  return (
    // <div>
    <section class="pricing py-5">
    <div class="container">
    <div class="row">
      {cardDetails.map((cd) => <PriceCard card ={cd}/>)}
      </div>
    </div>
    </section>
    // </div>    
  );
}

export default App;
