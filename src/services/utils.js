export const sortItems = (items) => {
    if(items) {
      return items.sort((a,b) => {
        if(a.name > b.name) {
          return 1
        }
        if(a.name < b.name) {
          return -1
        }
        return 0
      })
    } else return undefined
  }

  export const cutName = (name) => {
    const maxLength = 18;

    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name
  }

  export const checkScroll = (e) => {
    let window = e.currentTarget
    console.log(window)
  }