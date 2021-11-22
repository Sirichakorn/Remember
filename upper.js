
const CHAR_LIST = [
  { 'id': 1, 'char': '甲', 'read': 'กะ', 'desc': 'ไม้ +'},
  { 'id': 2, 'char': '乙', 'read': 'อิก', 'desc': 'ไม้ -'},
  { 'id': 3, 'char': '丙', 'read': 'เปี้ย', 'desc': 'ไฟ +'},
  { 'id': 4, 'char': '丁', 'read': 'เต็ง', 'desc': 'ไฟ -'},
  { 'id': 5, 'char': '戊', 'read': 'โบ่ว', 'desc': 'ดิน +'},
  { 'id': 6, 'char': '己', 'read': 'กี้', 'desc': 'ดิน -'},
  { 'id': 7, 'char': '庚', 'read': 'แก', 'desc': 'ทอง +'},
  { 'id': 8, 'char': '辛', 'read': 'ซิง', 'desc': 'ทอง -'},
  { 'id': 9, 'char': '壬', 'read': 'ยิ้ม', 'desc': 'น้ำ +'},
  { 'id': 10, 'char': '癸', 'read': 'กุ่ย', 'desc': 'น้ำ -'}
];
const LIST_LEN = CHAR_LIST.length;

var elem_text_char = $('#text_char');
var elem_select_answer = $('[name=select_answer]');
var elem_form_answer = $('#form_answer');

var _buffer = [];
var _correct_answer_id = null;

$(document).ready(() => {

  for (let i = 0; i < CHAR_LIST.length; i++) {
    const elem = CHAR_LIST[i];
    elem_select_answer.append($('<option>', {
      value: elem.id,
      text: `[${elem.read}] ${elem.desc}`
    }));
  }

  randomCharToShow(LIST_LEN, _buffer);

  elem_form_answer.submit((evt) => {
    evt.preventDefault();
    let answer = elem_select_answer.val();
    if (answer == _correct_answer_id) {
      alert('ถูกต้องนะคร้าบบ!!!');
      randomCharToShow(LIST_LEN, _buffer);
      elem_form_answer.trigger('reset');
    } else {
      alert('ผิดครับ!');
    }
  });

});
