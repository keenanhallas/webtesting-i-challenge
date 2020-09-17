module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20) {
    return {
      ...item,
      enhancement: item.enhancement + 1
    };
  } else {
    return {...item};
  }
}

function fail(item) {
  let newItem;
  if(item.enhancement < 15) {
    newItem = {
      ...item,
      durability: item.durability - 5
    };
  } else {
    newItem = {
      ...item,
      durability: item.durability - 10
    };
  }

  if(item.enhancement > 16) {
    return {
      ...newItem,
      enhancement: newItem.enhancement - 1
    };
  } else {
    return newItem;
  }
}

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
