function createHeading(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}


function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const home = createBtn('home', 'home');
    const menu = createBtn('menu', 'menu');
    const contact = createBtn('contact', 'contact');

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    return nav;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}



export default function load() {
    const content = document.getElementById('content');
    //header
    const header = createHeading('header', 'Welcome to Mellow World');
    content.appendChild(header);
    //nav
    const nav = createNav('nav');
    content.appendChild(nav);
    //main
    const main = createMain('main-content');
    content.appendChild(main);
    //footer
    const footer = createFooter('footer', 'A taddymason creation');
    content.appendChild(footer);
}

