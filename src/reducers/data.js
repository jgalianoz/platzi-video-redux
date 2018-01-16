export default function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let result = []
      const query = action.payload.query
      state.data.categories.map(list => {
        list.playlist.filter(item => {
          if (item.author.toLowerCase().includes(query) || item.title.toLowerCase().includes(query)) {
            result.push(item)
          }
        })
      })
      return {
        ...state,
        search: result
      }
    }
    default:
      return state
  }
}
