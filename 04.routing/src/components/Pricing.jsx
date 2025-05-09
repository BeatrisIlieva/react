import { NavLink, Route, Routes, Outlet } from 'react-router';
import IndividualPricing from './IndividualPricing';
import BusinessPricing from './BusinessPricing';

export default function Pricing() {
    return (
        <div className='relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
            <div className='hidden lg:flex lg:gap-x-12'>
                <NavLink
                    to='/pricing'
                    className='text-sm/6 font-semibold text-gray-900'
                    style={({ isActive }) => (isActive ? { color: 'red' } : {})}
                >
                    {' '}
                    Individual
                </NavLink>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
                <NavLink
                    to='/pricing/business'
                    className='text-sm/6 font-semibold text-gray-900'
                    style={({ isActive }) => (isActive ? { color: 'red' } : {})}
                >
                    {' '}
                    Business
                </NavLink>
            </div>
            <Outlet />
            {/* <Routes>
                <Route index element={<IndividualPricing />} />
                <Route path='business' element={<BusinessPricing />} />
            </Routes> */}
        </div>
    );
}
