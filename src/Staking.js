import React from 'react'
import "./App.css";
import image40 from "./left-cheeze.jpg";
import image41 from "./right-cheeze.jpg";
function Staking() {
  return (
    <>

<main>
  <section className="intro staking">
    <div className="grid-x align-center">
      <figure className="float-el">
        <img className="left-cheeze" src={image40} alt="moonratz"/>
        <img className="right-cheeze" src={image41} alt="moonratz"/>
      </figure>

      <h1 className="reduced text-center">
        Stake MoonRatz,<br />
        earn up to<br />
        <span className="dynamic">
          <span id="apyVal">50.59%</span> APY
          <span className="tooltip"><i data-ico="info"></i>
            <aside className="window">
              <h4>CHEDDA APR</h4>
              <p>Rates shown are estimates, and fluctuate according to many different factors, including token prices, trading volume, liquidity, amount staked, and more.</p>
            </aside>
          </span>
        </span>
      </h1>
      <div className="button-group">
        <a className="btn" href="https://opensea.io/collection/moonratzwtf" title="Buy Moonratz" target="_blank">Buy Moonratz</a>
        <a className="btn secondary" href="https://app.uniswap.org/#/swap?chain=mainnet" title="Buy Trap Token" target="_blank">Buy Trap Token</a>
      </div>
    </div>
  </section>

  <section className="staking-ui">
    <div className="grid-x">
      <div className="staking-dtls large-7 large-offset-1">
        <ul className="table">
          <li className="info">
            <ul>
              <li>
                <ul>
                  <li><h3>Moonratz Staking poll</h3></li>
                  <li className="h3">2849</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Earn $CHEDDA per 1 NFT</li>
                  <li>∼7 p/w</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="pers-data">
            <ul>
              <li>
                <ul>
                  <li className="h3">Staked</li>
                  <li className="h3"><span className="tooltip">
                    <span id="staked">#2652, #456, #4, ...</span> 

                    <aside className="window">
                      <h4>Stacked NFTs</h4>
                      <p id="fullStaked">#2652, #456, #4, #4351, #3334</p>
                   </aside>
                  </span> 0</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="h3">Chedda Yield</li>
                  <li className="h3">0</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <button id="stake" className="btn span">Stake</button>
      </div>

      <div className="large-3" data-card>
        <h3>Stacking rewards</h3>
        <p>The Chedda token is non-tradeable
          and is pegged to ETH with a stable
          price. The ratio of peg is 1:3000
          (ETH:CHEDDA) and will be
          maintained same at all times.</p>
        <br />

        <h3>Stacking Requirements</h3>
        <p>1 NFT x 50$ of RatTrap tokens</p>
      </div>
    </div>
  </section>
</main>
{/* 
<aside className="modal">
  <div className="window">
    <button className="close"><i data-ico="close"></i></button>

    <h3>Select moonratz to stake</h3>
    <hr />

    
    <div className="clear-span"><a className="clear">Clear list</a></div>

    <button className="btn span">Stake</button>
  </div>
</aside>

<aside className="modal">
  <div className="window">
    <button className="close"><i data-ico="close"></i></button>

    <h3>View on Etherscan</h3>
    <hr />

    <div className="info text-center">
      <p><small><a href="#" target="_blank">0x1AF048B90b9694f8308bE442C5044a5df9D6t1172</a></small></p>
      <p>Status: <span id="status">Pending</span></p>
    </div>
  </div>
</aside> */}

<footer className="footer">
  <ul className="h2" data-list="inline">
    <li><a href="dist/assets/img/whitepaper.pdf" title="Whitepaper" target="_blank">Whitepaper</a></li>
    <li><a href="/Contracts" title="Contracts">Contracts</a></li>
    <li><a href="/Faq" title="Faq">Faq</a></li>
    <li><a href="mailto:hi@moonratz.com?subject=MoonRatz%20Question&body=Describe%20your%20question:" title="hi@moonratz.com" target="_blank">hi@moonratz.com</a></li>
  </ul>

  <p className="trms">MoonRatz ©
    <script>
      document.write(new Date().getFullYear())
    </script>
    All rights reserved.</p>
</footer>
{/* 
<script src="/home/team/Desktop/mango/src/js/app.js"></script> */}

</>
  )
}

export default Staking;
