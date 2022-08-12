import React from 'react'
import './App.css';
import "./Style.css";
function Nav() {
  return (
  <>
    <div id="desktop-nav">
   <nav id="nav" className="slide-down">
  <div>
    <a href="/" title="MoonRatz Home"><i data-ico="mlogo"></i></a>

    <input id="menu-toggle" type="checkbox"/>
    <label id="mtoggle" for="menu-toggle">
      <span></span><span></span><span></span>
    </label>

    <ul className="spaced" data-list="inline">
      <li><a href="https://opensea.io/collection/moonratzwtf" title="NFT" target="_blank">NFT</a></li>
      <li><a href="#" title="Token" target="_blank">Token</a></li>
      <li><a href="/Stake" title="Staking">Staking</a></li>
      <li><a href="/Lottery" title="Lottery">Lottery</a></li>
      <li><a href="#" title="P2E Game">P2E Game</a></li>
      <li id="options">
        <input id="submenu-toggle" type="checkbox"/>
        <label for="submenu-toggle"><i data-ico="options"></i></label>
        <section className="submenu">
          <ul data-list="no-disc">
            <li><a href="/Swap" title="Swap">Swap</a></li>
            <li><a href="/Contracts" title="Contracts">Contracts</a></li>
            <li><a href="/whitepaper.pdf" title="Contracts" target="_blank">White Paper</a></li>
          </ul>
        </section>
      </li>
    </ul>

    <ul className="socials" data-list="inline">
      <li><a className="circle" href="https://opensea.io/collection/moonratzwtf" title="MoonRatz on OS" target="_blank"><i
          data-ico="os"></i></a></li>
      <li><a className="circle" href="https://discord.com/invite/PGDgzjBU" title="Moonratz on Discord" target="_blank"><i
          data-ico="discord"></i></a></li>
      <li><a className="circle" href="https://t.me/RATTRAPTOKEN" title="MoonRatz on Telegram" target="_blank"><i
          data-ico="telegram"></i></a></li>
      <li><a className="circle" href="https://twitter.com/moonratzwtf" title="MoonRatz on Twitter" target="_blank"><i
          data-ico="twitter"></i></a></li>
    </ul>
  </div>

  <aside className="melting-nav"></aside>
</nav>
</div>

    <div id="tab-nav">
  <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MoonRatz</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MoonRatz</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">NFT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TOKEN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">STAKING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LOTTERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PZE GAME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SWAP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTRACTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">WHITEPAPER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PZE GAME</a>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              STAKING
            </a>
            </li> */}
            {/* <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul> */}
          
        </ul>
        {/* <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
</div>
  </>
  )
}

export default Nav
