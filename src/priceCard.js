

export function PriceCard({card}){
   
 return(
    
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{card.plan}</h5>
            <h6 className="card-price text-center">${card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className = {card.usersEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.usersEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.priceEnabler?<strong>{card.users}</strong>: card.users}</li>
              <li className = {card.storageEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.storage}</li>
              <li className = {card.publicProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.publicProjects}</li>
              <li className = {card.accessEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.accessEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.access}</li>
              <li className = {card.privateProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.privateProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.privateProjects}</li>
              <li className = {card.phoneSupportEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.phoneSupportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.phoneSupport}</li>
              <li className = {card.subDomainEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.subDomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span><strong>{card.unlimited}</strong> {card.subDomain}</li>
              <li className = {card.statusEnabler ? "" : "text-muted"}><span className="fa-li"><i className = {card.statusEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{card.status}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
 )   
}