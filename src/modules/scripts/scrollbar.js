function showScrollBarOnPageScroll() {
    const head =  document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML = (`
        ::-webkit-scrollbar-thumb {
            background: #949aa1;
        }
    `);
    head.appendChild(style);
    console.log(head, style);
}

function getScrollEvent() {
   window.addEventListener('click', (e) => {
        console.log(e);
        showScrollBarOnPageScroll();
    });
}
export default function showScrollBar() {
    getScrollEvent()
}