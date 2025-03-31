import '@testing-library/jest-dom';

jest.mock('./src/utilities/utils', () => {
    const originalModule = jest.requireActual('./src/utilities/utils');

    return {
        __esModule: true,
        ...originalModule,
        addSeperatorToNumber: number => Math.abs(number) >= 1000 ? "(-)1,000+" : number

    }
});