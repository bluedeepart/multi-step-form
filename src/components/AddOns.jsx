import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormContent from '../context/FormContent';
import { addOns } from '../data/data';

function AddOns() {
  const ctx = useContext(FormContent);
  const { formData, toggleAddon } = ctx;
  const isYearly = formData.duration === 'yearly';
  const selectedAddon = formData.addOns || [];
  console.log(selectedAddon);

  return (
    <>
      <article className="heading">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </article>

      <article className="middle-content">
        <div className="add-ons-cards">
          {addOns.map((addOn) => {
            const addonID = addOn.title.replaceAll(' ', '-').toLowerCase();
            return (
              <label key={addOn.id} htmlFor={addonID} className="add-ons-card">
                <span className='checkbox-icon'>
                  <input type="checkbox" value={addOn.title} name="add-ons" id={addonID} checked={selectedAddon.some((addonItem) => addonItem.id === addOn.id)} onChange={() => toggleAddon(addOn)} />
                </span>
                <div className="add-ons-details">
                  <h3>{addOn.title}</h3>
                  <p>{addOn.description}</p>
                </div>
                <div className="add-ons-price">{isYearly ? `$${addOn.price * 10}/yr` : `$${addOn.price}/mo`}</div>
              </label>
            );
          })}
        </div>
      </article>

      <article className="action">
        <Link to={-1} className='btn'>Go Back</Link>
        <Link to='/summary' className='btn btn-primary'>Next Step</Link>
      </article>
    </>
  );
}

export default AddOns;
