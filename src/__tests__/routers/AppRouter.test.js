import React from 'react';
import { render } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';






describe('<AppRouter /> testing', () => {
    test('should redirect to home if user isnt looged', () => {
        const wrapper = render(<AppRouter />);
        expect(wrapper.length).toEqual(1);
    })
    
})