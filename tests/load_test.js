import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 15,
    duration: '30s',
};

export default function () {
    const res = http.get('http://localhost:8081');
    check(res, {
        'homepage loaded': (r) => r.body.includes('Dovzhenko'), // Перевірка, чи є моє прізвище на сторінці
    });
    sleep(1);
}