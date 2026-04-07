import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '20s', target: 10 }, // плавний розгін
        { duration: '40s', target: 30 }, // пік
        { duration: '20s', target: 0 },  // спад
    ],
};

export default function () {
    http.get('http://localhost:8081');
    sleep(0.5);
}