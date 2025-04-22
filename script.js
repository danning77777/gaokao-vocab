
let current = 0;
let known = new Set();

let vocab = [];

fetch('vocab.json')
  .then(res => res.json())
  .then(data => {
    vocab = data;
    document.getElementById('totalCount').textContent = vocab.length;
    showWord();
  });

function showWord() {
  if (vocab.length === 0) return;
  const word = vocab[current];
  document.getElementById('word').textContent = word.word;
  document.getElementById('phonetic').textContent = word.phonetic;
  document.getElementById('definition').textContent = word.definition;
  document.getElementById('example').textContent = word.example || "";
  document.getElementById('knownCount').textContent = known.size;
}

function nextWord() {
  current = (current + 1) % vocab.length;
  showWord();
}

function prevWord() {
  current = (current - 1 + vocab.length) % vocab.length;
  showWord();
}

function markKnown() {
  known.add(vocab[current].word);
  document.getElementById('knownCount').textContent = known.size;
}
