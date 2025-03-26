import { screen, render, getAllByTestId } from '@testing-library/react';
import CounterChips from './CounterChips';

const renderChips = (likeCount, commentCount) => {
    render(<CounterChips likeCount={likeCount} commentCount={commentCount} />);
};

test('renders 2 chips', () => {
    renderChips(1, 2);

    const chips = document.querySelectorAll('.MuiChip-root');

    expect(chips).toHaveLength(2);
});