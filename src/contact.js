function activateBtn(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const home = document.getElementById(id);
    home.classList.add('active');
}

function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('contact-section');

    const title = document.createElement('h2');
    title.classList.add('contact-section-title');
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d) => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('contact-section-description');
        paragraph.textContent = d;
        section.appendChild(paragraph);
    })

    return section;
}

function createGoogleMap() {
    const mapContainer = document.createElement('div');
    mapContainer.classList.add('mapouter');

    const gmapCanvas = document.createElement('div');
    gmapCanvas.classList.add('gmap-canvas');

    const iframe = document.createElement('iframe');
    iframe.width = '500';
    iframe.height = '340';
    iframe.id = 'gmap_canvas';
    iframe.src = 'https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed';
    
    gmapCanvas.appendChild(iframe);
    mapContainer.appendChild(gmapCanvas);

    return mapContainer;
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
        '2880 Broadway, New York, NY, 10025'
        
    ]);

    const googleMap = createGoogleMap();

    content.appendChild(phoneNumber);
    content.appendChild(address);
    content.appendChild(googleMap);
}
