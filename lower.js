
const CHAR_LIST = [
  { 'id': 1, 'char': '子', 'read': 'จื้อ', 'desc': 'ชวด', 'elem': 'น + (-)', 'time': '23:00 - 01:00 น.', },
  { 'id': 2, 'char': '丑', 'read': 'ทิ่ว', 'desc': 'ฉลู', 'elem': 'ด -', 'time': '01:00 - 03:00 น.', },
  { 'id': 3, 'char': '寅', 'read': 'เอี๊ยง', 'desc': 'ขาล', 'elem': 'ม +', 'time': '03:00 - 05:00 น.', },
  { 'id': 4, 'char': '卯', 'read': 'เบ้า', 'desc': 'เถาะ', 'elem': 'ม -', 'time': '05:00 - 07:00 น.', },
  { 'id': 5, 'char': '辰', 'read': 'ซิ้ง', 'desc': 'มะโรง', 'elem': 'ด +', 'time': '07:00 - 09:00 น.', },
  { 'id': 6, 'char': '巳', 'read': 'จี๋', 'desc': 'มะเส็ง', 'elem': 'ฟ - (+)', 'time': '09:00 - 11:00 น.', },
  { 'id': 7, 'char': '午', 'read': 'โง่ว', 'desc': 'มะเมีย', 'elem': 'ฟ + (-)', 'time': '11:00 - 13:00 น.', },
  { 'id': 8, 'char': '未', 'read': 'บี่', 'desc': 'มะแม', 'elem': 'ด -', 'time': '13:00 - 15:00 น.', },
  { 'id': 9, 'char': '申', 'read': 'ซิม', 'desc': 'วอก', 'elem': 'ท +', 'time': '15:00 - 17:00 น.', },
  { 'id': 10, 'char': '酉', 'read': 'อิ้ว', 'desc': 'ระกา', 'elem': 'ท -', 'time': '17:00 - 19:00 น.', },
  { 'id': 11, 'char': '戌', 'read': 'สุก', 'desc': 'จอ', 'elem': 'ด +', 'time': '19:00 - 21:00 น.', },
  { 'id': 12, 'char': '亥', 'read': 'ไห', 'desc': 'กุน', 'elem': 'น - (+)', 'time': '21:00 - 23:00 น.', },
];
const LIST_LEN = CHAR_LIST.length;

var elem_text_char = $('#text_char');
var elem_select_answer = $('[name=select_answer]');
var elem_select_answer2 = $('[name=select_answer2]');
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

    elem_select_answer2.append($('<option>', {
      value: elem.id,
      text: elem.elem
    }));
  }

  randomCharToShow(LIST_LEN, _buffer);

  elem_form_answer.submit((evt) => {
    evt.preventDefault();
    let answer = elem_select_answer.val();
    let answer2 = elem_select_answer2.val();
    if (answer == _correct_answer_id && answer2 == _correct_answer_id) {
      alert('ถูกต้องนะคร้าบบ!!!');
      randomCharToShow(LIST_LEN, _buffer);
      elem_form_answer.trigger('reset');
    } else {
      alert('ผิดครับ!');
    }
  });

});
