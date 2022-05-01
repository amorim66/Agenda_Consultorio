(async()=>{
    const db = require("./db");
    console.log('SELECT * FROM USUARIO');
    const usuarios = await db.selectUsuario();
    console.log(usuarios);

    //console.log('INSERT INTO USUARIO');
    //const result = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
    //console.log(result);

    //console.log('DELETE FROM USUARIO');
    //const result3 = await db.deleteUsuario(8);
    //console.log(result3);

    //console.log('UPDATE USUARIO');
    //const result2 = await db.updateUsuario(3, {nome:"Zé José", senha: "hhjdhjjhsd7368"});
    //console.log(result2);
    
})();
