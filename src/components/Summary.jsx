function Summary() {
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
              <h3>Arcade (Monthly)</h3>
              <button className='btn btn-secondary-hover'>Change</button>
            </div>
            <h3>$9/mo</h3>
          </div>
          <div className="summary-card-body">
            <ul>
              <li>
                <p>Online services</p>
                <span>+$1/mo</span>
              </li>
              <li>
                <p>Larger storage</p>
                <span>+$2/mo</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="summary-card-footer">
          <ul>
            <li>
              <p>Total (per month)</p>
              <strong>+$12/mo</strong>
            </li>
          </ul>
        </div>
      </article>

      <article className="action">
        <button className='btn'>Go Back</button>
        <button className='btn btn-secondary'>Confirm</button>
      </article>
    </>
  );
}

export default Summary;
