import { render, screen } from '@testing-library/react';

import CounterChip from './CounterChip';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

const renderCounterChip = (count, icon) => {
    render(<CounterChip count={count} icon={icon} />);
}

test('renders count of 10 when passed 10 as count prop', () => {
    renderCounterChip(10, <ThumbUpIcon />);

    const count = screen.getByText('10');

    expect(count).toBeInTheDocument();
});
test('renders count of -10 when passed 10 as count prop', () => {
    renderCounterChip(-10, <ThumbUpIcon />);

    const count = screen.getByText('-10');

    expect(count).toBeInTheDocument();
});
test('renders formatted number when 1000', () => {
    renderCounterChip(1000, <ThumbUpIcon />);

    const count = screen.getByText('(-)1,000+');

    expect(count).toBeInTheDocument();
});
test('renders formatted number when -1000', () => {
    renderCounterChip(-1000, <ThumbUpIcon />);

    const count = screen.getByText('(-)1,000+');

    expect(count).toBeInTheDocument();
});
test('renders ThumbUpIcon icon when passed as prop', () => {
    renderCounterChip(1, <ThumbUpIcon role="img" fontSize="small" />);

    const icon = screen.getByTestId('ThumbUpIcon');

    expect(icon).toBeInTheDocument();
});
test('renders CommentIcon icon when passed as prop', () => {
    renderCounterChip(1, <CommentIcon role="img" fontSize="small" />);

    const icon = screen.getByTestId('CommentIcon');

    expect(icon).toBeInTheDocument();
});
test('chip does not render when no number passed', () => {
    renderCounterChip(undefined, <ThumbUpIcon />);

    const chip = document.querySelector('.MuiChip-root');

    expect(chip).not.toBeInTheDocument();
});
test('chip does not render when no icon passed', () => {
    renderCounterChip(10, undefined);

    const chip = document.querySelector('.MuiChip-root');

    expect(chip).not.toBeInTheDocument();
});