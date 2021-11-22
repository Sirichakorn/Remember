function randomCharToShow(max_len, buffer) {
  let i = null;
  while(true) {
    i = Math.floor(Math.random() * max_len);
    if (!checkRepeat(i, max_len, buffer)) { break; }
  }
  // console.log(i);
  elem_text_char.text(CHAR_LIST[i].char);
  _correct_answer_id = CHAR_LIST[i].id;
}

function checkRepeat(index, max_len, buffer) {
  if (buffer.includes(index)) {
    return true;
  } else {
    if (buffer.length >= (max_len-1)) { buffer.length = 0; }
    buffer.push(index);
    return false;
  }
}