import React from 'react';
import './donate.css';

const Donate = () => {
    return (
        <div className="donation-component">
            <div className="donation-box">
                <div className="verse">
                    <h3>
                        Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.
                    </h3>
                    <p>(2 Corinthians 9:7)</p>
                </div>
                <div className="donation-instructions">
                    <div className="donation-column">
                        <h3>Donate by Cash or Cheque</h3>
                        <p>
                            Donations by Cash/Cheque Make your Cheques payable to: Church of St. Maurice Please place your donations in the
                            donations box next to the candle stand in front of St. Mary’s icon. You may also send your donations in the mail to
                            the Church’s mailing address: 34 Jersey Avenue, Mount Pearl, NL, A1N 1T9 Note: Please make sure that a current address
                            are written on the cheque to ensure that you receive your Tax Receipt.
                        </p>
                    </div>
                    <div className="donation-column">
                        <h3>Donate Online</h3>
                        <p>
                            St. Maurice Coptic Orthodox Church now accepts online donations through email transfer or PayPal. For email transfers,
                            you can send your donation to info@stmaurice.net. PayPal offers a secure method for donating online, accommodating
                            our generous supporters worldwide. You can donate using a major credit card even without a PayPal account.
                        </p>
                        <a class="donate-button" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NTH7549DX2EQL" target="_blank">Donate Now</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Donate;