
/*
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
renderGoods();*/


const goodsItems = [
{title: 'Shirt', price: 150,image: 'item1.jpg' },
{title: 'Socks', price: 50, image: 'item2.jpg'},
{title: 'Jacket', price: 350, image: 'item3.jpg'},
{title: 'Shoes', price: 250, image: 'item4.jpg'},
{title: 'Shoes', price: 250, image: 'item5.jpg'},
{title: 'Shoes', price: 250, image: 'item6.jpg'},
{title: 'Shoes', price: 250, image: 'item7.jpg'},
{title: 'Shoes', price: 250, image: 'item8.jpg'}
];


class GoodsList {
  goods = [];

  cartGoods = [];

  __getGoodsItemTemplate({ title, price, image }) {
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

  getGoods(goods) {
    this.goods = goods;
  }

  render() {
    const goodsTemplates = this.goods.map(item => this.__getGoodsItemTemplate(item)).join("");
    const wrapper = document.querySelector(".goods-list");
    wrapper.innerHTML = goodsTemplates;
    const button = document.querySelectorAll('button');
    button.forEach(btn=>{
    btn.addEventListener('click', function click(event){
    console.log('Ты нажал на кнопку!');
    console.log(+event.target);

    })
    })
  }

  sumGoodsList() {
      let array = this.goods;
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
          sum += parseInt(array[i].price);
      }
      //console.log(`Общая стоимость товаров ${sum}₽`);
  }
}

const list = new GoodsList();

list.getGoods(goodsItems);
list.render();
