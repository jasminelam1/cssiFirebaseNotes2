let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
      getNotes(user.uid);
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

function getNotes(userId) {
    console.log('get notes from ' + userId);
    const notesRef = firebase.database().ref(`users/${googleUser.uid}`);
    notesRef.on('value', (bd) => {
        const data = bd.val();
        renderData(data);
    })
}

function renderData(data) {
    console.log(data);
    let html = '';
    for (const dataKey in data) {
        //gets the key in the data
        const note = data[dataKey];
        const cardHtml = appendChild.renderCard(note);
        // html += cardHtml;
        //get card html
        //add card html to the html variable 
    }
    document.querySelector('#app').innerHTML = html;
    //add html to the page
}

function renderCard(note, user) {
    //convert note into html and return it
    // return `
    //     <div class="column is-one-quarter">
    //         <div class="card" onclick="changeBackgound()">
    //             <header class="card-header">
    //                 <span class="card-header-title">${ note.title }</span>
    //             </header>
    //             <div class="card-content">
    //                 <div class="content">${ note.text }</div>
    //             </div>
    //             <div class="date-content">
    //                 <div class="created">${ note.created }</div>
    //             </div>
    //             <div class="name-content">
    //                 <div class="name">${ googleUser.displayName }</div>
    //             </div>
    //         </div>
    //     </div>
    // `;

        // console.log(note)
    const div = document.createElement('div');
    div.classList.add('column', 'is-one-quater');

    const card = document.createElement('div');
    card.classList.add('card');

    div.appendChild(card);

    const header = document.createElement('header');
    header.classList.add('card-header');

    card.appendChild(header)
    

    const span = document.createElement('span');
    span.classList.add('card-header-title');
    document.span.innerText(`${ note.title }`);

    header.appendChild(title)    

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    card.appendChild(cardContent);

    const content = document.createElement('div');
    content.classList.add('content');

    cardContent.appendChild('content');

    const date = document.createElement('div');
    date.classList.add('date-content');

    card.appendChild(date);

    const created = document.createElement('div');
    created.classList.add('created');

    date.appendChild(created);

    const nameContent = document.createElement('div');
    nameContent.classList.add('name-content');

    card.appendChild(nameContent);

    const name = document.createElement('div');
    name.classList.add('name');

    nameContent.appendChild(name);





    return div;
}

function randomColor() {
    const color = "#";
    const randomHex = "123456ABCDEF";  
    for(var i = 0; i<6;i++){
        color+= randomHex[Math.floor(Math.random()*16)]
    }
   
    return color;
}

