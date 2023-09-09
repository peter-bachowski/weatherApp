import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './addBaseElements';
import createDataElements from './createDataElements';
import formatHeader from './formatHeader';
import createAstroElements from './createAstroElements';
import loadCurrentLocation from './loadCurrentLocation';

addBaseElements();
formatHeader();
createDataElements();
createAstroElements();
loadCurrentLocation();