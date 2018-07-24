// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/ponchos"
  },
  production: {
    client: "pg",
    connection:
      "postgres://sfmajpsxgcgbcm:123ff31cb622fd595a90ec85f2a3137478fee05bdc028638369afd418d20ef77@ec2-50-19-86-139.compute-1.amazonaws.com:5432/d3uhcauvvihq8b"
  }
};