module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: '1234',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, //  textoExemplo => texto_exemplo
    underscoredAll: true,
  },
};
