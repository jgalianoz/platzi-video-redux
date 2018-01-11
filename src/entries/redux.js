import { createStore } from 'redux';

const $form = document.getElementById('form');

$form.addEventListener('submit', handelSubmit)

function handelSubmit(ev) {
  ev.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    },
  });
}

const initialState = [
  {
    title: 'Despacito'
  },
  {
    title: 'One more time'
  },
  {
    title: 'Titanium'
  },
];

const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const $container = document.getElementById('playlist');

function render() {
  const playlist = store.getState();
  const template = `
    <ul>
      ${playlist.map(song => `
        <li>${song.title}</li>
      `
    )}
    </ul>
  `;
  $container.innerHTML = template
}
render();

store.subscribe(render);
