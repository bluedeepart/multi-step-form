function PersonalInfo() {


  return (
    <>
      <article className="heading">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </article>

      <form>
        <article className="middle-content">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='e.g. Stephen King' />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id='email' placeholder='e.g. stephenking@loren.com' />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id='phone' placeholder='e.g. +1 234 567 890' />
            <span className='error-msg'>This field is required</span>
          </div>
        </article>

        <article className="action">
          <span>&nbsp;</span>
          <button className='btn btn-primary'>Next Step</button>
        </article>
      </form>
    </>
  );
}

export default PersonalInfo;
