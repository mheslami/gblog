/**
 * A simple github api library for node
 * Author: Mohammad Eslami
 */

import axios from 'axios';

const apiUrl = 'https://api.github.com';
const repoPath = 'https://github.com/mheslami/mheslami.github.io';

const makeRequest = (url, method, data) => {
    return axios({
        url,
        method,
        data,
        header: {
            Accept: 'application/vnd.github.v3+json'
        }
    })
};

export const createFile = (filePath) => {

};

export const fileExists = (filePath) => {
    return makeRequest('')
};

