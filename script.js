

const goods = [
{title: 'Shirt', price: 150,image: 'item1.jpg' },
{title: 'Socks', price: 50, image: 'item2.jpg'},
{title: 'Jacket', price: 350, image: 'item3.jpg'},
{title: 'Shoes', price: 250, image: 'item4.jpg'},
{title: 'Shoes', price: 250, image: 'item5.jpg'},
{title: 'Shoes', price: 250, image: 'item6.jpg'},
{title: 'Shoes', price: 250, image: 'item7.jpg'},
{title: 'Shoes', price: 250, image: 'item8.jpg'}
];

const getGoodsItemTemplate = ({ title, price, image }) => {
  return `<div class="item">
              <div class="bgimg">
              <img src="img/${image}" alt="product class="productImg"">
                <div class="bgimg-black">
                  <button><img src="img/addcart.png" alt="cart"> Add to Cart</button>
                </div>
              </div>
              <div class="price">
                <h3>${title}</h3>
                <p>${price}$</p>
              </div>
            </div>`;
}
const renderGoods = () => {
  const goodsTemplates = goods.map(item => getGoodsItemTemplate(item)).join(" ");
  const wrapper = document.querySelector(".goods-list");
  wrapper.innerHTML = goodsTemplates;
}
renderGoods();
