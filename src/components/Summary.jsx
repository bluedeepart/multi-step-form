import { Link } from 'react-router-dom';
import FormContent from '../context/FormContent';
import { useContext } from 'react';

function Summary() {
  const ctx = useContext(FormContent);
  const { formData } = ctx;
  const isYearly = formData.duration === 'yearly';
  const dur = isYearly ? 'yr' : 'mo';
  const totalBillAmt = isYearly ? formData.plan.bill_amt * 10 : formData.plan.bill_amt;
  const totalPrice = formData.addOns.reduce((accumulator, currentValue) => {
    return accumulator + (isYearly ? currentValue.price * 10 : currentValue.price);
  }, totalBillAmt);

  return (
    <>
      <article className="heading">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </article>

      <article className="middle-content">
        <div className="summary-card">
          <div className="summary-card-header">
            <div>
              <h3>{formData.plan.name} ({isYearly ? 'Yearly' : 'Monthly'})</h3>
              <Link to='/select-plan' className='btn btn-secondary-hover'>Change</Link>
            </div>
            <h3>${totalBillAmt}/{dur}</h3>
          </div>
          <div className="summary-card-body">
            <ul>
              {formData.addOns.map((addOn) => (
                <li key={addOn.id}>
                  <p>{addOn.title}</p>
                  <span>+${isYearly ? addOn.price * 10 : addOn.price}/{dur}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="summary-card-footer">
          <ul>
            <li>
              <p>Total (per {isYearly ? 'year' : 'month'})</p>
              <strong>+${totalPrice}/{dur}</strong>
            </li>
          </ul>
        </div>
      </article>

      <article className="action">
        <Link to={-1} className='btn'>Go Back</Link>
        <Link to='/multi-step-form/thankyou' className='btn btn-secondary'>Confirm</Link>
      </article>
    </>
  );
}

export default Summary;
