import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';




describe('<AppRouter /> testing', () => {
    test('should redirect to home if user isnt looged', () => {
        const wrapper = shallow( 
            <AppRouter />
        );
        expect( wrapper ).toMatchSnapshot();
    })
    
})