'use strict';

const state = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentEditId: null
};

const tableBody = document.querySelector('#userTable tbody');
const userForm = document.getElementById('userForm');
const jsonOutput = document.getElementById('jsonOutput');

const saveAndRender = () => {
    localStorage.setItem('users', JSON.stringify(state.users));
    renderTable();
};

const createTableCell = (text) => {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
};

function renderTable() {
    tableBody.textContent = '';

    state.users.forEach(user => {
        const tr = document.createElement('tr');

        tr.appendChild(createTableCell(user.id));
        tr.appendChild(createTableCell(user.name));
        tr.appendChild(createTableCell(user.phone));
        tr.appendChild(createTableCell(user.age));

        const actionTd = document.createElement('td');
        
        const actions = [
            { label: 'View', color: '#6200ee', handler: () => viewUser(user) },
            { label: 'Edit', color: '#6200ee', handler: () => editUser(user) },
            { label: 'Remove', color: '#6200ee', handler: () => removeUser(user.id) }
        ];

        actions.forEach(btnData => {
            const btn = document.createElement('button');
            btn.textContent = btnData.label;
            btn.style.backgroundColor = btnData.color;
            btn.style.color = 'white';
            btn.style.marginRight = '5px';
            btn.onclick = btnData.handler;
            actionTd.appendChild(btn);
        });

        tr.appendChild(actionTd);
        tableBody.appendChild(tr);
    });
}

const addNewBtn = document.getElementById('addNewBtn');
const viewBlock = document.getElementById('viewBlock');

addNewBtn.onclick = function() {
    
    state.currentEditId = null;
    
    userForm.reset();
    
    userForm.style.display = 'block';
    viewBlock.style.display = 'none';
};

userForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = Object.fromEntries(formData.entries());

    if (state.currentEditId) {
        state.users = state.users.map(u => 
            u.id === state.currentEditId ? { ...u, ...userData } : u
        );
        state.currentEditId = null;
    } else {
        state.users.push({ id: Date.now(), ...userData });
    }

    userForm.reset();
    userForm.style.display = 'none';
    saveAndRender();
};

function viewUser(user) {
    
    jsonOutput.textContent = JSON.stringify(user, null, 2);
    document.getElementById('viewBlock').style.display = 'block';
}

function editUser(user) {
    state.currentEditId = user.id;
    
    Array.from(userForm.elements).forEach(input => {
        if (user[input.name]) {
            input.value = user[input.name];
        }
    });
}

function removeUser(id) {
    if (confirm('Видалити користувача?')) {
        state.users = state.users.filter(u => u.id !== id);
        saveAndRender();
    }
}

userForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = Object.fromEntries(formData.entries());

    if (state.currentEditId) {
        state.users = state.users.map(u => 
            u.id === state.currentEditId ? { ...u, ...userData } : u
        );
        state.currentEditId = null;
    } else {
        state.users.push({ id: Date.now(), ...userData });
    }

    userForm.reset();
    saveAndRender();
};

renderTable();