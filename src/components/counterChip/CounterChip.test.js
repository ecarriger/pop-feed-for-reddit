import { render, screen } from '@testing-library/react';

import CounterChip from './CounterChip';

const renderCounterChip = (count, icon) => {
    render(<CounterChip count={count} icon={icon} />);
}

test('renders count of 10 when passed 10 as count prop', () => {
    renderCounterChip(10, '');

    const count = screen.getByRole('heading', {
        name: /10/i
    });

    expect(count).toBeInTheDocument();
});
test('renders count of -10 when passed 10 as count prop', () => {
    renderCounterChip(-10, '');

    const count = screen.getByRole('heading', {
        name: /-10/i
    });

    expect(count).toBeInTheDocument();
});