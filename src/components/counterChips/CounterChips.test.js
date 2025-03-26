import { screen, render } from '@testing-library/react';
import CounterChips from './CounterChips';

const renderChips = (likeCount, commentCount) => {
    render(<CounterChips likeCount={likeCount} commentCount={commentCount} />);
};

test('renders 2 chips', () => {
    renderChips(1, 2);

    const chips = document.querySelectorAll('.MuiChip-root');

    expect(chips).toHaveLength(2);
});
test('renders chip with ThumbsUp icon', () => {
    renderChips(1, 2);

    const chip = screen.getByTestId('ThumbUpIcon');

    expect(chip).toBeInTheDocument();
});
test('renders chip with Comment icon', () => {
    renderChips(1, 2);

    const chip = screen.getByTestId('CommentIcon');

    expect(chip).toBeInTheDocument();
});