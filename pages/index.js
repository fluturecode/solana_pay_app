import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const {publicKey } = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <img src='https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif' alt='emoji'/>

      <div className='button-container'>
        <WalletMultiButton className='cta-button connect-wallet-button'/>
      </div>
    </div>
  )
  return (
    <div >

    </div>
  );
};

export default App;
