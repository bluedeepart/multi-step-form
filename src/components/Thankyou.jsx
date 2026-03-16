import ThankyouIcon from '/src/assets/images/icon-thank-you.svg';

function Thankyou() {
  return (
    <article className='thankyou-msg'>
      <img src={ThankyouIcon} alt="Thank you!" />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </article>
  );
}

export default Thankyou;
