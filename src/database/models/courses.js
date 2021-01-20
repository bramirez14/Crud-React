'use strict';
module.exports = (sequelize, DataTypes) => {
  const courses = sequelize.define('courses', {
    course: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    professor: DataTypes.STRING,
    hours:DataTypes.INTEGER,
    level:DataTypes.STRING,
    image:DataTypes.STRING,
    public_id:DataTypes.STRING,
 
  }, {});
 
  return courses;
};
