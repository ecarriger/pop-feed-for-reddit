import { formatTimestamp } from './utils.js';

describe('formatTimestamp tests', () => {
    test('returns invalid time if timestamp is not a number', () => {
        const formattedTimestamp = formatTimestamp('1');

        expect(formattedTimestamp).toBe('Invalid time');
    });
    test('returns "1 min. ago" when passed timestamp of less than 1 minute ago', () => {
        const oneSecondAgo = new Date();
        oneSecondAgo.setSeconds(oneSecondAgo.getSeconds() - 1);
        const formattedTimestamp = formatTimestamp(Number(oneSecondAgo));

        expect(formattedTimestamp).toBe('1 min. ago');
    });
    test('returns "1 min. ago" when passed timestamp of 1 minute ago', () => {
        const oneMinuteAgo = new Date();
        oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1);
        const formattedTimestamp = formatTimestamp(Number(oneMinuteAgo));

        expect(formattedTimestamp).toBe('1 min. ago');
    });
    test('returns "1 hr. ago" when passed timestamp of 1 hour ago', () => {
        const oneHourAgo = new Date();
        oneHourAgo.setHours(oneHourAgo.getHours() - 1);
        const formattedTimestamp = formatTimestamp(Number(oneHourAgo));

        expect(formattedTimestamp).toBe('1 hr. ago');
    });
    test('returns "1 day ago" when passed timestamp of 1 day ago', () => {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        const formattedTimestamp = formatTimestamp(Number(oneDayAgo));

        expect(formattedTimestamp).toBe('1 day ago');
    });
    test('returns "2 days ago" when passed timestamp of 2 days ago', () => {
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        const formattedTimestamp = formatTimestamp(Number(twoDaysAgo));

        expect(formattedTimestamp).toBe('2 days ago');
    });
    test('returns "2 mo. ago" when passed timestamp of 2 months ago', () => {
        const monthsAgo = new Date();
        monthsAgo.setMonth(monthsAgo.getMonth() - 2);
        monthsAgo.setDate(monthsAgo.getDate() - 4);
        const formattedTimestamp = formatTimestamp(Number(monthsAgo));

        expect(formattedTimestamp).toBe('2 mo. ago');
    });
    test('returns "1 yr. ago" when passed timestamp of 1 year ago', () => {
        const yearAgo = new Date();
        yearAgo.setFullYear(yearAgo.getFullYear() - 1);
        const formattedTimestamp = formatTimestamp(Number(yearAgo));

        expect(formattedTimestamp).toBe('1 yr. ago');
    });
});