// Congrats test files 
import Enzyme , { shallow } from 'enzyme';

import Congrats from './Congrats';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without errors', () => {

});

