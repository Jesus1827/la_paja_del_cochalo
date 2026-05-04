const road = {
    login: '/',
    loginToGFPICTPREVUE: 'gfpictprevue',
    GFPICTPREVUEtoLeading: 'leading'
};

const config = {
    dataBase: '../assets/dataBase/user.json',

};

function navegarA(seccion) {
    const rutaReal = `./pages/${seccion}/`; 
    window.location.href = rutaReal;
}

function getDataUser() {
    const name = localStorage.getItem('usuarioNombre');
    const rol = localStorage.getItem('usuarioRol');

    if (!name) {
        window.location.href = '../../';
        return;
    }else{
        return { name, rol };
    }
    
}

function getRoad() {
    const getRoad = window.location.pathname;
    return getRoad;
}
