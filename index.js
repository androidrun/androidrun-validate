let gb_link;

/* enable link */
const enableLink = function(){
    let btnGO = document.querySelector('.btn-go');
    btnGO.disabled = false;
    btnGO.style.backgroundColor = "green";
    btnGO.addEventListener('click', ()=>{location.replace(gb_link)});
}

/* timer */
const timer = function (init, end) {
    document.querySelector('.timer').textContent = init;
    init > end
      ? setTimeout(() => {
          timer(--init, end);
        }, 1000)
      : enableLink()
  };

const init = function(){
    /* display couter */
    counter_HTML = `<div>
    <h2>Your link is loading...</h2>
    <h1 class="timer">0</h1>
    <button class="btn-go" style="background-color:gray;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;" disabled="disabled" href="#"><i class="fa fa-forward"></i> GO</button></div>

    `;
    document.querySelector('#counter').innerHTML = counter_HTML || console.log('not found');

    /* start timer */
    timer(45,0);
}

const urlP = (() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if(urlParams.has('validate')) {
        let validate = urlParams.get('validate');
        window.history.pushState({}, '', 'androidrun');
        gb_link = validate;
        init();
    } 
})();
