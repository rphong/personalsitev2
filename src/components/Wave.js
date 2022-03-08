import React from 'react';

const Wave = () => (
    <div className='waveDiv'>
        <svg id="wave" viewBox="0 0 1440 340" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient-0" x1="0%" y1="51%" x2="100%" y2="49%">
                    <stop offset="5%" stopColor="#00d08466"></stop>
                    <stop offset="95%" stopColor="#0499f266"></stop>
                </linearGradient>
            </defs>
            <path d="M 0,600 C 0,600 0,150 0,150 C 101.58851674641147,141.0334928229665 203.17703349282294,132.06698564593302 286,141 C 368.82296650717706,149.93301435406698 432.88038277511964,176.76555023923447 533,197 C 633.1196172248804,217.23444976076553 769.3014354066985,230.87081339712918 886,205 C 1002.6985645933015,179.12918660287082 1099.9138755980862,113.75119617224881 1189,98 C 1278.0861244019138,82.24880382775119 1359.043062200957,116.1244019138756 1440,150 C 1440,150 1440,600 1440,600 Z" fill="url(#gradient-0)" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
            <defs>
                <linearGradient id="gradient-1" x1="0%" y1="51%" x2="100%" y2="49%">
                    <stop offset="5%" stopColor="#00d08466"></stop>
                    <stop offset="95%" stopColor="#0499f266"></stop>
                </linearGradient>
            </defs>
            <path id="path2" fill="url(#gradient-1)" d="M 0 600 C 0 600 0 150 0 0 C 249 106 305 -5 555 34 C 690 52 759 99 815 127 C 1185 330 1389 25 1440 50 C 1440 150 1440 600 1440 600 Z"></path>
            <defs>
                <linearGradient id="gradient-2" x1="0%" y1="51%" x2="100%" y2="49%">
                    <stop offset="5%" stopColor="#00d08466"></stop>
                    <stop offset="95%" stopColor="#0499f266"></stop>
                </linearGradient>
            </defs>
            <path id="path3" fill="url(#gradient-2)" d="M 0 650 C 0 650 0 200 0 150 C 167 89 305 45 555 84 C 690 102 759 149 815 177 C 992 279 1023 339 1440 350 C 1440 200 1440 650 1440 650 Z"></path>
        </svg>
    </div>
);

export default Wave;