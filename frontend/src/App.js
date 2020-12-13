import React, { useState, useEffect } from 'react';
import Store from './Store';
import getBlockchain from './Ethereum';

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState({});
  const [dai, setDai] = useState({});

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, dai } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setDai(dai);
    };
    init();
  }, []);

  if (typeof window.ethereum === 'undefined') {
    return (
      <div className="container">
        <div className="col-sm-1">
          <h1 className="text-center">
            Ethereum Blockchain <br /> E-commerce App{' '}
          </h1>
          <p>
            You need to install latest version of Metamask to use this app.
            Metamask is a wallet, available as a Google chrome extension.
          </p>
          <ul>
            <li>
              Go to the{' '}
              <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                Metamask page
              </a>{' '}
              on the chrome webstore and install it
            </li>
            <li>
              If you already have it installed, uninstall and re-install it
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="col-sm-12">
        <h1 className="text-center">
          Ethereum Blockchain <br /> E-commerce App{' '}
        </h1>
        <Store paymentProcessor={paymentProcessor} dai={dai} />
      </div>
    </div>
  );
}

export default App;
