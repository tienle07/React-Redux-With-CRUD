
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    importDate: {
      type: Sequelize.STRING
    },
    usingDate: {
      type: Sequelize.STRING
    },
    cateID: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
