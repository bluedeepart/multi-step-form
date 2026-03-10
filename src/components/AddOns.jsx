const addOns = [
  {
    id: 'a1',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: '+$1/mo',
  },
  {
    id: 'a2',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    id: 'a3',
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    price: '+$2/mo',
  }
];

function AddOns() {
  return (
    <>
      <article className="heading">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </article>

      <article className="middle-content">
        <div className="add-ons-cards">
          {addOns.map((addOn, index) => (
            <label key={addOn.id} htmlFor={addOn.title.replaceAll(' ', '-').toLowerCase()} className="add-ons-card">
              <span className='checkbox-icon'>
                <input type="checkbox" name="add-ons" id={addOn.title.replaceAll(' ', '-').toLowerCase()} checked={index === 0 ? 'checked' : ''} />
              </span>
              <div className="add-ons-details">
                <h3>{addOn.title}</h3>
                <p>{addOn.description}</p>
              </div>
              <div className="add-ons-price">{addOn.price}</div>
            </label>
          ))}
        </div>
      </article>

      <article className="action">
        <button className='btn'>Go Back</button>
        <button className='btn btn-primary'>Next Step</button>
      </article>
    </>
  );
}

export default AddOns;
