const storageCartName = "cartItems";

export function main() {
  //alert(123);
  // document
  //   .querySelector(
  //     "body > div > div > main > section.card > div > div.card__right > div > div.card-info__btns > button.card-info__cart.btn-reset"
  //   )
  //   .addEventListener("click", () => {
  //     alert(123);
  //   });
}

export function createItem(props) {
  return {
    id: props.id || console.error("you need to set ID to the item"),
    title: props.title || "Retro Black",
    description:
      props.description ||
      "Id congue tellus neque fermentum mi leo lorem. Id lobortis est viverra sagittis tincidunt egestas quis odio lorem.",
    cost: props.cost || 300,
    colorOptions: props.colorOptions || ["Gold", "Black", "Grey"],
    color: props.color || 0,
    sizeOptions: props.sizeOptions || ["10'' * 30''", "20'' * 50''"],
    size: props.size || 0,
    icon: props.icon || "./../../img/product-1",
    dataset: props.dataset || {},
  };
}
// function findItemById(id) {
//   let cartItems = localStorage.getItem(storageCartName) || [];
//   return cartItems.map((element) => element.id).indexOf(id);
//   // let foundedIndex = -1;
//   // cartItems.forEach((item, index) => {
//   //   if(item.id == id) {
//   //     foundedIndex = index;
//   //     return;
//   //   }
//   // });
// }
export function getItems() {
  return JSON.parse(localStorage.getItem(storageCartName)) || [];
}
export function getGrouppedItems() {
  let items = getItems();
  // group unique elements
  let uniqueItems = [];
  let j = 0;
  for (let item of items) {
    // add count property
    if (!item.hasOwnProperty("itemCount")) item.itemCount = 1;
    // add link to original item in cart
    if (!item.hasOwnProperty("linkToCartItem")) item.linkToCartItem = [item.id];
    // else item.linkToCartItem.push(item.id);
    j++;
    // add first item as unique
    if (uniqueItems.length < 1) {
      uniqueItems.push(item);
      continue;
    }
    // check
    let isUnique = true;
    let i = 0;
    for (let uniqueItem of uniqueItems) {
      let score = 0;
      // check title
      if (item.title == uniqueItem.title) score++;
      // check color
      if (item.color == uniqueItem.color) score++;
      // check size
      if (item.size == uniqueItem.size) score++;
      // is not a unique element, group it
      if (score >= 3) {
        isUnique = false;
        uniqueItems[i].itemCount++;
        uniqueItems[i].linkToCartItem.push(item.id);
        break;
      }
      i++;
    }
    // is a unique element
    if (isUnique) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
}
export function setItems(itemsArray) {
  localStorage.setItem(storageCartName, JSON.stringify(itemsArray));
}
function clearCart() {
  setItems([]);
}
export function addItem(item) {
  let items = getItems();
  items.push(item);
  setItems(items);
}
export function removeItem(id) {
  let cartItems = getItems();
  let index = cartItems.map((element) => element.id).indexOf(id);
  if (index < 0) return;
  cartItems.splice(index, 1);
  setItems(cartItems);
}
export function calculateCartPrice() {
  let price = 0;
  getItems().forEach((item) => {
    price += item.cost;
  });
  return price;
}
export function duplicateItem(id) {
  const items = getItems();
  const index = items.map((item) => item.id).indexOf(id);
  const item = items[index];
  const copiedItem = JSON.parse(JSON.stringify(item));
  addItem(copiedItem);
}
