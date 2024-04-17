import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='kuch b'/>
    </div>
    <div>
      <img src={slack} alt='kuch b'/>
    </div>
    <div className="gpt3__atls">
      <img src={atlassian} alt='kuch b'/>
    </div>
    <div>
      <img src={dropbox} alt='kuch b'/>
    </div>
    <div>
      <img src={shopify} alt='kuch b'/>
    </div>
  </div>
);

export default Brand;