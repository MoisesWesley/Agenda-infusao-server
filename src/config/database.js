module.exports = {
    dialect: 'postgres',    //tipo de banco de dados 
    username: 'postgres',   //usuario com acesso ao banco de dados 
    password: 'docker',     //senha do banco de dados 
    database: 'apiagenda',   //nome do banco de dados a ser criado
    define: {
        timestamps: true,   //cria dentro das tabelas os campos criate_at e update_at armazena a data de criacao e atualizacao do registro
        underscored: true,  //nome do formato das tabelas snake_case
    },
}