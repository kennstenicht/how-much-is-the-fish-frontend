import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  // Attributes
  @attr('string') firstname;
  @attr('string') lastname;
  @attr('string') fullname;
  @attr('string') email;


  // Meta
  @attr('date') createdAt;
  @attr('date') updatedAt;


  // Relations
  @hasMany('workspace') workspaces;


  // Getter and setter
  get displayLabel() {
    return this.fullname;
  }

  get initials() {
    return `${this.firstname.substring(1)}${this.lastname.substring(1)}`;
  }
}
