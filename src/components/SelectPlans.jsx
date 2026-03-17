import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FormContent from '../context/FormContent';
import { plans } from '../data/data';

function SelectPlans() {
  const ctx = useContext(FormContent);
  const { toggleDuration, formData, handlePlans } = ctx;
  const isYearly = formData.duration === 'yearly';
  const selectedPlan = formData.plan.name;

  return (
    <>
      <article className="heading">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </article>

      <article className="middle-content">
        <div className="plan-cards">
          {plans.map((plan) => {
            const planID = plan.name.replaceAll(' ', '-').toLowerCase();
            return (
              <label key={plan.id} htmlFor={planID} className="plan-card">
                <input type="radio" value={plan.name} name="select-plan" id={planID} checked={selectedPlan === plan.name} onChange={() => handlePlans(plan)} className='sr-only' />
                <div className="icon">
                  <img src={plan.icon} alt={plan.name} />
                </div>
                <div className="plan-details">
                  <h3 className="title">{plan.name}</h3>
                  <p className="price">{isYearly ? `$${plan.bill_amt * 10}/yr` : `$${plan.bill_amt}/mo`}</p>
                  {isYearly && <p className='text-primary'><small>2 months free</small></p>}
                </div>
              </label>
            );
          })}
        </div>
        <div className="plan-selector-wrapper">
          <span>Monthly</span>
          <label className="plan-selector">
            <input type="checkbox" name='duration' onChange={toggleDuration} defaultChecked={isYearly} />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
      </article>

      <article className="action">
        <Link to={-1} className='btn'>Go Back</Link>
        <Link to='/multi-step-form/add-ons' className='btn btn-primary'>Next Step</Link>
      </article>
    </>
  );
}

export default SelectPlans;
