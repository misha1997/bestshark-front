`use client`

import styles from "./jackpot.module.css"

export default function Jackpot() {

    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={`${styles.main}`}>
            {/* <div > */}
            <svg className={`${styles.ellipse1}`} xmlns="http://www.w3.org/2000/svg" width="383" height="322" viewBox="0 0 383 322" fill="none">
                <g opacity="0.55" filter="url(#filter0_f_268_81198)">
                    <ellipse cx="191.452" cy="160.838" rx="47.0658" ry="87.6332" transform="rotate(-70.68 191.452 160.838)" fill="#42F5D5" />
                </g>
                <defs>
                    <filter id="filter0_f_268_81198" x="0.142296" y="0.648674" width="382.62" height="320.379" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="53.5714" result="effect1_foregroundBlur_268_81198" />
                    </filter>
                </defs>
            </svg>
            {/* </div> */}

            <div className={`${styles.gamesection}`}>
                <div className={`${styles.game}`}>
                    <div className={`${styles.header}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M13.9935 12.0362C13.6116 12.0362 13.2416 12.0906 12.8923 12.1912L9.64477 5.07312H12.6029C14.3498 5.07312 15.7654 3.6575 15.7654 1.91062V0H12.0604C10.3135 0 8.89789 1.41562 8.89789 3.1625V3.70438C8.89789 2.45312 7.88352 1.43875 6.63227 1.43875H3.81164V2.8075C3.81164 4.05875 4.82602 5.07312 6.07727 5.07312H8.35602L5.10977 12.1912C4.78039 12.0931 4.40227 12.0362 4.01102 12.0362C4.00977 12.0362 4.00914 12.0362 4.00789 12.0362C1.81164 12.0362 0.0253906 13.8225 0.0253906 16.0181C0.0253906 18.2137 1.81164 20 4.00727 20C6.20289 20 7.98914 18.2137 7.98914 16.0181C7.98914 14.6213 7.26602 13.39 6.17414 12.6787L8.99977 6.48438L11.8254 12.6787C10.7266 13.3994 10.011 14.625 10.0104 16.0175C10.0104 18.2125 11.7966 19.9994 13.9923 19.9994C16.1879 19.9994 17.9741 18.2131 17.9741 16.0175C17.9741 13.8219 16.1879 12.0356 13.9923 12.0356L13.9935 12.0362Z" fill="white" />
                        </svg>
                        <h2>JACKPOT</h2>
                    </div>
                    <div className={`${styles.wheel}`}>
                        <div className={`${styles.outsideCircle}`}></div>
                        <div className={`${styles.mainCircle}`}></div>
                        <div className={`${styles.timer}`}>
                            <h2>
                                120
                            </h2>
                            <h3>
                                SECONDS
                            </h3>
                        </div>
                    </div>
                    <div className={`${styles.bet}`}>
                        <p>Enter the amount</p>
                        <input className={`${styles.sum}`} type="text" placeholder="0.00"></input>
                        <div className={`${styles.wrapper}`}>
                            <button className={`${styles.modifybutton}`}>/2</button>
                            <button className={`${styles.modifybutton}`}>X2</button>
                        </div>
                        <div className={`${styles.addcash}`}>
                            <button className={`${styles.addcashbutton}`}>+1</button>
                            <button className={`${styles.addcashbutton}`}>+5</button>
                            <button className={`${styles.addcashbutton}`}>+10</button>
                            <button className={`${styles.addcashbutton}`}>+100</button>
                            <button className={`${styles.addcashbutton}`}>+500</button>
                            <button className={`${styles.addcashbutton}`}>+ALL</button>

                        </div>
                        <button className={`${styles.play}`}>PLAY</button>
                    </div>
                </div>
                <div className={`${styles.players}`}>
                    <div className={`${styles.header}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_268_81393)">
                                <path d="M14.1663 17.5V15.8333C14.1663 14.9493 13.8152 14.1014 13.19 13.4763C12.5649 12.8512 11.7171 12.5 10.833 12.5H4.16634C3.28229 12.5 2.43444 12.8512 1.80932 13.4763C1.1842 14.1014 0.833008 14.9493 0.833008 15.8333V17.5M19.1663 17.5V15.8333C19.1658 15.0948 18.92 14.3773 18.4675 13.7936C18.015 13.2099 17.3814 12.793 16.6663 12.6083M13.333 2.60833C14.05 2.79192 14.6855 3.20892 15.1394 3.79359C15.5932 4.37827 15.8395 5.09736 15.8395 5.8375C15.8395 6.57764 15.5932 7.29673 15.1394 7.88141C14.6855 8.46608 14.05 8.88308 13.333 9.06667M10.833 5.83333C10.833 7.67428 9.34062 9.16667 7.49967 9.16667C5.65872 9.16667 4.16634 7.67428 4.16634 5.83333C4.16634 3.99238 5.65872 2.5 7.49967 2.5C9.34062 2.5 10.833 3.99238 10.833 5.83333Z" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_268_81393">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2>JACKPOT</h2>
                        <div className={`${styles.playerscount}`}>27</div>
                    </div>
                    <div className={`${styles.playerslist}`}>
                        <div className={`${styles.tablehead}`}>
                            <div className={`${styles.dot} ${styles.tablecells}`}><div></div></div>
                            <div className={`${styles.user} ${styles.tablecells}`}>User</div>
                            <div className={`${styles.rate} ${styles.tablecells}`}>Rate</div>
                            <div className={`${styles.chance} ${styles.tablecells}`}>Chance</div>
                        </div>

                        {testArr.map( obj => {
                            console.log("123");
                            return (
                                <div className={`${styles.playerdata}`}>
                                    <div className={`${styles.dot} ${styles.tablecells}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <circle cx="5" cy="5" r="5" fill="#886ADD" />
                                        </svg>
                                    </div>
                                    <div className={`${styles.user} ${styles.tablecells}`}>
                                        <div className={`${styles.avatar} ${styles.tablecells}`}>
                                            <img src="data:image/jpeg;base64,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"></img>
                                        </div>
                                        janstay
                                    </div>
                                    <div className={`${styles.rate} ${styles.tablecells}`}>$1 240.<span>00</span></div>
                                    <div className={`${styles.chance} ${styles.tablecells}`}>64,18%</div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>
            <div className={`${styles.latestgames}`}>

            </div>
        </div>
    );
}