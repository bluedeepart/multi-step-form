import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvaced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';

const plans = [
  {
    id: 'p1',
    name: 'Arcade',
    bill_amt: '$9/mo',
    icon: IconArcade,
  },
  {
    id: 'p2',
    name: 'Advanced',
    bill_amt: '$12/mo',
    icon: IconAdvaced,
  },
  {
    id: 'p3',
    name: 'Pro',
    bill_amt: '$15/mo',
    icon: IconPro,
  }
];

function SelectPlans() {
  return (
    <>
      <article className="heading">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </article>

      <article className="middle-content">
        <div className="plan-cards">
          {plans.map((plan, index) => (
            <label key={plan.id} htmlFor={plan.name.replaceAll(' ', '-').toLowerCase()} className="plan-card">
              <input type="radio" name="select-plan" id={plan.name.replaceAll(' ', '-').toLowerCase()} checked={index === 0 ? 'checked' : ''} />
              <div className="icon">
                <img src={plan.icon} alt={plan.name} />
              </div>
              <div className="plan-details">
                <h3 className="title">{plan.name}</h3>
                <p className="price">{plan.bill_amt}</p>
              </div>
            </label>
          ))}
        </div>
        <div className="plan-selector-wrapper">
          <span>Monthly</span>
          <label className="plan-selector">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
      </article>

      <article className="action">
        <button className='btn'>Go Back</button>
        <button className='btn btn-primary'>Next Step</button>
      </article>
    </>
  );
}

export default SelectPlans;
