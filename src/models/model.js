'use strict';

class dataModel {

  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof dataModel
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  /**
   *
   *
   * @param {*} record
   * @returns
   * @memberof dataModel
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   *
   *
   * @param {*} _id
   * @param {*} record
   * @returns
   * @memberof dataModel
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof dataModel
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = dataModel;
