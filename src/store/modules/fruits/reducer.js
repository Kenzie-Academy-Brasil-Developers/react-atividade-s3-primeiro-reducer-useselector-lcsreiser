const initialState = [
  {
    fruit: "Banana",
    img: "https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png",
  },
  {
    fruit: "Maçã",
    img: "https://cdn.pixabay.com/photo/2014/12/21/23/25/apples-575317_960_720.png",
  },
  {
    fruit: "Morango",
    img: "https://cdn.pixabay.com/photo/2012/04/18/12/54/strawberry-36949_960_720.png",
  },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
