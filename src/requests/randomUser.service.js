export class RandomUserService {
    /**
     * Fetch random users from the API.
     * @param {number} page - The page number for fetching data.
     * @param {number} [results=50] - The number of users to fetch per page.
     * @param {string} [seed='randomuserlist'] - The seed to generate the same set of users.
     * @returns {Promise<RandomUser[]>} - A promise that resolves to an array of user objects.
     */
    async fetchRandomUsers(page, results = 50, seed = 'randomuserlist') {
        const url = `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching random users:', error);
            return null;
        }
    }
}
/**
 * @typedef {Object} RandomUser
 * @property {Object} name
 * @property {string} name.title
 * @property {string} name.first
 * @property {string} name.last
 * @property {string} email
 * @property {Object} login
 * @property {string} login.uuid
 * @property {Object} picture
 * @property {string} picture.thumbnail
 */
