export const loadMockRedditData = async () => {
    try {
        const response = await fetch('../../__mocks__/redditData.json');
        if(response.ok) {
            const data = await response.json();
            return data.data.children;
        }
        else {
            console.log('Response not ok');
        }

    } 
    catch(e) {
        console.log(e);
    }
}