const INITIAL_STATE = {
  sections: [{

    title: 'womens',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    size: 'large',
    id: 1,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1524383954004-5663dc51fa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    size: 'large',
    id: 2,
    linkUrl: 'shop/mens'
  },
  {
    title: 'new arrivals',
    imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    size: 'large',
    id: 3,
    linkUrl: 'shop/new'
  }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
    return state;
  }
};

export default directoryReducer;
