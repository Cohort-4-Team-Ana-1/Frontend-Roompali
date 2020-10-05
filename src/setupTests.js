

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json'
<<<<<<< HEAD
require('jest-localstorage-mock');
=======


>>>>>>> 4e5dc40248e28dac0fa96c2b9cf3557640bab9f2
Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))



window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};