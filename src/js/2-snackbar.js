import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(e) {
    e.preventDefault();
    const delay = e.target.delay.value;
    const status = e.target.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'fulfilled') { resolve(delay); }
            else { reject(delay); }
        }, delay);
        form.reset();
    });
    promise.then(delay => iziToast.success({
        position: 'topRight',
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: `Fulfilled promise in ${delay} ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        backgroundColor:'#59a10d',
        iconColor: '#fff',
    }))
        .catch(delay => iziToast.error({
            position: 'topRight',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '1.5',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        close: true,
        closeOnEscape: true,
            closeOnClick: true,
        progressBar: true,
        backgroundColor: '#ef4040',
        iconColor: '#fff',
        }))
    console.log(promise);
}

