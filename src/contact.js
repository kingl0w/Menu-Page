function activateBtn(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const home = document.getElementById(id);
    home.classList.add('active');
}

function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d) => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('section-description');
        paragraph.textContent = d;
        section.appendChild(paragraph);
    })

    return section;
}

export default function loadContact() {
    const content = document.getElementById('main-content');
    content.classList.add('flex-layout');
    content.classList.remove('grid-layout');
    content.textContent = '';
    activateBtn('contact');

    const phoneNumber = createSection('Phone Number', [
        '564-923-5014',
        '104-385-2042'
    ]);
    
    const address = createSection('Address', [
        'location#1',
        'location#2'
    ]);

    content.appendChild(phoneNumber);
    content.appendChild(address);
}
