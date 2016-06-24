import $ from 'jquery'

function clearInvalid(input, n){
  return input.filter(x => x.id !== n)
}

export default class Valid{
  constructor(){
    this.input = [];
  }
  Check(condition, target, value, n){
    if(condition) {
      this.input.push({id: n, value: value});
      $(target).addClass('invalid-input')
    }
    if(value.length < 1) {
      this.input = clearInvalid(this.input, n);
      $(target).removeClass('invalid-input')
    }
    if(!condition) {
      this.input = clearInvalid(this.input, n);
      $(target).removeClass('invalid-input')
    }

  }
  Length(target, value, n){
    this.Check(value.length < 2, target, value, n);
  }
  Regex(target, value, regex, n){
    this.Check(regex.test(value) == false, target, value, n);
  }
}