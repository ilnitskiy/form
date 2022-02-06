/*  MENU
------------------------------------------------- */
function menu() {
    let btn = document.querySelector('.burger');
    let menu = document.querySelector('.menu');

    btn.onclick = function(e) {
        e.preventDefault();
        menu.classList.toggle('active');
    };
}

new menu();


/*  SELECT
----------------------------------------------  */
function selects() {
    let select = document.querySelectorAll('.select');

    for (let i = 0; i < select.length; i++) {
        let selectBtn = select[i].querySelector('.select-btn');
        let ul = select[i].querySelector('.select-wrap');
        let li = select[i].querySelectorAll('.select-item');
        let input = select[i].querySelector('input[type="hidden"]');

        selectBtn.onclick = function() {
            this.classList.toggle('active');
            ul.classList.toggle('active');

            for (let j = 0; j < li.length; j++) {
                li[j].onclick = function() {
                  selectBtn.innerHTML = this.innerHTML;
                  
                  selectBtn.classList.remove('active');
                  ul.classList.remove('active');
                  
                  input.setAttribute('value', this.getAttribute('data-value'));
                }
            }
        }
    }
}
selects();

/*  FORM FILE
----------------------------------------------  */
function fieldFile() {
    const inputFile = document.querySelectorAll('input[type="file"]');

    inputFile.forEach(input => {
        const boxFile = input.closest('.box-file');
        const infoLoad = boxFile.querySelector('.info-load');
        const nameFile = boxFile.querySelector('.name-file');
        const deleteFile = boxFile.querySelector('.delet-file');
        const btnFile = boxFile.querySelector('.btn-file');

        input.addEventListener('change', (e) => {
            nameFile.textContent = e.target.files[0].name;
            infoLoad.classList.remove('hidden');
            btnFile.classList.add('active');
        });

        deleteFile.addEventListener('click', (e) => {
            e.preventDefault();
            infoLoad.classList.add('hidden');
            btnFile.classList.remove('active');
        });
    });
}

fieldFile();
