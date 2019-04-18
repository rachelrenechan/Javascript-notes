// Template Literals

const name = 'Rachel';
const age = 17;

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
    </ul>
`;

document.body.innerHTML = html; //can be seen on index.html page